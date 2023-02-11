
// bank page
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDeposit = parseFloat(depositField.value);
    const depositTotalValue = document.getElementById('deposit-value');
    const PreviusDepositTotal = parseFloat(depositTotalValue.innerText);
    const currentDeposit = PreviusDepositTotal + newDeposit;
    depositTotalValue.innerText = currentDeposit;
    depositField.value = '';

    const balance = document.getElementById('balance-value'); 
    const PreviusBalence = parseFloat(balance.innerText);
    const currentBalence = PreviusBalence + newDeposit;
    balance.innerText = currentBalence;
});


document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newwithdraw = parseFloat(withdrawField.value);
    const withdrawTotalValue = document.getElementById('withdraw-value');
    const PreviusWithdrawTotal = parseFloat(withdrawTotalValue.innerText);

    withdrawField.value = '';
    
    const balance = document.getElementById('balance-value'); 
    const PreviusBalence = parseFloat(balance.innerText);

    if(newwithdraw > PreviusBalence){
        alert("নিজে ইনকাম করে খা");
        return;
    }
    const currentWithdraw = PreviusWithdrawTotal + newwithdraw;
    withdrawTotalValue.innerText = currentWithdraw; 

    const currentBalence = PreviusBalence - newwithdraw;
    balance.innerText = currentBalence;
});
