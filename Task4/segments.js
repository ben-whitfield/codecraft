const numberMap = {
    0: '0x7E',
    1: '0x30',
    2: '0x6D',
    3: '0x79',
    4: '0x33',
    5: '0x5B',
    6: '0x5F',
    7: '0x70',
    8: '0x7F',
    9: '0x7B'
}

function getActive(val, shift) {
    return (val >> shift & 1)? 1 : 0
}

const segments = (val) => {
    mapKey = numberMap[val]
    return {
        'A': getActive(mapKey, 6),
        'B': getActive(mapKey, 5),
        'C': getActive(mapKey, 4),
        'D': getActive(mapKey, 3),
        'E': getActive(mapKey, 2),
        'F': getActive(mapKey, 1),
        'G': getActive(mapKey, 0),
    }
}

module.exports = segments