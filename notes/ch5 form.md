## [ch5]: form

    - 元件中有表單元素時，可以分為兩種類型

        ∙ 完全控制型元件 controlled Components

            ◦ 要自行撰寫代碼完成雙向綁定，表單元件的數值完全由 React 來控制

        ∙ 不可控制型元件 Uncontrolled Components．
        
            ◦ 當用戶將資料輸入到表單元件（輸入框，下拉列表...etc.）時，更新的內容將會反映在畫面上，而 React 不需要執行任何操作。

            ◦ 不需要撰寫什麼代碼，如果要取值必須直接操作 DOM