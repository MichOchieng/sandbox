import React from 'react'

const PointerBlur = () => {
  React.useEffect(() => {
    const blob = document.getElementById('blob')

    document.body.onpointermove = event => {
        const {clientX, clientY} = event
        blob!.animate({
            left: `${clientX}px`,
            top: `${clientY}px`
        },{ duration: 3000, fill:'forwards'})

    }
  })

  return (
    <>
        <div id='blob' className='blob'></div>
        <div id='blur' className='blur'></div>
    </>
  )
}

export default PointerBlur