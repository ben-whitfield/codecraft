const buildNumber = require('./buildNumber');

const buildTime = (time, userScale) => {
    let endTime = ``
    // call to a number  = buildNumber(num, scale)
    // time = {'hour': '11', 'min': '11', 'sec': '11}
    // let hours = time.hour.split('')
    // let mins = time.min.split('')
    let secs = time.sec.split('')

    let hours = ['1', '9']
    let mins = ['1', '0']
    // let secs = ['1', '0']
    // console.log(buildNumber(hours[0],userScale)[1])

//     endTime = `${buildNumber(hours[0],userScale)[1]}${buildNumber(hours[1],userScale)[1]}, ${buildNumber(mins[0],userScale)[1]}${buildNumber(mins[1],userScale)[1]}, ${buildNumber(secs[0],userScale)[1]}${buildNumber(secs[1],userScale)[1]}
// ${buildNumber(hours[0],userScale)[2]}${buildNumber(hours[1],userScale)[2]}, ${buildNumber(mins[0],userScale)[2]}${buildNumber(mins[1],userScale)[2]}, ${buildNumber(secs[0],userScale)[2]}${buildNumber(secs[1],userScale)[2]}
// ${buildNumber(hours[0],userScale)[3]}${buildNumber(hours[1],userScale)[3]}, ${buildNumber(mins[0],userScale)[3]}${buildNumber(mins[1],userScale)[3]}, ${buildNumber(secs[0],userScale)[3]}${buildNumber(secs[1],userScale)[3]}`

        endTime = `${buildNumber(secs[1],userScale)[1]} ${buildNumber(secs[1],userScale)[1]}
${buildNumber(secs[1],userScale)[2]} ${buildNumber(secs[1],userScale)[2]}
${buildNumber(secs[1],userScale)[3]} ${buildNumber(secs[1],userScale)[3]}`
    
    
    return endTime
}

module.exports = buildTime