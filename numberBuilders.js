function buildTop(val, size) {
    if(val['top']) {
        return ` ${'_'.repeat(size)} `
    }
    return ` ${' '.repeat(size)} `
}

function buildMiddle(val, size) {
    middleVal = ``
    if(val['upperLeft']) { middleVal += `|` }
    if(val['middle']) {
        middleVal += `${'_'.repeat(size)}`
    } else {
        middleVal += `${' '.repeat(size)}`
    }
    if(val['upperRight']) { middleVal += `|` }
    return middleVal
}

function buildBottom(val, size) {
    bottomVal = ``
    if(val['lowerLeft']) { bottomVal += `|` }
    if(val['bottom']) {
        bottomVal += `${'_'.repeat(size)}`
    } else {
        bottomVal += `${' '.repeat(size)}`
    }
    if(val['lowerRight']) { bottomVal += `|` }
    return bottomVal
}

function buildUpperFiller(val, size) {
    fillerVal = ``
    if(val['upperLeft']) { fillerVal += `|` }
    fillerVal += `${' '.repeat(size)}`
    if(val['upperRight']) { fillerVal += `|` }
    return fillerVal
}

function buildLowerFiller(val, size) {
    fillerVal = ``
    if(val['lowerLeft']) { fillerVal += `|` }
    fillerVal += `${' '.repeat(size)}`
    if(val['lowerRight']) { fillerVal += `|` }
    return fillerVal
}

module.exports = {
    buildTop, buildMiddle, buildBottom, buildUpperFiller, buildLowerFiller
}