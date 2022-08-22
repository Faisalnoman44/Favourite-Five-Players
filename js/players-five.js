const playerArray = []

function display(players) {
    const selectedPlayer = document.getElementById('selected-player');
    selectedPlayer.innerText = '';
    for (i = 0; i < players.length; i++) {
        const player = players[i];

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <tr>
        <th>${i + 1}</th>
        <td>${player}</td>
        </tr>
       `;

        selectedPlayer.appendChild(tr);
    }

}
function addToSelect(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;

    
    if (playerArray.length > 4) {
        alert('You have already selected five players');
        return;
    }
    else{
        playerArray.push(playerName);
    }
    
        display(playerArray);

        disable(element);
    


}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayerCost = getInputValueById('player-cost');
    if(isNaN(perPlayerCost)){
        alert('Please Provide a valid amount');
        document.getElementById('player-cost').value = '';
        return;
    }
    else if(perPlayerCost < 0 ){
        alert('Please Provide a valid amount');
        document.getElementById('player-cost').value = '';
        return;
    }

    const totalPlayerExpenses = perPlayerCost * playerArray.length;

    setTextvalueById('player-expenses', totalPlayerExpenses);
})

document.getElementById('total-calculate').addEventListener('click', function () {
    const managerFee = getInputValueById('manager-fee');
    const coachFee = getInputValueById('coach-fee');
    if(isNaN(managerFee) || isNaN(coachFee)){
        alert('Please provide a valid amount');
        document.getElementById('manager-fee').value = '';
        document.getElementById('coach-fee').value = '';
        return;
    }
    else if(managerFee < 0 || coachFee < 0){
        alert('Please provide a valid amount');
        document.getElementById('manager-fee').value = '';
        document.getElementById('coach-fee').value = '';
        return;
    }

    const totalPlayer = document.getElementById('player-expenses');
    const totalPlayerExpensesString = totalPlayer.innerText;
    const totalPlayerExpenses = parseInt(totalPlayerExpensesString);

    const finalTotal = totalPlayerExpenses + managerFee + coachFee;

    setTextvalueById('final-total', finalTotal)
})