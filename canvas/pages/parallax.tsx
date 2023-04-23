import PHero from '@/components/PHero'
import React from 'react'
import { MotionStyle, MotionValue, motion, useScroll, useTransform } from 'framer-motion'
import img from "../public/carImg.jpg";
import Image from 'next/image';

const Block1 = () => {
    const targetRef = React.useRef(null)

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0])
    const scale = useTransform(scrollYProgress, [0.1, 0.5], [1, 2.5])
    const x = useTransform(
        scrollYProgress,
        [0.1, 0.25, 0.7, 1],
        ["0%", "-55%", "-60%", "-80%"]
    )
    // const position = useTransform(scrollYProgress, (pos) => {
    //     return pos === 1 ? 'relative' : 'fixed'
    // })

    return (
        <section

            className='mt-[-30vh]'
        >
            {/* Page */}
            <div ref={targetRef} className="w-full h-[100vh]">
                {/* Sticky wrapper */}
                <div className="sticky top-[10vh] aid border-dashed">
                    <div className="flex justify-center">
                        {/* img */}
                        <motion.div
                            style={{ x, opacity }}
                            className="origin-top relative h-[400px] w-[600px] rounded">
                            <Image
                                src={'https://images.unsplash.com/photo-1651613186467-b7210be490e4'}
                                alt='car'
                                className='object-cover'
                                fill
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Block2 = () => {
    const targetRef = React.useRef(null)

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end end"],
    });

    const animationOrder = {
        initial: 0,
        fadeInEnd: 0.15,
        showParagraphOne: 0.25,
        hideParagraphOne: 0.3,
        showParagraphTwoStart: 0.35,
        showParagraphTwoEnd: 0.4,
        hideParagraphTwo: 0.5,
        showLoadingScreenStart: 0.53,
        showLoadingScreenEnd: 0.58,
        createBranchStart: 0.65,
        createBranchEnd: 0.7,
        createBranchFadeInStart: 0.78,
        createBranchFadeInEnd: 0.85,
        endTextFadeInStart: 0.95,
        endTextFadeInEnd: 1,
    };

    const opacity = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.fadeInEnd,
            animationOrder.createBranchEnd,
            animationOrder.endTextFadeInStart,
        ],
        [0, 1, 1, 0]
    );
    const scale = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.fadeInEnd,
            animationOrder.showLoadingScreenEnd,
            animationOrder.createBranchStart,
        ],
        [3, 1, 1, 0.5]
    );
    const x = useTransform(
        scrollYProgress,
        [
            animationOrder.initial,
            animationOrder.showParagraphOne,
            animationOrder.hideParagraphOne,
            animationOrder.showParagraphTwoStart,
            animationOrder.showParagraphTwoEnd,
            animationOrder.hideParagraphTwo,
            animationOrder.showLoadingScreenStart,
            animationOrder.showLoadingScreenEnd,
            animationOrder.createBranchEnd,
        ],
        ["50%", "50%", "55%", "-50%", "-50%", "-55%", "0%", "0%", "-27%"]
    );

    const loadingScreenOpacity = useTransform(
        scrollYProgress,
        [
            animationOrder.showLoadingScreenStart,
            animationOrder.showLoadingScreenEnd,
        ],
        [0, 1]
    );
    const loadingScreenX = useTransform(
        scrollYProgress,
        [animationOrder.createBranchStart, animationOrder.createBranchEnd],
        ["0%", "27%"]
    );
    const loadingScreenscale = useTransform(
        scrollYProgress,
        [animationOrder.createBranchStart, animationOrder.createBranchEnd],
        [1, 0.5]
    );

    const paragraph1Opacity = useTransform(
        scrollYProgress,
        [
            animationOrder.fadeInEnd + 0.02,
            animationOrder.showParagraphOne,
            animationOrder.hideParagraphOne,
        ],
        [0, 1, 0]
    );
    const paragraph1TranslateY = useTransform(
        scrollYProgress,
        [
            animationOrder.fadeInEnd + 0.02,
            animationOrder.showParagraphOne,
            animationOrder.hideParagraphOne,
        ],
        ["4rem", "0rem", "-4rem"]
    );

    const paragraph2Opacity = useTransform(
        scrollYProgress,
        [
            animationOrder.showParagraphTwoStart,
            animationOrder.showParagraphTwoEnd,
            animationOrder.hideParagraphTwo,
        ],
        [0, 1, 0]
    );
    const paragraph2TranslateY = useTransform(
        scrollYProgress,
        [
            animationOrder.showParagraphTwoStart,
            animationOrder.showParagraphTwoEnd,
            animationOrder.hideParagraphTwo,
        ],
        ["4rem", "0rem", "-4rem"]
    );

    const newBranchOpacity = useTransform(
        scrollYProgress,
        [
            animationOrder.createBranchFadeInStart,
            animationOrder.createBranchFadeInEnd,
        ],
        [0, 1]
    );

    const endTextOpacity = useTransform(
        scrollYProgress,
        [animationOrder.endTextFadeInStart, animationOrder.endTextFadeInEnd],
        [0, 1]
    );

    const endTexty = useTransform(
        scrollYProgress,
        [animationOrder.endTextFadeInStart, animationOrder.endTextFadeInEnd],
        ["4rem", "0rem"]
    );

    const position = useTransform(scrollYProgress, (pos) =>
        pos >= 1 ? "relative" : "fixed"
    );

    type MotionStyleWithCssVar = {
        [K in keyof MotionStyle as K | `--${string}`]:
        | MotionStyle[K]
        | MotionValue<number>
        | MotionValue<string>
        | MotionValue<any>;
    };

    const stylesWithCssVar = (styles: MotionStyleWithCssVar) => styles as any;

    return (
        <section ref={targetRef}>
            <div className="relative h-[800vh]">
                {/* Sticky wrapper  */}
                <div className="sticky top-1/2 flex origin-center -translate-y-1/2 justify-center">
                    {/* Side by side imgs */}
                    <motion.div
                        className="translate-x-centered-offset absolute left-1/2 top-1/2 h-[75vh] max-h-[48vw] -translate-y-1/2 scale-[var(--scale)] "
                        style={stylesWithCssVar({
                            opacity,
                            "--x": x,
                            "--scale": scale,
                        })}
                    >
                        <motion.div
                            className="origin-top relative h-[400px] w-[600px] rounded">
                            <Image
                                src={'https://images.unsplash.com/photo-1651613186467-b7210be490e4'}
                                alt='car'
                                className='object-cover'
                                fill
                            />
                        </motion.div>
                        <motion.span
                            className="mt-3 block text-2xl text-white"
                            style={{ opacity: newBranchOpacity }}
                        >
                            Feature branch
                        </motion.span>
                    </motion.div>
                    <motion.div
                        className="translate-x-centered-offset absolute left-1/2 top-1/2 h-[75vh] max-h-[48vw]  -translate-y-1/2 scale-[var(--scale)]"
                        style={stylesWithCssVar({
                            opacity: loadingScreenOpacity,
                            "--x": loadingScreenX,
                            "--scale": loadingScreenscale,
                        })}
                    >
                        <motion.div
                            className="origin-top relative h-[400px] w-[600px] rounded">
                            <Image
                                src={'https://images.unsplash.com/photo-1651613186467-b7210be490e4'}
                                alt='car'
                                className='object-cover'
                                fill
                            />
                        </motion.div>
                        <motion.div
                            style={{ opacity: newBranchOpacity }}
                            className="absolute inset-0"
                        >
                            <motion.div
                                className="origin-top relative h-[400px] w-[600px] rounded">
                                <Image
                                    src={'https://images.unsplash.com/photo-1587851549996-57ab7c8c2b53'}
                                    alt='car'
                                    className='object-cover'
                                    fill
                                />
                            </motion.div>
                        </motion.div>
                        <motion.span
                            className="mt-3 block text-2xl text-white"
                            style={{ opacity: newBranchOpacity }}
                        >
                            Frontend FYIs branch
                        </motion.span>
                    </motion.div>
                    {/* Side text */}
                    <motion.p
                        className="translate-y-centered-offset absolute top-1/2 left-[calc(50%-60rem)] w-[50rem] pl-16 text-2xl leading-tight text-white"
                        style={stylesWithCssVar({
                            opacity: endTextOpacity,
                            "--y": endTexty,
                        })}
                    >
                        <span className="text-primary">Built for flow</span>
                        <br />
                        Spin up a new branch for any sized project in seconds.
                    </motion.p>
                </div>
                {/* Side text */}
                <motion.p
                    style={stylesWithCssVar({
                        opacity: paragraph1Opacity,
                        "--y": paragraph1TranslateY,
                        position,
                    })}
                    className="translate-y-centered-offset top-1/2 left-[20px] w-[300px] pl-16 text-2xl leading-tight text-white"
                >
                    Not only share code,
                    <br />
                    <span className="text-primary">share the context.</span>
                </motion.p>
                <motion.p
                    style={stylesWithCssVar({
                        opacity: paragraph2Opacity,
                        "--y": paragraph2TranslateY,
                        position,
                    })}
                    className="translate-y-centered-offset top-1/2 right-[20px] w-[300px] pr-16 text-xl leading-tight text-white"
                >
                    Sometimes its not about code.
                    <br />
                    <span className="text-primary">
                        Get everybody on the same page. Literally.
                    </span>
                </motion.p>
            </div>
        </section>
    )
}

