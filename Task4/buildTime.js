const buildNumber = require('./buildNumber');

const createSingle = (num,userScale) => {
    return `${buildNumber(num,userScale)[1]}
${buildNumber(num,userScale)[2]}
${buildNumber(num,userScale)[3]}`;
}

const buildTime = (time, userScale) => {
    let hours = time.hour.split('')
    let mins = time.min.split('')
    let secs = time.sec.split('')

    endHours = hours.map(x => (createSingle(x, userScale)))
    endMins = mins.map(x => (createSingle(x, userScale)))
    endSecs = secs.map(x => (createSingle(x, userScale)))
    
    let endTime = endHours.concat(endMins, endSecs)

    let lines = endTime.map(y => {
        return y.split('\n')
    })

    let newArr = []
    lines.forEach(element => {
        let count = 0
        element.forEach(elem2 => {
            newArr[count] ? newArr[count] += elem2 : newArr[count] = elem2
            count++ 
        })
    });

    let output = ``
    newArr.forEach(elem => {
        output += `${elem}\n`
    })
    
    return output
}

module.exports = buildTime