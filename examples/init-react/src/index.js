// 使用 react 的根本，包含元件以及JSX
import React from 'react';
// 負責把 JSX 轉化後的真實元件放入到 HTML 節點中，這個步驟只需要操作一次
import ReactDOM from 'react-dom';
// 第一個元件，放置在 components 資料夾中
import App2 from './components/App';

ReactDOM.render(<App2 />, document.getElementById('root'));