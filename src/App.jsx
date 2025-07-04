import Calculator from './Calculator';

function App() {
  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#f0f2f5',
      display: 'flex',
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0,
    }}>
      <Calculator />
    </div>
  );
}

export default App;
