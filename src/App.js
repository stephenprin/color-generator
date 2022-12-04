import React, {useState} from 'react';
import './App.css';
import Values from 'values.js';
import SingleColor from './SingleColor';

function App() {
  const [color, setColors] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#32a8a8').all(8));

  const handleSubmit = (e) => {
    e.preventDefault();
   try {
      const colors = new Values(color).all(8);
      setList(colors);
   } catch (error) {
     setError(true);
     console.log(error);
   }
    
   }

  
  return (
    <>
      <section className='container'>
          <h3>color generator</h3>
      </section>
      <form className='center' onSubmit={handleSubmit}>
        <input type='text' value={color} onChange={(e) => setColors(e.target.value)} placeholder='#32a8a8' className={ `${error?'error':null}`} />
        <button className='btn' type='submit'>Generate</button>
      </form>
      <section className='colors'>
        {list.map((color, index) => { 
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
        })}
      </section>
    </>
    );
  }

export default App;
