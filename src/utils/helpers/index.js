export const formatNumber = value => {
  value += "";
  const list = value.split(".");
  const prefix = list[0].charAt(0) === "-" ? "-" : "";
  let num = prefix ? list[0].slice(1) : list[0];
  let result = "";
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ""}`;
};

export const debounce = (func, delay) => {
  let timeoutId;
  return function(...args) {
    clearInterval(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

export const isValidISODate = date => {
  return new Date(date) !== "Invalid Date" && !isNaN(new Date(date))
    ? true
    : false;
};

export const getTime = value => {
  var time = new Date(value);
  var result = time.getTime();
  return result;
};

export const splitByComma = value => {
  let splitted = value.split(",");
  return splitted;
};

export const compareBetweenValues = (value1, value2, inputValue) => {
  console.log(value1, value2, inputValue)
  if (value1 <= inputValue && inputValue <= value2) {
    return true;
  } else return false;
};
