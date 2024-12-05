import { addTodo, listTodos, markDone, createTable, deleteTodo } from '../todo';

beforeAll(async () => {
    await createTable();
});

afterEach(async () => {
    const todos = await listTodos();
    for (const todo of todos) {
        await deleteTodo(todo.id!);
    }
});

test('should add a todo', async () => {
    // Add a new todo

    // Retrieve all todos

    // Assertions

});

test('should list todos', async () => {

});

test('should mark a todo as done', async () => {

});

test('should delete a todo', async () => {

});