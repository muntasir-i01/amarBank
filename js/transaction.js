//handle deposit button
document.getElementById('deposit-button').addEventListener
('click', function(){
    //get the amount deposited
    const depositInput = document.getElementById('deposit-amount');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);

    const updateDepo = document.getElementById('update-deposit');
    
    const previousDepositText = updateDepo.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount
        + newDepositAmount;

     updateDepo.innerText = newDepositTotal;

     //update account balance
     const balanceTotal = document.getElementById('update-balance');
     const balanceTotalText = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat(balanceTotalText);
     const newBalanceTotal = previousBalanceTotal + newDepositAmount;
     balanceTotal.innerText = newBalanceTotal;

    
    //clear the deposit input field
    depositInput.value = '';
})

 //minus-withdraw
 document.getElementById('withdraw-button').addEventListener
 ('click', function() {
     const withdrawInput = document.getElementById('withdraw-amount');
     const withdrawAmountText = withdrawInput.value;
     const newWithdrawAmount = parseFloat(withdrawAmountText);
     console.log(newWithdrawAmount);

     //set withdraw total
     const withdrawTotal = document.getElementById('minus-withdraw');
     const previousWithdrawText = withdrawTotal.innerText;
     const previousWithdrawTotal = parseFloat(previousWithdrawText);

     const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

     withdrawTotal.innerText = newWithdrawTotal;

     //update balance
     const balanceTotal = document.getElementById('update-balance');
     const previousBalanceText = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat(previousWithdrawText);
     const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

     balanceTotal = newBalanceTotal.innerText;

     //clear the deposit input field
    withdrawInput.value = '';
 })