const Block3 = () => {
    const targetRef = React.useRef(null)

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end end"],
    })

    const scale = useTransform(scrollYProgress, [0, 0.5], [2, 1])
    // const scale1 = useTransform(scrollYProgress, [0.1, 0.5], [1, 2.5])
    const x = useTransform(
        scrollYProgress,
        [0, 0.5],
        ["-100%", "0%"]
    )

    const imgOpacity = useTransform(
        scrollYProgress,
        [0.5, 1],
        [0, 1]
    )

    const pOpacity = useTransform(
        scrollYProgress,
        [0.7, 1],
        [0, 1]
    )

    const pY = useTransform(
        scrollYProgress,
        [0, 1],
        ["300%", "0%"]
    )

    return (
        <section className="mt-[10vh] text-white aid">
            <div ref={targetRef} className="h-[100vh] w-full relative">
                <div className="sticky origin-top flex aid text-2xl font-bold">
                    <motion.div
                        style={{ x }}
                        className="p-[2rem] flex items-center flex-col justify-items-center h-full w-1/2">
                        <h2>Slide In </h2>
                    </motion.div>
                    <motion.div
                        style={{ scale }}
                        className="p-[2rem] flex items-center flex-col justify-items-center h-full w-1/2">
                        <h2>Scroll Down to Zoom Out</h2>
                    </motion.div>
                </div>
                {/* img */}
                <div className="flex aid p-10 border-dashed justify-center">
                    <motion.div
                        style={{ opacity: imgOpacity}}
                        className="relative h-[400px] w-[600px] rounded">
                        <Image
                            src={img}
                            alt='car'
                            className='object-cover'
                            fill
                        />
                    </motion.div>
                </div>
                <div className="flex w-full aid border-dashed justify-center">
                    <motion.p
                        style={{ opacity: pOpacity, y: pY}}
                        className="text-xl font-semibold w-1/2 mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem expedita, nulla minima amet voluptatibus eaque laudantium velit tenetur harum dolorum dignissimos deleniti pariatur vitae, incidunt ex! Dolorum inventore nobis fugit.
                    </motion.p>
                </div>
            </div>
        </section>
    )
}

const Block4 = () => {
    return (
        <section className="">

        </section>
    )
}

const Block5 = () => {
    return (
        <section className="">

        </section>
    )
}

const Block6 = () => {
    return (
        <section className="">

        </section>
    )
}

const Parallax = () => {
    return (
        <main className='w-full h-screen'>
            <PHero />
            <div className="relative z-10 w-full overflow-x-clip border border-amber-500">
                <Block1 />
                {/* <Block2 /> */}
                <Block3 />
            </div>
        </main>
    )
}

export default Parallax