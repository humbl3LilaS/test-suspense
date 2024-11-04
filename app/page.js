import TodoList from "@/components/TodoList";
import {Suspense} from "react";

export default function Home() {
    return (
        <section className={"p-6"}>
            <h1 className={"mb-8 text-2xl font-bold"}>Todos</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <TodoList/>
            </Suspense>
        </section>
    );
}
