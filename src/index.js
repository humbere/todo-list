import './styles.css';
import { Todo, TodoList } from './classes/index';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// todoList.todos.forEach(todo => crearTodoHtml( todo ));
todoList.todos.forEach(crearTodoHtml);

// todoList.todos[0].imprimirTodo();


// const tarea = new Todo('Aprender javascript');
// tarea.completado = true;

// todoList.nuevoTodo( tarea );
// console.log( todoList );

// crearTodoHtml( tarea );

