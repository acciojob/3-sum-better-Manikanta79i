function threeSum(arr, target) {
  // sort the array in ascending order
  arr.sort((a, b) => a - b);

  // initialize the closest sum to Infinity
  let closestSum = Infinity;

  // loop through each element in the array
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    // while there are still two elements to compare
    while (left < right) {
      // calculate the sum of the current triplet
      let currentSum = arr[i] + arr[left] + arr[right];

      // update the closest sum if the current sum is closer to the target
      if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) {
        closestSum = currentSum;
      }

      // move the pointers based on whether the current sum is greater or smaller than the target
      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}

module.exports = threeSum;
