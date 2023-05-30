
// document.getElementById('resultado').innerHTML
const players = ["troopAmount", "troopType", "troopMight", "troopRes", "troopHealth", "troopPower", "bonusMight", "bonusRes", "bonusTatMight", "bonusTatMight", "bonusHp", "bonusDmg", "bonusDmgReduction"];
const playerA = [108350, 1, 87, 49, 16, 7, 6.178, 5.2609, 1.095, 1.1, 1.90, 0.2, 0];
const playerB = [108350, 1, 87, 49, 16, 7, 2.47, 2.97, 0.2, 0.2, 0.479, 0.0, 0];
const playerC = [108350, 1, 87, 49, 16, 7, 750, 650, 1.2, 1.2, 2.40, 0.2, 0];

function realStats2(x) {
    let Might = x[2] * (1 + x[6]);
    let Res = x[3] * (1 + x[7]) * (1 + x[12]);
    let HP = x[4] * (1 + x[10]);
    let TatMight = Might * (1 + x[8]);
    let TatRes = Res * (1 + x[9]);
    let Troops = x[0];
    let Coef = Math.sqrt(10000 / x[0]);
    let Dmg = x[11]

    return ([Might, Res, HP, TatMight, TatRes, Troops, Coef, Dmg])
}

function autoAtackKills2(a, b) {
    return (Math.round(a[5] * a[0] * (1 + a[7]) / b[1] / b[2] * a[6]))
};

function battle2(a, b) {
    let rStatsA = realStats2(a);
    let rStatsB = realStats2(b);
    var totalKillsA = 0;
    var totalKillsB = 0;
    for (let i = 1; i < 8; i++) {
        document.getElementById('battlelog2').innerHTML += 'Round ' + i + '<br>';
        var killsA = autoAtackKills2(rStatsA, rStatsB)
        document.getElementById('battlelog2').innerHTML += 'Player 1 atacks player 2 and kills ' + killsA + '<br>';
        rStatsB[5] -= killsA;
        totalKillsA += killsA;
        var killsB = autoAtackKills2(rStatsB, rStatsA)
        document.getElementById('battlelog2').innerHTML += 'Player 2 atacks player 1 and kills ' + killsB + '<br>';
        document.getElementById('battlelog2').innerHTML += '<br>';
        rStatsA[5] -= killsB;
        totalKillsB += killsB;
    }
    document.getElementById('battleconsole2').innerHTML += 'Player 1 kills: ' + totalKillsA + '<br>';
    document.getElementById('battleconsole2').innerHTML += 'Player 2 kills: ' + totalKillsB + '<br>';
}

battle2(playerC, playerC)