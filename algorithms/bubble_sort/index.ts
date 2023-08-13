export default function bubbleSort(
  list: number[],
  doOptimisation: boolean
): number[] {
  const initTime = Date.now();
  const listCopy = [...list];
  let isSorted = false;
  let upperBound = listCopy.length - 1;
  while (!isSorted) {
    let didSwap = false;
    // can effectively ignore the final element since there's no subsequent element with which to swap it
    for (let i = 0; i < upperBound; i++) {
      if (listCopy[i + 1] < listCopy[i]) {
        let item = listCopy[i];
        listCopy[i] = listCopy[i + 1];
        listCopy[i + 1] = item;
        didSwap = true;
      }
    }

    if (!didSwap) {
      isSorted = true;
    }

    if (doOptimisation) {
      upperBound -= 1;
    }
  }

  const endTime = Date.now();

  const timeInSeconds = (endTime - initTime) / 1000;

  console.log(`Sort took ${timeInSeconds}s`);

  return listCopy;
}

let arr = [];

for (let i = 0; i < 10000; i++) {
  arr.push(Math.floor(Math.random() * 1000));
}

console.log(bubbleSort(arr, false), bubbleSort(arr, true));
