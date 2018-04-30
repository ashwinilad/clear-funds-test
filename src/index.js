import React from 'react';
import ReactDOM from 'react-dom';
import CreatableDemo from './js/mockcomponent/selectbox';
import registerServiceWorker from './js/thirdparty/registerServiceWorker';
import './css/index.css';

ReactDOM.render(
	<div className="index_wrapper">
		<CreatableDemo/>
	</div>,

	document.getElementById('root')
);
registerServiceWorker();
