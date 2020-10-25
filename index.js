const getTime = require('./getTime');
const buildTime = require('./buildTime');
const updateDisplay = require('./updateDisplay');

const userScale = process.argv[2];
console.clear();

const update = () => {
    let finalTime = buildTime(getTime(), userScale)

    setInterval(()=> {
        finalTime = buildTime(getTime(), userScale)
    }, 1000)
    
    setInterval(()=>{
        updateDisplay(finalTime)
    }, 200)
    

}
update()