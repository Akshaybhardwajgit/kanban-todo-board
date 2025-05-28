import { useState } from 'react';
import { STATUSES } from '../utils/constants';
import { Draggable } from 'react-beautiful-dnd';

const TodoCard = ({ todo, index, updateTodo, moveTodo, deleteTodo }) => {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(todo.todo);

    const handleSave = () => {
        updateTodo(todo.id, { todo: title });
        setEditing(false);
    };

    return (
        <Draggable draggableId={String(todo.id)} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                        ...provided.draggableProps.style,
                        background: '#f0f0f0',
                        padding: '0.75rem',
                        borderRadius: '6px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                        marginBottom: '0.5rem'
                    }}
                >
                    {editing ? (
                        <>
                            <input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                style={{ padding: '0.25rem' }}
                            />
                            <button onClick={handleSave} style={{ fontSize: '0.8rem', color: 'green' }}>Save</button>
                        </>
                    ) : (
                        <p>{todo.todo}</p>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <select
                            value={todo.status}
                            onChange={(e) => moveTodo(todo.id, e.target.value)}
                        >
                            {STATUSES.map((status) => (
                                <option key={status} value={status}>{status}</option>
                            ))}
                        </select>

                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button onClick={() => setEditing(!editing)} style={{ fontSize: '0.8rem', color: 'blue' }}>Edit</button>
                            <button onClick={() => deleteTodo(todo.id)} style={{ fontSize: '0.8rem', color: 'red' }}>Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

export default TodoCard;
