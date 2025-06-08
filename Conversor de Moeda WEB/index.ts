let form = document.getElementById("iconverter") as HTMLFormElement;
let amaunt = document.getElementById("icash") as HTMLInputElement;
let coin = document.getElementById("icoin") as HTMLSelectElement;
let result = document.getElementById("iresult") as HTMLInputElement;
let tocoin = document.getElementById("itocoin") as HTMLSelectElement;
let result_txt = document.querySelector(".result-conv") as HTMLElement;
let error = document.querySelector(".error") as HTMLElement;
let API = "https://api.exchangerate-api.com/v4/latest/";

async function convert() {
  result_txt.style.display = "none";
  error.style.display = "none";

  try {
    const response = await fetch(API + coin.value);
    const data = await response.json();
    const rate = data.rates[tocoin.value];
    const fvalue = (parseFloat(amaunt.value) * rate).toFixed(2);
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
