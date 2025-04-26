
  document.body.style.backgroundColor = "black"; 
  document.body.style.display = "flex";           
  document.body.style.flexDirection = "column";   
  document.body.style.justifyContent = "center";  
  document.body.style.alignItems = "center";      
  document.body.style.height = "100vh";            
  document.body.style.margin = "0";                

  
  const kalkulyator = document.getElementById("kalkulyator");
  kalkulyator.style.width = "200px";
  kalkulyator.style.height = "80px";
  kalkulyator.style.backgroundColor = "red";
  kalkulyator.style.color = "cyan"; 
  kalkulyator.style.textAlign = "center";
  kalkulyator.style.lineHeight = "80px"; 
  kalkulyator.style.margin = "10px";  
  

  
  const button = document.getElementById("check");
  button.style.width = "200px";
  button.style.height = "80px";
  button.style.backgroundColor = "cyan";
  button.style.color = "white"; 
  button.style.fontSize = "18px";
  button.style.border = "none";
  button.style.cursor = "pointer";
  button.style.borderRadius = "20px";
  button.style.marginTop = "20px"; 

  
  const natijaDiv = document.getElementById("natija");
  natijaDiv.style.width = "200px";
  natijaDiv.style.height = "80px";
  natijaDiv.style.backgroundColor = "blue"; 
  natijaDiv.style.color = "white"; 
  natijaDiv.style.textAlign = "center";
  natijaDiv.style.lineHeight = "80px";
  natijaDiv.style.marginTop = "20px";
  natijaDiv.style.borderRadius = "20px";


  let son1 = +prompt("1-sonni kiriting:");
  let son2 = +prompt("2-sonni kiriting:");
  let amal = prompt("Amalni kiriting: +, -, *, /");


  kalkulyator.textContent = `Kalkulyator: ${son1} ${amal} ${son2}`;

 
  button.addEventListener("click", function () {
    let natija;

    if (amal === "+") {
      natija = son1 + son2;
    } else if (amal === "-") {
      natija = son1 - son2;
    } else if (amal === "*") {
      natija = son1 * son2;
    } else if (amal === "/") {
      natija = son2 !== 0 ? son1 / son2 : "0 ga bo'lish mumkin emas!";
    } else {
      natija = "Noto'g'ri amal kiritildi!";
    }

    natijaDiv.textContent = "Natija: " + natija;
  });