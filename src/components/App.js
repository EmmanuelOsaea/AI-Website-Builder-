import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Builder from './components/Builder';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App" style={{ fontFamily: 'Merriweather, Georgia', }}>
        <header style={{ padding: '20px', backgroundColor: '#004225', color: 'white', textAlign: 'center' }}>
          <h1>AI Website Builder</h1>
        </header>
        <Builder />
      </div>
    </DndProvider>
  );
}

export default App;
