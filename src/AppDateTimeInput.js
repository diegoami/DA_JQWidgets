import React, { Component } from 'react';
 
import JqxDateTimeInput from './jqwidgets-react/react_jqxdatetimeinput'

class AppDateTimeInput extends Component {
render() {
  return (
        <div>
            <h4>My First jQWidgets React Component</h4>
            <JqxDateTimeInput width={200} height={30} />
        </div>
  );
}
}

export default AppDateTimeInput;
 
