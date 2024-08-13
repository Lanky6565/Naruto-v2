const { modul } = require('./module');
const { human } = modul;
const { sizeFormatter } = human

const unixTimestampSeconds = (date = new Date()) => Math.floor(date.getTime() / 1000)


exports.formatp = sizeFormatter({
    std: 'JEDEC', 
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})



