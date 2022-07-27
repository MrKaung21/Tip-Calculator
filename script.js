const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const totalPersonBill = document.getElementById('perPersonTotal')
const numberOfPeople = document.getElementById('numberOfPeople')

let totalTip
let totalBill

let totalPeople = Number(numberOfPeople.innerText)
console.log(totalPeople)
function calculateBill(){
    const billTotal = parseFloat(billInput.value)
    const tip = parseFloat(tipInput.value) / 100
    totalTip = billTotal * tip
    totalBill = (billTotal + totalTip) / totalPeople

    if(!(billTotal && tip)){
        totalPersonBill.textContent
    }
    else{
        totalPersonBill.textContent = `$${totalBill.toFixed(2)}`
    }

    
}

function increasePeople(){
    totalPeople += 1
    numberOfPeople.innerText = totalPeople

    calculateBill()
}

function decreasePeople(){
    if(totalPeople <= 1){
        return
    }else{
        totalPeople -= 1
        numberOfPeople.innerText = totalPeople
    }

    calculateBill()
}

