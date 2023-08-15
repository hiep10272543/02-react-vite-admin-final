import InputTodo from "./todo/input.todo"

function App() {

  const name = "Hỏi Dân IT";
  const age = 25;
  const info = {
    gender: "male",
    address: "ha noi"
  }

  // {key: value}
  return (
    <div>
      <div className="parent" id="eric" >
        <div className="child"></div>
      </div>
      <InputTodo
        name={name}
        age={age}
        hoidanit={info}
      />
      <InputTodo
        name={name}
        age={age}
        hoidanit={info}
        abc="def"
      />
    </div>
  )
}

export default App
