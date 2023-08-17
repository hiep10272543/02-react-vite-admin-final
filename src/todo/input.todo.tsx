import { useState } from 'react';
// use => hook
//compile: dịch code: typescript => javascript (check type)
// run: chạy code
interface IProps {
    name: string;
    age: number;
    hoidanit: {
        gender: string;
        address: string
    }
    abc?: string; //optional
}


const InputTodo = (props: IProps) => {

    const [todo, setTodo] = useState("");
    const [listTodo, setListTodo] = useState(
        ["todo 1", "todo 2", "todo 3", "todo 4", "todo 5", "todo 6"]
    )

    const handleClick = () => {
        if (!todo) {
            alert("empty todo");
            return;
        }
        // alert("click me")
        setListTodo([...listTodo, todo]) //spread syntax
        setTodo("")
    }

    console.log(">>> ")
    return (
        <div style={{ border: "1px solid red" }}>
            <div>Add new todo</div>
            <input
                value={todo}
                type="text"
                onChange={(event) => {
                    setTodo(event.target.value)
                    // console.log(event.target.value)
                }}
            />
            &nbsp; &nbsp;
            <button onClick={() => handleClick()}>Save</button>
            <br />
            <ul>
                {listTodo.map((item, index) => {

                    return (
                        <li key={index}>{item}</li>

                    )
                })}
            </ul>
        </div>
    )
}

export default InputTodo;