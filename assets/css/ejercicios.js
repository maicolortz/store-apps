lights = [
  [1, 1, 5],
  [2, 2, 5],
  [3, 3, 5],
];
let unluz = [];
let dosluz = [];
let tresluz = [];
for (let i = lights[0][1]; i < lights[0][2]; i++) {
  unluz.push(i);
}
for (let j = lights[1][1]; i < lights[1][2]; i++) {
  tresluz.push(i);
}
for (let i = lights[2][1]; i < lights[2][2]; i++) {
  dosluz.push(i);
}
let contador = 0;
for (let m = 0; m < unluz.length; m++) {
  for (let n = 0; n < dosluz.length; n++) {
    if (unluz[m] == dosluz[n]) {
      for (let p = 0; p < tresluz.length; p++) {
        if (unluz[m] == tresluz[p]) {
          contador++;
        }
      }
    }
  }
}
return contador;
let arreglo = [...unluz, ...dosluz, ...tresluz];
function countPairs(numbers, k) {
  // Write your code here
  numbers = [1, 2, 3, 4, 5, 6];
  k = 2;
  let arreglos = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] == numbers[j] + k) {
        arreglos.unshift(numbers[i], numbers[j]);
        
      }
    }
  }
  return arreglos;
  for (let n = 0; n < array.length; n++) {
    const element = array[n];
    
  }
}
