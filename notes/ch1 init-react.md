## [ch1]: init-react

    - 兩個常見起手式 import ...

        1. 
            import React, { Component } from 'react';

        2.  import ReactDOM from 'react-dom';

    - 元件

        1. 類別元件 class component

        2. 無狀態的元件 stateless functional component

    - JSX    

        - JavaScript XML

        - 此語法不是字串也不是 HTML

        - 可以讓 HTML 標記直接寫在 JavaScript 程式碼中的擴充語法，X代表的是 XML 語法的意思，React 允許你可以這樣作，是因為它在讀到 JSX 語法時，會自動幫你用 React.createElement 方法來建立虛擬的 DOM 元素

## [task]: 完成一個 Hello World