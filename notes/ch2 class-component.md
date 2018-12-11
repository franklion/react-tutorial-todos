## [ch2]: class-component

    - state

        1. 宣告與使用

        2. 注意事項

    - render function

        1. 使用 return ()

        2. 常見寫法

    - constructor(不一定要實作，除非有以下條件) 

        - 初始化狀態

        - 綁定方法

    - 方法

        -  自定義的方法中沒有辦法直接獲得 this, 所以必須自行綁定，有常見幾種做法

            1. 在 constructor 時進行綁定，缺點：數量多時代碼冗長

            2. 在 事件觸發同時，使用 inline + bind(this)，缺點：每次組件渲染時創建一個新函數，這可能會影響性能

            3. 在 事件觸發同時，使用 inline + ES6 arrow function，缺點：每次組件渲染時創建一個新函數，這可能會影響性能

            4. Class Properties (Stage 3 Proposal)，需要 babel 轉換．推薦！！

## [task]: 完成一個點擊事件，將狀態 food 改成 McDonald