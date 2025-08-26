import { useState } from 'react'

const EventHandlingExamples = () => {
  const handleClick = () => {
    alert("Testando")
  }

  const handleGreet = (name) => {
    alert(`Olá ${name}`)
  }

  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Enviado ${name}`)
  }

  return (
    <div>
      <button onClick={() => alert("Oi")}>Clique Aqui</button>
      <button onClick={handleClick}>Clique Aqui 2</button>
      <br />
      <button onClick={() => handleGreet("Ana")}>Dizer Olá Ana</button>
      <button onClick={() => handleGreet("Pedro")}>Dizer Olá Pedro</button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite Seu Nome"
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default EventHandlingExamples
