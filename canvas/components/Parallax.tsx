import React from "react";
import img from "../public/carImg.jpg";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import Image from "next/image";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Container({ id }: { id: number }) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <div className="flex h-full items-center justify-items-center relative text-center snap-center">
      <div
        ref={ref}
        className="relative snap-center w-80 h-[500px] m-6 overflow-hidden"
      >
        <Image
          src={img}
          alt="img"
          className="absoulte top-0 left-0 w-full h-full right-0 bottom-0"
          placeholder="blur"
        />
      </div>
      <motion.h2
        className="text-white text-4xl absolute"
        style={{ y }}
      >{`#00${id}`}</motion.h2>
    </div>
  );
}

const Parallax = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <div className="h-full aid snap-y snap-mandatory">
        {[1, 2, 3, 4, 5].map((num: number) => (
          <Container key={num} id={num} />
        ))}
      </div>
      <motion.div
        className="fixed bg-white rounded left-0 right-0 h-2 bottom-14"
        style={{ scaleX }}
      />
    </>
  );
};

export default Parallax;
