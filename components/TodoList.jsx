"use server";
const TodoList = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  
  console.log(data);  // logs data on the server side during rendering
  
  return (
    <ul className={"w-full h-[43vh] overflow-y-scroll"}>
      {data && data.map(item => <li key={item.id}
                                    className={"flex items-center justify-between px-6 py-4 odd:bg-blue-400 even:bg-amber-300 rounded-lg mb-4 last:mb-0"}
      >
        <span>{item.title}</span>
        <span>{item?.completed ? "Completed" : "Not completed"}</span>
      </li>)}
    </ul>
  );
};

export default TodoList;