document.getElementById('btn-deposit').addEventListener('click',function(){
    const inputDepositField = document.getElementById('input-field');
    const depositStringField = inputDepositField.value;
    const deposit = parseFloat(depositStringField);
    inputDepositField.value = '';

    const depositInputText = document.getElementById('adding-deposit-text');
    const depositStringText = depositInputText.innerText;
    const depositText = parseFloat(depositStringText);
    const totalAmount = deposit + depositText;
    depositInputText.innerText = totalAmount;
    
    

    /* withdraw field */
    const balanceInputField = document.getElementById('adding-balance-text');
    const balanceStringField = balanceInputField.innerText;
    const balanceField = parseFloat(balanceStringField);
    const totalBalance = totalAmount + balanceField;
    balanceInputField.innerText = totalBalance;
   

})
