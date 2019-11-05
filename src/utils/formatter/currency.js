export const numberToMoney = (number = '0') => number && `Rp. ${parseInt(number, 10).toLocaleString().replace(/,/g, '.')}`
export const numberToMoneyNoRP = (number = '0') => number && `${parseInt(number, 10).toLocaleString().replace(/,/g, '.')}`
export const numberToMoneyWithoutPrefix = (number = '0') => number && `${parseInt(number, 10).toLocaleString().replace(/,/g, '.')}`
export const moneyToNumber = (money = '0') => parseInt(money.replace(/\./g, '').replace('Rp', '').trim(), 10)
