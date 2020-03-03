const getListOfPrimeNumbers = ({ startNum, endNum }) => {
  let list = [];

  for(let num = startNum; num <= endNum; num++) {
    if(isPrimeNumber(num)) {
      list.push(num);
    }
  }

  return list;
};

const isPrimeNumber = num => {
  for(let divideBy = 2; divideBy <= Math.sqrt(num); divideBy++) {
    if(dividesWithoutRemainders({ num, divideBy })) {
      return false;
    }
  }
  return num >= 2;
};

const dividesWithoutRemainders = ({ num, divideBy }) =>
  num % divideBy === 0;


module.exports = getListOfPrimeNumbers;