import React, { Component, useState } from 'react';
import logo from './logo.svg';
import Toggler from 'toggler-react'
import './App.css';

  function App () {

    const [popoverVisible, setpopoverVisible] = useState(false);
    return (
        <Toggler
            overrideClass={"disable"}
            onToggle={setpopoverVisible}
            popoverVisible={popoverVisible}>
          <Toggler.Field>
            <div>
              <p>Click me to open Popover</p>
            </div>
          </Toggler.Field>
          <Toggler.Popover>
            <div>
              <p>Hi,This is a Popover</p>
            </div>
          </Toggler.Popover>
        </Toggler>
    );
  }


export default App;
