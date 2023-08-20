import InputTodo from "./todo/input.todo"

function App() {

  const name = "Hỏi Dân IT";
  const age = 25;
  const info = {
    gender: "male",
    address: "ha noi"
  }

  const todos = ["todo 1", "todo 2", "todo 3", "todo 4", "todo 5", "todo 6"]
  // {key: value}

  const handleTest = (name: string) => {
    alert(`handle test with name = ${name}`)
  }

  return (
    <div>
      <div className="parent" id="eric" >
        <div className="child"></div>
      </div>
      <InputTodo
        name={name}
        age={age}
        hoidanit={info}

        ericFunction={handleTest}

      />

      {/* <ul>
        {todos.map((item, index) => {
          return (
            <li key={index} > {item}</li>
          )
        })}

      </ul> */}
    </div>
  )
}

export default App
