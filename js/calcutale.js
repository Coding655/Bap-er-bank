document.getElementById('btn-deposit').addEventListener('click',function(){
    const inputDepositField = document.getElementById('input-field');
    const depositStringField = inputDepositField.value;
    const deposit = parseFloat(depositStringField);

    const depositInputText = document.getElementById('adding-deposit-text');
    const depositStringText = depositInputText.innerText;
    const depositText = parseFloat(depositStringText);
    const totalAmount= deposit + depositText;
    depositInputText.innerText = totalAmount;

    /* withdraw field */
    const balanceInputField = document.getElementById('adding-balance-text');
    const balanceStringField = balanceInputField.innerText;
    const balanceField = parseFloat(balanceStringField);
    const totalBalance = totalAmount + balanceField;
    balanceInputField.innerText = totalBalance;

})
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-input');
    const withdrawFieldString = withdrawField.value;
    const withdrawInput = parseFloat(withdrawFieldString);

    const withdrawInputText = document.getElementById('adding-balance-text');
    const withdrawInputString = withdrawInputText.innerText;
    const withdrawText = parseFloat(withdrawInputString);
    const totalWithdrawAmount = withdrawText - withdrawInput;
    withdrawInputText.innerText = totalWithdrawAmount;

    const withdrawAddingValue = document.getElementById('adding-withdraw-text');
    const withdrawAdding = withdrawAddingValue.innerText;
    const withdrawAddingText = parseFloat(withdrawAdding);
    withdrawAddingValue.innerText = withdrawInput;
    withdrawField.value = '';
    

})