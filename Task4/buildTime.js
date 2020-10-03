const buildNumber = require('./buildNumber');

const createSingle = (num,userScale) => {
    return `${buildNumber(num,userScale)[1]}
${buildNumber(num,userScale)[2]}
${buildNumber(num,userScale)[3]}`;
}

const buildTime = (time, userScale) => {
    // let hours = time.hour.split('')
    // let mins = time.min.split('')
    // let secs = time.sec.split('')

    let hours = ['1', '2']
    let mins = ['3', '4']
    let secs = ['5', '6']

    endHours = hours.map(x => (createSingle(x, userScale)))
    endMins = mins.map(x => (createSingle(x, userScale)))
    endSecs = secs.map(x => (createSingle(x, userScale)))
    
    let endTime = endHours.concat(endMins, endSecs)

    let lines = endTime.map(y => {
        return y.split('\n')
    })

    // returns an array
    //0 [ '___', '|  ',  '  |', '|  ', '  |', '|__|' ] // First char
    //1 [ '___', '|  ',  '  |', '|  ', '  |', '|__|' ] // Second char
    //2 [ '___', '|  ',  '  |', '|  ', '  |', '|__|' ] // Third etc

    let newArr = []
    
    lines.forEach(element => {
        
        element.forEach(elem2 => {
            let count = 0
            newArr[count] ? newArr[count] += elem2 : newArr[count] = elem2
            count++
        })
        
    });

    console.table(newArr)
    

    
    // return lines
}

module.exports = buildTime