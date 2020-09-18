// define the required segments to construct all possible numbers
const segments = {
    'n':  '    ',
    'm':  ' __ ',
    'lmr':'|__|',
    'lm': '|__ ',
    'mr': ' __|',
    'lr': '|  |',
    'l':  '|   ',
    'r':  '   |'
};

// define each number and segments by line
// '0' being the first line, '1' the second and so on...
const numberStructures = {
    '0': { '0': segments.m, '1': segments.lr, '2': segments.lmr },
    '1': { '0': segments.n, '1': segments.r, '2': segments.r},
    '2': { '0': segments.m, '1': segments.mr, '2': segments.lm},
    '3': { '0': segments.m, '1': segments.mr, '2': segments.mr },
    '4': { '0': segments.n, '1': segments.lmr, '2': segments.r},
    '5': { '0': segments.m, '1': segments.lm, '2': segments.mr},
    '6': { '0': segments.m, '1': segments.lm, '2': segments.lmr },
    '7': { '0': segments.m, '1': segments.r, '2': segments.r},
    '8': { '0': segments.m, '1': segments.lmr, '2': segments.lmr},
    '9': { '0': segments.m, '1': segments.lmr, '2': segments.mr},
};

module.exports = numberStructures;