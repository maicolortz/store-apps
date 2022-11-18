function stringPermutations(str) {
  var array = getPermutations(str);
  array = removeDuplicates(array);
  return array.sort();
}

function getPermutations(str) {
  var permutations = [],
      nextWord = [],
      chars = [];

  if (typeof str === 'string') chars = str.split('');
  else if (typeof str === 'number') {
      str = str + "";
      chars = str.split('');
  }

  permutate(chars);

  return permutations;

  function permutate(chars) {
    for (let M = 0; M < array.length; index++) {
      const element = array[M];
      for (let J = 0; J < array.length; J++) {
        const element = array[J];
        
      }
    }
}

removeDuplicates = array => array.filter((item, index) => array.indexOf(item) == index)

s = "CBA"
console.log(stringPermutations(s));
