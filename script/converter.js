
let receive = document.querySelector('#receive');
let convForm = document.querySelector('.converter__pay-receive');
let exchFees = document.querySelector('#exchange');
let makerFees = document.querySelector('#maker')
console.log(Number(pay.value));
convForm.addEventListener('keyup', function (){
    receive.value = Number(pay.value)*btcRate;
    exchFees.value = '5$';
    makerFees.value = '7$';
})
// console.log(convForm);