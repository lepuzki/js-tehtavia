function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
  }
  
  // Testataan funktioita
  var celsius = 45;
  var fahrenheit = 45;
  
  console.log(celsius + "°C on " + celsiusToFahrenheit(celsius) + " °F");
  console.log(fahrenheit + "°F on " + fahrenheitToCelsius(fahrenheit).toFixed(8) + "°C"); // 8 desimaalia, sama kuin esimerkissä
  