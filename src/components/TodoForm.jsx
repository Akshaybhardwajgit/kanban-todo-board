import React, { useState } from 'react';

const TodoForm = ({ onSubmit, status }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        onSubmit({ todo: title, status });
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
            <input
                type="text"
                value={title}
                placeholder="Add task..."
                onChange={(e) => setTitle(e.target.value)}
                style={{ flex: 1, padding: '0.5rem' }}
            />
            <button type="submit" style={{ padding: '0.5rem', background: '#3b82f6', color: 'white', borderRadius: '4px' }}>
                Add
            </button>
        </form>
    );
};

export default TodoForm;
