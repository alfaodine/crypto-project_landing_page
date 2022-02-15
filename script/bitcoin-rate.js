let btcRate = 0,
number = document.querySelector('.number'),
bigNumber = document.querySelector('.big-number');




let result = fetch('https://api.currencyfreaks.com/latest?apikey=bb8c15e81a684dc1af9ece3706a6934a&format=json')
    .then(res => res.json())
    .then(data => {
        return (1 / Number(data.rates.BTC));
    })

const getRate = (async () => {
    btcRate = await result;
    number.innerText = String(Math.floor(btcRate)) + '.';
    bigNumber.innerText = String(Math.round((btcRate - Math.floor(btcRate)) * 100));
    let pay = document.querySelector('#pay');
})();








// var xhr = new XMLHttpRequest();

// xhr.open ('GET', "https://api.currencyfreaks.com/latest?apikey=bb8c15e81a684dc1af9ece3706a6934a&format=json", true);
// xhr.onload = function (){
//     if(this.status === 200){
//       const response = JSON.parse(this.responseText);
//       console.log(response);
//     }
// }
// xhr.send();
