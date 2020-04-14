class SomeKindOfSort {
  constructor(array) {
    this.array = array;
  }
  // sort() {
  //   console.log("sort!");
  // }

  sort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let lowest = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[lowest]) {
          lowest = j;
        }
      }
      if (i !== lowest) {
        //SWAP!
        let temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
      }
    }
    return arr;
  }

  returnValue(value) {
    return value;
  }
}

const sort = new SomeKindOfSort();
console.log(sort.sort([0, 2, 34, 22, 10, 19, 17]));

module.exports = SomeKindOfSort;
