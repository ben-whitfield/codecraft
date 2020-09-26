// define values that are allowed into the convertor
const allowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const validateChar = function(val) {
    return allowed.includes(val)? true : false
}

const charArray = (input) => {
    const inputArr = input.split('')
    const outputArr = inputArr.filter(item=>(validateChar(item)))
    return outputArr
}

module.exports = charArray;