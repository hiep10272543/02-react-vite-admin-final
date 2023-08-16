
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
    const { age, name } = props; // object destructuring

    const handleClick = () => {
        alert("click me")
    }

    return (
        <div>
            <div>age = {age}</div>
            <div>name = {name}</div>
            <div>Add new todo</div>
            <input
                type="text"
                onChange={(event) => {
                    console.log(event.target.value)
                }}
            />
            &nbsp; &nbsp;
            <button onClick={() => handleClick()}>Save</button>
        </div>
    )
}

export default InputTodo;