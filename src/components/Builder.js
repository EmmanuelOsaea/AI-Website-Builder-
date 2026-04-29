import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './BlockTypes';
import { TextBlock, ImageBlock, ButtonBlock } from './Blocks';
import axios from 'axios';

function RenderBlock({ block, index, onEdit, onGenerateAI }) {
  switch (block.type) {
    case ItemTypes.TEXT:
      return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '6px' }}>
          <textarea
            value={block.content}
            onChange={(e) => onEdit(index, e.target.value)}
            placeholder="Enter text here"
            style={{ width: '100%', minHeight: '60px', fontSize: '16px', padding: '8px', borderRadius: '4px' }}
          />
          <button
            onClick={() => onGenerateAI(index)}
            style={{ marginTop: '8px', padding: '6px 12px', cursor: 'pointer' }}
          >
            Generate AI Text
          </button>
        </div>
      );
    case ItemTypes.IMAGE:
      return (
        <div style={{ margin: '10px 0' }}>
          <input
            type="text"
            placeholder="Image URL"
            value={block.content}
            onChange={(e) => onEdit(index, e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', fontSize: '16px' }}
          />
          {block.content && (
            <img src={block.content} alt="User provided" style={{ maxWidth: '100%', marginTop: '8px', borderRadius: '6px' }} />
          )}
        </div>
      );
    case ItemTypes.BUTTON:
      return (
        <div style={{ margin: '10px 0' }}>
          <input
            type="text"
            placeholder="Button text"
            value={block.content}
            onChange={(e) => onEdit(index, e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', fontSize: '16px' }}
          />
          <button style={{ marginTop: '8px', padding: '10px 20px', cursor: 'pointer', borderRadius: '4px', backgroundColor: '#4caf50', color: 'white', border: 'none' }}>
            {block.content || 'Button'}
          </button>
        </div>
      );
    default:
      return null;
  }
}

export default function Builder() {
  const [blocks, setBlocks] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: [ItemTypes.TEXT, ItemTypes.IMAGE, ItemTypes.BUTTON],
    drop: (item) => {
      setBlocks((prev) => [...prev, { type: item.type, content: '' }]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const handleEdit = (index, newContent) => {
    setBlocks((prev) => {
      const newBlocks = [...prev];
      newBlocks[index].content = newContent;
      return newBlocks;
    });
  };

  const generateAIContent = async (index) => {
    const prompt = 'Generate a catchy headline for a website homepage.';
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4',
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 50,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer YOUR_OPENAI_API_KEY`,
          },
        }
      );
      const aiText = response.data.choices[0].message.content.trim();
      handleEdit(index, aiText);
    } catch (error) {
      alert('Failed to generate AI content');
    }
  };

  return (
    <div style={{ display: 'flex', padding: '20px', height: '100vh', boxSizing: 'border-box' }}>
      <div style={{ width: '180px', marginRight: '20px' }}>
        <h3>Blocks</h3>
        <TextBlock />
        <ImageBlock />
        <ButtonBlock />
      </div>

      <div
        ref={drop}
        style={{
          flex: 1,
          minHeight: '600px',
          border: '2px dashed gray',
          padding: '15px',
          backgroundColor: isOver ? '#f0f0f0' : 'white',
          overflowY: 'auto',
          borderRadius: '8px',
        }}
      >
        <h3>Canvas</h3>
        {blocks.length === 0 && <p>Drag blocks here</p>}
        {blocks.map((block, i) => (
          <RenderBlock key={i} block={block} index={i} onEdit={handleEdit} onGenerateAI={generateAIContent} />
        ))}
      </div>
    </div>
  );
}
