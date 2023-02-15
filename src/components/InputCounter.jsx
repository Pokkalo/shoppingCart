import React, {useState, useRef, useEffect} from 'react'

const InputCounter = () => {

    const [count, setCount] = useState(0)
    const countRef = useRef()

    useEffect(() => {

    }, [count])

  return (
    <input type="number" ref={inputValue} onChange={(e) => {
        e.target.value
     }} 
     class="form-control form-control-lg text-center" value={3} 
     
     
     />
  )
}

export default InputCounter