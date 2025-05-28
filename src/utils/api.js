const BASE_URL = 'https://dummyjson.com/todos';

export const fetchTodosAPI = async () => {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    return data.todos.map((todo) => ({
        ...todo,
        status: todo.completed ? 'Completed' : 'Pending'
    }));
};

export const createTodoAPI = async (todo) => {
    const res = await fetch(`${BASE_URL}/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            ...todo,
            completed: todo.status === 'Completed'
        })
    });
    const data = await res.json();
    return { ...data, status: todo.status };
};

export const updateTodoAPI = async (id, updates) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
    });
    const data = await res.json();
    return {
        ...data,
        status: updates.status ?? (data.completed ? 'Completed' : 'Pending')
    };
};

export const deleteTodoAPI = async (id) => {
    await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
};
