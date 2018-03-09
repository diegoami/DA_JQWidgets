import React from 'react';
import ReactDOM from 'react-dom';

import JqxSplitter from './jqwidgets-react/react_jqxsplitter.js';


class AppSplitter extends React.Component {

    componentDidMount ()
    {

        this.refs.mySplitter.on('expanded', (event) =>
        {
            console.log('mySplitter')
        });

    }

    render () {
        console.log('render')
        return (
            <JqxSplitter ref='mySplitter'
                width={850} height={600} orientation={'horizontal'}
            >
                <div style={{ backgroundColor: '#97FFAF' }}></div>
                <div style={{ backgroundColor: '#E8C0AF' }}></div>
            </JqxSplitter>
        )
    }

}

export default AppSplitter;