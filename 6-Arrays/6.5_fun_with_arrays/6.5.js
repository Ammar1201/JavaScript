const arrayFun = () => {
  //1-
  const arr = Array.from({length:100}, () => ({random:Math.floor(Math.random() * 1000)}));
  // console.log(arr);
  //-----------------------------------------------------------------------------------


  //2-
  const start = 1;
  const end = 100;
  const arr2 = [...Array(end - start + 1).keys()].map(x => x + start);
  // console.log(arr2);
  //-----------------------------------------------------------------------------------

  //3-
  
}

arrayFun();