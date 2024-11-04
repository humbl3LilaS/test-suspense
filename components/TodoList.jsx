"use server"
const TodoList = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();

    console.log(data);  // logs data on the server side during rendering

    return (
        <ul>
            <li>{data.title}</li>
        </ul>
    );
};

export default TodoList;