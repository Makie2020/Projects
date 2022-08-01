const options = document.querySelectorAll(".options");
const title = document.getElementById("title");
const uitslag = document.getElementById("resultaat");
const uitslagTekst = document.getElementById("resultaatSpel");

let turns = 0;
const cards = ["Steen", "Papier", "Schaar"];
const keuze = [0, 1, 2];
const names = ["One", "Two"];

const showResult = () => {
    const player = turns % 2;
    if (player === 0) {
        uitslag.textContent = "";
    }
    const round = Math.floor(turns / 2);
    const PL1 = moves[0][round];
    const PL2 = moves[1][round];
    steen(PL1, PL2);
    uitslag.innerHTML = `
        <div>Player ${names[0]} played: ${cards[PL1]}</div>
        <div>Player ${names[1]} played: ${cards[PL2]}</div>
    `;
    return null;
};
const showTitle = () => {
    const player = turns % 2;
    title.textContent = `Player ${names[player]}, choose your move!`;
};

const onSelect = (evt) => {
    const player = turns % 2;
    const move = parseInt(evt.currentTarget.value, 10);
    moves[player].push(move);
    showResult();
    turns++;
    showTitle();
};

function steen(PL1, PL2) {
    if (PL1 === PL2) {
        uitslagTekst.innerHTML = "Gelijkspel";
    } else if (PL1 === keuze[1] && PL2 === keuze[0]) {
        console.log("Player 1 wins!");
        uitslagTekst.innerHTML = "Player 1 wins!";
    } else if (PL1 === keuze[0] && PL2 === keuze[2]) {
        uitslagTekst.innerHTML = "Player 1 wins!";
    } else if (PL1 === keuze[2] && PL2 === keuze[0]) {
        uitslagTekst.innerHTML = "Player 2 wins!";
    } else if (PL1 === keuze[0] && PL2 === keuze[1]) {
        uitslagTekst.innerHTML = "Player 2 wins!";
    } else if (PL1 === keuze[1] && PL2 === keuze[2]) {
        uitslagTekst.innerHTML = "Player 2 wins!";
    } else if (PL1 === keuze[2] || PL2 === keuze[1]) {
        uitslagTekst.innerHTML = "Player 1 wins!";
    }
}

options.forEach(EL => EL.addEventListener("click", onSelect));
showTitle();