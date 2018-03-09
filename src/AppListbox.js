import React, { Component } from 'react';
import JqxListBox, { jqx } from'./jqwidgets-react/react_jqxlistbox.js';
 
class AppListbox extends React.Component {
  render () {
    let source = [ "Affogato",  "Breve", "Café Bombón", "Espresso"];
    return (
        <JqxListBox width={220} height={220} source={source}/>
    )
  }
}
 
export default AppListbox;
