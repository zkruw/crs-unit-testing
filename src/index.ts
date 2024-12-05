import { createTable, addTodo, listTodos, markDone } from './todo';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main() {
    await createTable();

    rl.question('Choose an action: [1] Add Todo [2] List Todos [3] Mark Done\n', async (answer) => {
        switch (answer) {
            case '1':
                rl.question('Enter the task: ', async (task) => {
                    await addTodo(task);
                    console.log('Task added.');
                    rl.close();
                });
                break;
            case '2':
                const todos = await listTodos();
                console.log('Todos:', todos);
                rl.close();
                break;
            case '3':
                rl.question('Enter the ID of the task to mark as done: ', async (id) => {
                    await markDone(parseInt(id));
                    console.log('Task marked as done.');
                    rl.close();
                });
                break;
            default:
                console.log('Invalid option.');
                rl.close();
                break;
        }
    });
}

main();