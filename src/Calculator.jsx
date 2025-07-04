import { useState } from 'react';

export default function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const calculate = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult('Invalid input');
      return;
    }
    let res = '';
    switch (operator) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case '*':
        res = a * b;
        break;
      case '/':
        res = b !== 0 ? a / b : 'Cannot divide by zero';
        break;
      default:
        res = '';
    }
    setResult(res.toString());
  };

  const clearAll = () => {
    setNum1('');
    setNum2('');
    setResult('');
  };

  return (
    <div style={{ maxWidth: '400px', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 10px rgb(0, 39, 106)', background: '#fff' }}>
        <h1 style={{color: 'black', align:'center'}}>Simple Calculator</h1>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <div style={{ flex: 1 }}>
          <label>Number 1</label>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter a number"
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label>Number 2</label>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter a number"
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        {['+', '-', '*', '/'].map((op) => (
          <button
            key={op}
            onClick={() => calculate(op)}
            style={{ flex: 1, margin: '0 5px', padding: '10px', fontSize: '16px' }}
          >
            {op}
          </button>
        ))}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Result</label>
        <input
          type="text"
          value={result}
          readOnly
          placeholder="Result"
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
      </div>
      <button
        onClick={clearAll}
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      >
        Clear
      </button>
    </div>
  );
}
