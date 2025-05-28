import TodoCard from './TodoCard';
import TodoForm from './TodoForm';
import { Droppable } from 'react-beautiful-dnd';

const Lane = ({ status, todos, createTodo, updateTodo, moveTodo, deleteTodo }) => {
    return (
        <div
            style={{
                flex: 1,
                minWidth: 300,
                background: 'white',
                borderRadius: '8px',
                padding: '1rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
        >
            <h2 style={{ textAlign: 'left', marginBottom: '1rem' }}>{status}</h2>
            <TodoForm onSubmit={createTodo} status={status} />

            {/* Ensure proper wrapper with provided.innerRef */}
            <Droppable droppableId={status}>
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        style={{
                            minHeight: '50px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem',
                            marginTop: '1rem'
                        }}
                    >
                        {todos.map((todo, index) => (
                            <TodoCard
                                key={todo.id}
                                index={index}
                                todo={todo}
                                updateTodo={updateTodo}
                                moveTodo={moveTodo}
                                deleteTodo={deleteTodo}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default Lane;
