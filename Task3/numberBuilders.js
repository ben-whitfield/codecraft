function buildTop(val, size) {
    if(val['top']) {
        return ` ${'_'.repeat(parseInt(size))} `
    }
    return ` ${' '.repeat(parseInt(size))} `
}

function buildMiddle(val, size) {
    let middleVal = ``
    if(val['upperLeft']) { middleVal += `|` } else { middleVal += ` ` }
    if(val['middle']) {
        middleVal += `${'_'.repeat(parseInt(size))}`
    } else {
        middleVal += `${' '.repeat(parseInt(size))}`
    }
    if(val['upperRight']) { middleVal += `|` } else { middleVal += ` ` }
    return middleVal
}

function buildBottom(val, size) {
    let bottomVal = ``
    if(val['lowerLeft']) { bottomVal += `|` } else { bottomVal += ` ` }
    if(val['bottom']) {
        bottomVal += `${'_'.repeat(parseInt(size))}`
    } else {
        bottomVal += `${' '.repeat(parseInt(size))}`
    }
    if(val['lowerRight']) { bottomVal += `|` } else { bottomVal += ` ` }
    return bottomVal
}

function buildUpperFiller(val, size) {
    let fillerVal = ``
    if(val['upperLeft']) { fillerVal += `|` } else {fillerVal += ` `}
    fillerVal += `${' '.repeat(parseInt(size))}`
    if(val['upperRight']) { fillerVal += `|` } else {fillerVal += ` `}
    return fillerVal
}

function buildLowerFiller(val, size) {
    let fillerVal = ``
    if(val['lowerLeft']) { fillerVal += `|` } else {fillerVal += ` `}
    fillerVal += `${' '.repeat(parseInt(size))}`
    if(val['lowerRight']) { fillerVal += `|` } else {fillerVal += ` `}
    return fillerVal
}

module.exports = {
    buildTop, buildMiddle, buildBottom, buildUpperFiller, buildLowerFiller
}