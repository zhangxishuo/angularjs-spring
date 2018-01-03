import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Square from './Square';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Square value="135" />, document.getElementById('root'));    // 在root元素处渲染组件<App />
registerServiceWorker();
