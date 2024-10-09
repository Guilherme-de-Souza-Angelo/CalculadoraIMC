import { useState } from 'react'
import React from 'react'

const calculadora = () => {
const [altuta, setAltura] = useState(0)
const [peso, setPeso] = useState(0)
const [resultado, setResultado] = useState(null)

return (
    <>
    <input type= "number" value = {altura} onchanger = {(e) => setAltura(+e.target.value)} />
    </>
    <>
        <input type= "number" value = {altura} onchanger = {(e) => setAltura(+e.target.value)} />
    </>
  )
}

export default calculadora