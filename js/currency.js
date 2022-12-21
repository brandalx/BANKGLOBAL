function currency() {
  /*
id_USD_Buy
id_USD_Receive

id_EUR_Buy
id_EUR_Receive


id_input_USD
id_input_EUR


(id_input_EUR.value * 0.94).toFixed(2);
id_input_EUR.value;

*/

  let id_USD_Buy = document.querySelector("#id_USD_Buy");
  let id_USD_Receive = document.querySelector("#id_USD_Receive");

  let id_EUR_Buy = document.querySelector("#id_EUR_Buy");
  let id_EUR_Receive = document.querySelector("#id_EUR_Receive");

  let id_input_USD = document.querySelector("#id_input_USD");
  let id_input_EUR = document.querySelector("#id_input_EUR");

  id_USD_Buy.innerHTML = 0.94;
  id_EUR_Buy.innerHTML = 1.06;

  id_EUR_Receive.innerHTML = 1.1;
  id_USD_Receive.innerHTML = 1.3;

  id_input_EUR.value = (id_input_USD.value * 0.94).toFixed(2);
}

currency();

async function f() {
  const response = await fetch(
    `https://www.google.com/search?q=1+USD+in+EUR&oq=1+USD+in+EUR&aqs=chrome..69i57j0i22i30j0i390l4.13138j1j7&sourceid=chrome&ie=UTF-8`
  );
  const data = await response.text();

  const regex = /1 US dollar = ([0-9.]+) euros/;
  const [, exchangeRate] = regex.exec(data);
  console.log(data);
}
