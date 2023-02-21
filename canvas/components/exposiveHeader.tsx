import React from 'react'
interface HeaderProps {
    title: string
}

const ExplosiveHeader = ( {title}:HeaderProps ) => {

    React.useEffect(() => {
        let isMounted = true; // add a variable to track whether the component is mounted

        const rand = (min:number, max:number) => Math.floor(Math.random() * (max - min + 1)) + min;
        
        const header = (id: string) => {
          const element = document.getElementById(id);
          const text = title.split("");
          element!.innerText = ""

          text.forEach((letter,index) => {
            // This span will have the explosion effect and hold the innerSpan element
            const outerSpan = document.createElement("span");
            outerSpan.className = "outer";
            
            // This span will have the floating effect and hold a letter
            const innerSpan = document.createElement("span");
            innerSpan.className = "inner";
            innerSpan.style.animationDelay = `${rand(-5000, 0)}ms`;

            // A span containing a letter from the input text
            const letterSpan = document.createElement("span");
            letterSpan.className = "letter";
            letterSpan.innerText = letter;

            letterSpan.style.animationDelay = `${index * 1000 }ms`; // Gives each letter its own hovering bounce effect thingy

            // Glue everything together
            innerSpan.appendChild(letterSpan)

            outerSpan.appendChild(innerSpan)

            element!.appendChild(outerSpan);
          });
        };
      
        if (isMounted) { // check if the component is mounted before running the effect
          header("explosiveHeader");
          console.log('Test');
          
        }
      
        return () => {
          isMounted = false; // update the variable when the component is unmounted
        };
      }, []);


  return (
    <header id='explosiveHeader' className='headerContainer'>
        
    </header>
  )
}

export default ExplosiveHeader