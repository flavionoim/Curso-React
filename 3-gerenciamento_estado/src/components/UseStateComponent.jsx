import { useState} from 'react'

const UseStateComponent = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const [user, setUser] = useState({
    name: "Ana",
    age: 25,
    hobbies: ["Leitura", "Programação"]
  })

  const updateUserAge = () => {
    setUser((prevUser) => ({
      ...prevUser,
      age: prevUser.age + 1,
    }))
  }

  return (
    <div>
      <h2>Contador</h2>
      <p>Você Clicou {count} vezes</p>
      <button onClick={increment}>Incrementar</button>

      <p>Nome: {user.name} e idade: {user.age}</p>
      <button onClick={updateUserAge}>Incrementar Idade</button>
    </div>
  )
}

export default UseStateComponent
