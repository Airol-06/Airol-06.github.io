document.getElementById('celsius'); 
document.getElementById('fahrenheit'); 
document.getElementById('meters');
document.getElementById('foot');

celsius.oninput = () => {
let output = parseFloat(celsius.value)* 9 / 5 + 32;
fahrenheit.value = parseFloat(output.toFixed(2));


};

fahrenheit.oninput = () => {
  let output = parseFloat (5 / 9) * ((fahrenheit.value) - 32) ;
  celsius.value = parseFloat(output.toFixed(2));
  
  
  };

  meters.oninput = () => {
    let output = parseFloat(meters.value) * 3.281;
    foot.value = parseFloat(output.toFixed(2));
    
    
    };

    foot.oninput = () => {
      let output = parseFloat(foot.value) / 3.281;
      meters.value = parseFloat(output.toFixed(2));
    }  