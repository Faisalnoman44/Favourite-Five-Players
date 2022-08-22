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
}

document.getElementById('calculate-btn').addEventListener('click',function(){
    const perPlayerCost = getInputValueById('player-cost');
    
    
})