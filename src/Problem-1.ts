{
  // Problem-1 -->
    // Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

    function sumArray(arr: number[]): number{
        let sum = 0
        arr.forEach((element) => {
            sum += element
        })
        return sum
    }

    const result = sumArray([1, 2, 3, 4, 5]);
    console.log(result)

    
    //
}