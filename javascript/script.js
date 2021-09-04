const loginbtn = document.getElementById("login");
loginbtn.addEventListener('click', function(){
    const loginArea =document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display ="block"
})

//deposit button 

const depositBtn = document.getElementById("add-Deposit")
depositBtn.addEventListener("click", function(){
    const depositNumber = getInputNumber ("deposit-amount");

    updateSpanText("deposit-current", depositNumber);
    updateSpanText("current-balance", depositNumber);

    document.getElementById("deposit-amount").value = ""
})

function updateSpanText (id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalBalance = depositNumber + currentNumber
    document.getElementById(id).innerText = totalBalance;

}

//withdraw button

const withdrawbtn = document.getElementById("add-Withdraw")
withdrawbtn.addEventListener("click", function(){
    const withdrawNumber = getInputNumber ("withdraw-amount")
    updateSpanText("current-withdraw", withdrawNumber)
     updateSpanText("current-balance", -1 * withdrawNumber )

    document.getElementById("withdraw-amount").value = ""
})
function getInputNumber (id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}