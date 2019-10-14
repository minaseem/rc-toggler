import React, {useState} from 'react';
import logo from './logo.svg';
import {Toggler} from 'toggler-react'
import './App.css';

function App() {
  const [popoverVisibile, setpopoverVisibile] = useState(false);
  return (
    <div className="App">
    hello
      <Toggler popoverVisible={popoverVisibile} onToggle={setpopoverVisibile}>
        <Toggler.Field><div>Field</div></Toggler.Field>
        <Toggler.Popover>
          <div>Popover</div>
        </Toggler.Popover>
      </Toggler>
    </div>
  );
}

export default App;
