const initialPrice = document.getElementById('initial-price')
const quantity = document.getElementById('quantity')
const currentPrice = document.getElementById('current-Price')
const submit = document.getElementById('submit')
const output = document.getElementById('output')
function CalculateProfitAndLoss(costPrice, sellingPrice, quantityVal)
{
    if(sellingPrice > costPrice)
    {
        var profit = (sellingPrice - costPrice)
        var profitPercentage = (profit/costPrice)*100
        output.innerHTML =`Yay!! Your Profit is ${(profit*quantityVal).toFixed(2)} and profit Percentage is ${profitPercentage.toFixed(2)}%`
        output.style.color='green'
        
    }else if(costPrice > sellingPrice)
    {
        var loss = (costPrice - sellingPrice)
        var lossPercentage = (loss/costPrice)*100
        output.innerHTML = `Whoops!! Your loss is ${(loss*quantityVal).toFixed(2)} and loss Percentage is ${lossPercentage.toFixed(2)}%`
        output.style.color = 'red'
        
    }
    else
    {
        output.innerHTML=`No pain No gain, and no gain no pain`;
    }
}

function OnSubmitClicked(e)
{
    if(currentPrice.value.length == 0 || quantity.value.length == 0 || currentPrice.value.length == 0)
    {
         alert("Please enter Valid values to Proceed")
         return;
    }
    var costPrice = Number(initialPrice.value);
    var sellingPrice = Number(currentPrice.value);
    var quantityVal = Number(quantity.value)
    CalculateProfitAndLoss(costPrice, sellingPrice, quantityVal)
}

submit.addEventListener("click", OnSubmitClicked)