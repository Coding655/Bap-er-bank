document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-input');
    const withdrawFieldString = withdrawField.value;
    const inputWithdraw = parseFloat(withdrawFieldString);
    withdrawField.value = '';
    /* get the innerText */

    const withdrawAdd = document.getElementById('withdraw-text-field');
    const withdrawAddString = withdrawAdd.innerText;
    const withdrawAddField = parseFloat(withdrawAddString);
    /* Now make a calculation */

    const totalAmountWithdraw = inputWithdraw + withdrawAddField;
    withdrawAdd.innerText = totalAmountWithdraw;

    /* calculate the final Balance that you want */

    const balanceField = document.getElementById('adding-balance-text');
    const balanceFieldString = balanceField.innerText;
    const balance = parseFloat(balanceFieldString);
    

    const balanceTotalCalculation = balance - totalAmountWithdraw;
    balanceField.innerText = balanceTotalCalculation;

})