import Lane from './Lane';
import { STATUSES } from '../utils/constants';
import useTodos from '../hooks/useTodos';
import { DragDropContext } from 'react-beautiful-dnd';

const Board = () => {
    const { todos, moveTodo, createTodo, updateTodo, deleteTodo } = useTodos();

    const groupedTodos = STATUSES.reduce((acc, status) => {
        acc[status] = todos.filter((todo) => todo.status === status);
        return acc;
    }, {});

    const onDragEnd = (result) => {
        const { source, destination, draggableId } = result;
        if (!destination || source.droppableId === destination.droppableId) return;

        moveTodo(parseInt(draggableId), destination.droppableId);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div style={{ display: 'flex', gap: '1rem' }}>
                {STATUSES.map((status) => (
                    <Lane
                        key={status}
                        status={status}
                        todos={groupedTodos[status]}
                        createTodo={createTodo}
                        updateTodo={updateTodo}
                        moveTodo={moveTodo}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </div>
        </DragDropContext>
    );
};

export default Board;
