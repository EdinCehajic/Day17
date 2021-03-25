const MY_CAR = {
    wheels: 4,
    cylinders: 4,
    size: 2.2
  };
  
  function main(myCar){

  // Only 
  
  const {cylinders, size} = myCar;
  return {cylinders, size};

  // Only 
  }
  
  console.log(main(MY_CAR));
  module.exports = main;