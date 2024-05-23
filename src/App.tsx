import React, { useState } from 'react';
import Input from './com/input';
import Button from './com/BAbutton';
import Table from './com/Tabel';
import './App.css'
const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>Simple Todo App</h1>
      <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <Button onClick={handleAddItem}>Add Item</Button>
      <Table data={items} />
    </div>
  );
};

export default App;
