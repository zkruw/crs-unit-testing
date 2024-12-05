import { openDb } from './db';

export interface Todo {
    id?: number;
    task: string;
    done: boolean;
}

export async function createTable() {
    const db = await openDb();
    await db.exec('CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY, task TEXT, done BOOLEAN)');
}

export async function addTodo(task: string) {
    const db = await openDb();
    await db.run('INSERT INTO todos (task, done) VALUES (?, ?)', [task, false]);
}

export async function listTodos() {
    const db = await openDb();
    return db.all<Todo[]>('SELECT * FROM todos');
}

export async function markDone(id: number) {
    const db = await openDb();
    await db.run('UPDATE todos SET done = ? WHERE id = ?', [true, id]);
}

export async function deleteTodo(id: number) {
    const db = await openDb();
    await db.run('DELETE FROM todos WHERE id = ?', [id]);
}