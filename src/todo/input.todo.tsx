
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
    // const InputTodo = (
    //     { age, name }: {
    //         name: string;
    //         age: number;
    //         hoidanit: {
    //             gender: string;
    //             address: string
    //         }
    //         abc?: string; //optional 
    //     }
    // ) => {

    const { age, name } = props; // object destructuring
    //props: object
    // console.log(">>> check props: ", props)
    //jsx
    return (
        <div>
            <div>age = {age}</div>
            <div>name = {name}</div>
            <div>Add new todo</div>
            <input type="text" />
            &nbsp; &nbsp;
            <button>Save</button>
        </div>
    )
}

export default InputTodo;