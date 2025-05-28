import Board from './components/Board';

function App() {
    return (
        <div className="app-container" style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center' }}>Kanban Board</h1>
            <Board />
        </div>
    );
}

export default App;
