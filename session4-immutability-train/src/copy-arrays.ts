export function copyArraysFun() {
  const arr = ["first",1,2,3,"end"]
  function copyArray() {

    // copy
    const copyArr = [...arr]
    console.log(arr, "main arr" )
    console.log(copyArr,"copy arr")

    //add first and end array
    const copyArr2 = [10,...arr]
    console.log(copyArr2,"copy arr2 add 10 in first")

    const copyArr3 = [...arr,10]
    console.log(copyArr3,"copy arr3 add 10 in last")

    //change a value
    const copyArr4 = copyArr.map(item => item === 2 ? item * 10 : item)
    console.log(copyArr4,"copy arr3 change a value")

    //delete a value example target value : 3
    const copyArr5 = copyArr.filter(item => item !== 3 )
    console.log(copyArr5,"copy arr3 delete a value")
  }
  copyArray()
}

//output
// ['first', 1, 2, 3, 'end'] 'main arr'
// ['first', 1, 2, 3, 'end'] 'copy arr'
// [10, 'first', 1, 2, 3, 'end']'copy arr2 add 10 in first'
// ['first', 1, 2, 3, 'end', 10] 'copy arr3 add 10 in last'
// ['first', 1, 20, 3, 'end'] 'copy arr3 change a value'
// ['first', 1, 2, 'end'] 'copy arr3 delete a value'
