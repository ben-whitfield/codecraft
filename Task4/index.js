const getTime = require('./getTime');
const buildTime = require('./buildTime');
const updateDisplay = require('./updateDisplay');

const userScale = process.argv[2];
console.clear();

const update = () => {
    setInterval(()=> {
        const finalTime = buildTime(getTime(), userScale)
        updateDisplay(finalTime)
    }, 1000)
}
update()