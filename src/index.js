import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import AppListbox from './AppListbox';
//import AppGrid from './AppGrid';
//import AppDateTimeInput from './AppDateTimeInput';
import AppSplitter from './AppSplitter';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppSplitter />, document.getElementById('root'));
registerServiceWorker();
