let form = document.getElementById("iconverter");
let amaunt = document.getElementById("icash");
let coin = document.getElementById("icoin");
let result = document.getElementById("iresult");
let tocoin = document.getElementById("itocoin");
let result_txt = document.querySelector(".result-conv");
let error = document.querySelector(".error");
let API = "https://api.exchangerate-api.com/v4/latest/";

async function convert() {
  result_txt.style.display = "none";
  error.style.display = "none";

  try {
    const response = await fetch(API + coin.value);
    const data = await response.json();
    const rate = data.rates[tocoin.value];
    const fvalue = (amaunt.value * rate).toFixed(2);
    result.value = fvalue;
    result_txt.innerHTML = `
    
    <div style = "font-size: 1.4rem"> 
    
    ${amaunt.value} ${coin.value} = ${result.value} ${tocoin.value}
    
    </div>
    <div style = "font-size: 0.9rem; margin-top: 10px"> 
    
   Proporção: 1 ${coin.value} = ${rate} ${tocoin.value}

    </div>

    `;
    result_txt.style.display = "block";
  } catch (err) {
    error.style.display = "block";
    error.innerHTML = `ERRO tente novamente`;
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  convert();
});
