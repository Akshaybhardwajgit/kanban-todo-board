import { useEffect, useState } from 'react';
import {
    fetchTodosAPI,
    createTodoAPI,
    updateTodoAPI,
    deleteTodoAPI
} from '../utils/api';

const useTodos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodosAPI().then(setTodos);
    }, []);

    const createTodo = async (todo) => {
        const created = await createTodoAPI(todo);
        setTodos((prev) => [...prev, created]);
    };

    const updateTodo = async (id, updates) => {
        const updated = await updateTodoAPI(id, updates);
        setTodos((prev) =>
            prev.map((todo) => (todo.id === id ? { ...todo, ...updated } : todo))
        );
    };

    const moveTodo = async (id, status) => {
        await updateTodo(id, { status });
    };

    const deleteTodo = async (id) => {
        await deleteTodoAPI(id);
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    return { todos, createTodo, updateTodo, moveTodo, deleteTodo };
};

export default useTodos;
