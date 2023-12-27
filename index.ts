const form = document.querySelector<HTMLFormElement>("#todo-form")!;
const textInput = document.querySelector<HTMLInputElement>("#title")!;
const out = document.querySelector<HTMLDivElement>("#todos")!;
type Todo = {
    id: number;
    title: string;
    createdAt: Date;
    element: Element;
};
const todoStore: Map<number, Todo> = new Map();
let nextId = 0;
out.innerHTML = "Hello World!!";

form.addEventListener("submit", (event) => {
    const todo: Todo = {
        id: nextId,
        createdAt: new Date(),
        title: textInput.value,
        element: document.createElement("div"),
    };
    nextId++;
    textInput.value = "";

    todo.element.id = `todo-${todo.id}`;
    todo.element.className = "todo";
    todo.element.textContent = todo.title;

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "delete";
    deletebtn.addEventListener("click", () => {
        todoStore.delete(todo.id);
        todo.element.remove();
    });
    todo.element.append(deletebtn);
    out.append(todo.element);
    todoStore.set(todo.id, todo);
    event.preventDefault();
});
// @ts-expect-error
window.todoStore = todoStore;
export { todoStore };
