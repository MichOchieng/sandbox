import React from 'react'

const PointerBlur = () => {
  React.useEffect(() => {
    const blob = document.getElementById('blob')

    document.body.onpointermove = event => {
        const {clientX, clientY} = event
        blob!.style.left = `${clientX}px`;
        blob!.style.top = `${clientY}px`;
    }
  })

  return (
    <div id='blob' className='blob'></div>
  )
}

export default PointerBlur