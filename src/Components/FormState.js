import { useState } from 'react'

const FormState = (initialValue) => {
    const [value, setValue]=useState(initialValue)
   
    return [ value,()=>{
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }

    ]

}

export default FormState