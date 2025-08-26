
import {useState, useEffect} from 'react'

const UseEffectExamples = () => {

   //Sem Dependencias 
   useEffect(() => {
    console.log("Rodou UE1")
   })

//Com Dependências Vazias / Array dep.vazio
useEffect(() => {
    console.log("Rodou UE2")
})

//Com Dependencias

useEffect(() => {
    console.log("Rodou E3")
})


//UseState Ativa a Re-Renderização
   const [count, setCount] = useState(0)

  return (
    <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Aumentar Contagem</button>
    </div>
  )
}

export default UseEffectExamples