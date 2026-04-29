import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './BlockTypes';

export function TextBlock() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TEXT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: '8px',
        margin: '4px',
        backgroundColor: 'lightyellow',
        cursor: 'move',
        borderRadius: '4px',
        border: '1px solid #ccc',
        userSelect: 'none',
      }}
    >
      Text Block
    </div>
  );
}

export function ImageBlock() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.IMAGE,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: '8px',
        margin: '4px',
        backgroundColor: 'lightblue',
        cursor: 'move',
        borderRadius: '4px',
        border: '1px solid #ccc',
        userSelect: 'none',
      }}
    >
      Image Block
    </div>
  );
}

export function ButtonBlock() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BUTTON,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: '8px',
        margin: '4px',
        backgroundColor: 'lightgreen',
        cursor: 'move',
        borderRadius: '4px',
        border: '1px solid #ccc',
        userSelect: 'none',
      }}
    >
      Button Block
    </div>
  );
}
