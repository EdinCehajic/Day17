const MY_CAR = {
    wheels: 4,
    cylinders: 4,
    size: 2.2
  };
  
  function main(myCar) {

    // Only 

  
    const {cylinders: carCylinders, size: carSize} = myCar;
  
    return {carCylinders, carSize};

    //Only 
  }
  
  console.log(main(MY_CAR));
  module.exports = main;