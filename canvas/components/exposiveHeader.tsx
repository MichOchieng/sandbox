import React from 'react'
interface HeaderProps {
    title: string
}

const ExplosiveHeader = ( {title}:HeaderProps ) => {

    React.useEffect(() => {
        let isMounted = true; // add a variable to track whether the component is mounted
        
        const header = (id: string) => {
          const element = document.getElementById(id);
          const text = title.split("");
          element!.innerText = ""
          text.forEach((letter) => {
            const span = document.createElement("span");
            span.className = "letter";
            span.innerText = letter;
            element!.appendChild(span);
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
    <header id='explosiveHeader' className='letterContainer'>
        
    </header>
  )
}

export default ExplosiveHeader