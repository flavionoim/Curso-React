import React from "react";

const JsxExamples = () => {
  const userName = "Carlos";

  const user = {
    name: "Ana",
    lastName: "Souza",
  };

  function getGreeting(name) {
    return `Olá ${name}`;
  }

  const userIsLoggedIn = false;

  const userRole = "admin";

  const users = [
    { id: 1, name: "João" },
    { id: 2, name: "Pedro" },
    { id: 3, name: "Maria" },
  ];

  return (
    <div>
      <h2>Conteúdo Que O Usuário Vai Ver</h2>
      <p>O Nome Do Usuário É: {userName}</p>

      <p>
        Usuário: {user.name} {user.lastName}
      </p>

      <p>{2 + 2}</p>

      <p>{getGreeting(userName)}</p>
      <p>{getGreeting("Gustavo")}</p>

      {/* DIFERENÇAS DO HTML */}
      <div className="alguma-coisa">Este Cara</div>

      <div className="teste">Ok</div>

      <button onClick={() => alert("Teste")}>Clique Em Mim</button>

      <input type="text" placeholder="Digite Algo" />

      {/* RENDERIZAÇÃO CONDICIONAL */}
      {userIsLoggedIn ? (
        <div>
          <p>Caso: Está Logado</p>
        </div>
      ) : (
        <div>
          <p>Caso: NÃO Está Logado</p>
        </div>
      )}

      {userRole === "admin" && <p>Você é um admin</p>}

      {/* RENDERIZAÇÃO DE LISTAS */}
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.id} - {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JsxExamples;
