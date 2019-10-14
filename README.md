# toggler-react

This is a react toggler. It can be used to build dropdowns, popover, tooltips.

## installation

```
npm install toggler-react
```
or
```
yarn add toggler-react
```

## usage
```js
import {Toggler} from 'toggler-react';
<Toggler 
    overrideClass={"disable"} 
    onToggle={(a:boolean) => void}
    popoverVisible={true}>
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
```


### toggler-react Properties

#### Basic
| Property | Type | Required | Description |
|--------------------------|---------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| overrideClass | string | no | This is added as a class to the root of Popover |
| popoverVisible | Boolean | yes | This tells the toggler to show or hide the popover|
| onToggle | Function | yes | This is a function which takes a Boolean parameter and helps in setting the state of **popoverVisible** to either true or false|
