const getTime = require('./getTime');
const processTime = require('./processTime');
const buildNumber = require('./buildNumber');
// const updateDisplay = require('./updateDisplay');

const userSize = process.argv[2];

const updateDisplay = () => {
    console.log(getTime())
}

const update = () => {
    setInterval(()=> {
        updateDisplay()
    }, 1000)
}

update()