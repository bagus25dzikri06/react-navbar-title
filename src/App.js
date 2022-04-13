import './App.css';
import React, {useState} from 'react';

function App() {
  const [title, setTitle] = useState('Welcome');
  const changeTitle = (params) => {
    setTitle(params);
  };

  return (
    <div className="row">
      <div className="col-md-6 text-center">
        <h1>
          {title}
        </h1>
      </div>
      <div className="col-md-6 text-center">
        <button 
          onClick={() => changeTitle('Wilujeng Sumping')}
        >
          Change Title
        </button>
      </div>
    </div>
  );
}

export default App;
