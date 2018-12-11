// object destructuring 物件解構賦值
// 冒號前是用來對應物件的屬性名稱
// 冒號後才是真正建立的變數名稱和被賦值的對象

let obj = {
    website: 'google',
    country: 'Taiwan'
}

let { website: wb, country: ct } = obj

console.log(website) // ReferenceError: website is not defined
console.log(country) // ReferenceError: country is not defined
console.log(wb) // 'google'
console.log(ct) // 'Taiwan'


/* ------------------------------------ */

// ES 2015(ES6) module named imports do not destructure -> 'destructuring-like'

// the main reason for these limitations is that the import statement brings in a
// binding, and not a  reference or a value

// ⭕️
import { series, concurrent, map } from 'contra'

// ❌
import { map : mapAsync } from 'contra'