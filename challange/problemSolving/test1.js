const minMaxSum = (arr) => {
  const max = arr.sort((a,b) => a-b).slice(1,arr.length).reduce((a,b) => a+b,0);
  const min = arr.sort((a,b) => a-b).slice(0,arr.length-1).reduce((a,b) => a+b,0);

  console.log(`${min} ${max}`)
}


minMaxSum([1,2,3,4,5]);