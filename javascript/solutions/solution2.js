/*
  Recursive solution
 */
const getListOfPrimeNumbers = ({ startNum, endNum, list = [] }) => {
  const isBaseCase = startNum > endNum;
  const isAddToList = !isBaseCase && isPrimeNumber({ numToVerify: startNum });
  const newList = isAddToList ? list.concat([startNum]) : list;

  return isBaseCase ? newList : getListOfPrimeNumbers({
    startNum: startNum + 1, endNum, list: newList
  });
};

const isPrimeNumber = ({ numToVerify, divideBy = 2  }) => {
  if(numToVerify < 2) {
    return false;
  } else if (divideBy > Math.sqrt(numToVerify)) {
    return true;
  } else if (numToVerify % divideBy === 0) {
    return false;
  } else {
    return isPrimeNumber({ numToVerify, divideBy: divideBy + 1 })
  }
};


module.exports = getListOfPrimeNumbers;