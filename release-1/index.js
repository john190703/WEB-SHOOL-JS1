//  'Nikita' -> 'Hi, Nikita'
 const hiFunction = () => {
    let a='Anton'
    return('Hi, '+a)
}
console.log(hiFunction())

// 5, 6 -> 11
 const sum = () => {
    let a=3
    let b=12
    return(a+b)
}
console.log(sum())

//5 -> false
//0 -> true
//4 -> true
 const isEven = () => {
    let a=6
    if (a%2==0){
        return('true')
    }
    else{
        return('false')
    }
}
console.log(isEven())

// 2 -> i have 2 apples
 const apples = () => {
    let a=1
    if (a==0){
        return('I have nothing')
    }
    if (a==1){
        return('i have '+a+' apple')
    }
    else{
        return('i have '+a+' apples')
    }
}
console.log(apples())
// 4 -> 16
 const getPower = () => {
    let a=324
    return a*a
}
console.log(getPower())
module.exports = {
    hiFunction,
    sum,
    isEven,
    apples,
    getPower,
}
