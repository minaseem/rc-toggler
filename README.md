# toggler-react
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
    overrideClass={"disable" or ""} 
    onToggle={(a:boolean) => void}
    popoverVisible={true/false}>
</Toggler>
```


### toggler-react Properties

#### Basic
| Property | Type | Required | Description |
|--------------------------|---------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| overrideClass | string | no | .... |
| popoverVisible | Boolean | yes | This helps in checking the status of Toggler.It will be true when the toggler is visible and false otherwise |
| onToggle | Function | yes | This is a function which takes a Boolean parameter and it sets the value of **popoverVisible** props to either true/false|
