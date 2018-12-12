/*
 *  
 * array copy & object copy 
 * 
 */

// array copy
const players = ['Frank', 'Tom', 'Bob', 'Alex'];
const team = players
team[0] = 'Tony'

console.log(`team:${players}`)    // team:Tony,Tom,Bob,Alex
console.log(`players:${players}`) // players:Tony,Tom,Bob,Alex

// 方法1 淺複製
const team2 = players.slice()

// 方法2 淺複製
const team3 = [].concat(players)

// 方法3 淺複製
const team4 = [...players]

// 方法4 淺複製
const team5 = Array.from(players)

/* ------------------------------------ */

// object copy
const food = { name: 'beef', start: 5, time: '2018-12-12' }

// 方法1 淺複製，只能處理一層的物件
const newFood2 = Object.assign({}, food, { cook: 'Harry'})

// 方法2 [Spread syntax] 淺複製，只能處理一層的物件
const newFood3 = { ...food, cook: 'Harry' }

// 方法3 深層複製
const newFood4 = JSON.parse(JSON.stringify(food))
