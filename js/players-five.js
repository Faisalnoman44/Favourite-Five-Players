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

    playerArray.push(playerName);


    display(playerArray);

    disable(element);
}

document.getElementById('calculate-btn').addEventListener('click',function(){
    const perPlayerCost = getInputValueById('player-cost');
    
    const totalPlayerExpenses = perPlayerCost * playerArray.length;

    setTextvalueById('player-expenses',totalPlayerExpenses);
})

document.getElementById('total-calculate').addEventListener('click', function(){
    const managerFee = getInputValueById('manager-fee');
    const coachFee = getInputValueById('coach-fee');

    const totalPlayer = document.getElementById('player-expenses');
    const totalPlayerExpensesString = totalPlayer.innerText;
    const totalPlayerExpenses = parseInt(totalPlayerExpensesString);

    const finalTotal = totalPlayerExpenses + managerFee + coachFee;

    setTextvalueById('final-total',finalTotal)
})