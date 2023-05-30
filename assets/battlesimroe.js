function battle() {
  // get input values
  var playerNameA = document.getElementById("playerNameA").value;
  var playerNameB = document.getElementById("playerNameB").value;
  var troopAmountA = document.getElementById("troopAmountA").value;
  var troopAmountB = document.getElementById("troopAmountB").value;
  var bonusMightA = document.getElementById("bonusMightA").value;
  var bonusMightB = document.getElementById("bonusMightB").value;
  var bonusResA = document.getElementById("bonusResA").value;
  var bonusResB = document.getElementById("bonusResB").value;
  var bonusTatMightA = document.getElementById("bonusTatMightA").value;
  var bonusTatMightB = document.getElementById("bonusTatMightB").value;
  var bonusTatResA = document.getElementById("bonusTatResA").value;
  var bonusTatResB = document.getElementById("bonusTatResB").value;
  var bonusHpA = document.getElementById("bonusHpA").value;
  var bonusHpB = document.getElementById("bonusHpB").value;
  var bonusDmgA = document.getElementById("bonusDmgA").value;
  var bonusDmgB = document.getElementById("bonusDmgB").value;
  var bonusDmgReductionA = document.getElementById("bonusDmgReductionA").value;
  var bonusDmgReductionB = document.getElementById("bonusDmgReductionB").value;
  var troopTypeA = document.getElementById("troopTypeA").value;
  var troopTypeB = document.getElementById("troopTypeB").value;
  var troopMightA = document.getElementById("troopMightA").value;
  var troopMightB = document.getElementById("troopMightB").value;
  var troopResA = document.getElementById("troopResA").value;
  var troopResB = document.getElementById("troopResB").value;
  var troopHealthA = document.getElementById("troopHealthA").value;
  var troopHealthB = document.getElementById("troopHealthB").value;
  var troopPowerA = document.getElementById("troopPowerA").value;
  var troopPowerB = document.getElementById("troopPowerB").value;

  // perform calculations
  var mightA = troopMightA * (1 + bonusMightA / 100);
  var mightB = troopMightB * (1 + bonusMightB / 100);
  var resA = troopResA * (1 + bonusResA / 100);
  var resB = troopResB * (1 + bonusResB / 100);
  var tatMightA = troopMightA * (1 + bonusTatMightA / 100);
  var tatMightB = troopMightB * (1 + bonusTatMightB / 100);
  var tatResA = troopResA * (1 + bonusTatResA / 100);
  var tatResB = troopResB * (1 + bonusTatResB / 100);
  var hpA = troopHealthA * (1 + bonusHpA / 100);
  var hpB = troopHealthB * (1 + bonusHpB / 100);
  var coefA = 1; //Math.sqrt(20000 / troopAmountA);
  var coefB = 1; // Math.sqrt(20000 / troopAmountB);
  var dmgA = bonusDmgA / 100;
  var dmgB = bonusDmgB / 100;
  var dmgReductionA = bonusDmgReductionA / 100;
  var dmgReductionB = bonusDmgReductionB / 100;
  var troopA = troopAmountA;
  var troopB = troopAmountB;
  var tTypeA = troopTypeA;
  var tTypeB = troopTypeB;

  document.getElementById('playerStatA').innerHTML = "";
  document.getElementById('playerStatB').innerHTML = "";
  document.getElementById('results').innerHTML = "";
  document.getElementById('battlelog').innerHTML = "";

  document.getElementById('playerStatA').innerHTML += playerNameA + '<br>';
  document.getElementById('playerStatA').innerHTML += "Amount:" + troopAmountA + " Might:" + troopMightA + " Res:" + troopResA + " Health:" + troopHealthA + " Power:" + troopPowerA + '<br>';
  document.getElementById('playerStatA').innerHTML += "Bonus <br> Might:" + Math.round(bonusMightA) + " Res:" + Math.round(bonusResA) + " Tat Might:" + Math.round(bonusTatMightA) + " Tat Res:" + Math.round(bonusTatResA) + " Hp:" + Math.round(bonusHpA) + " Dmg:" + Math.round(bonusDmgA) + " Dmg Reduction:" + Math.round(bonusDmgReductionA) + '<br>';
  document.getElementById('playerStatA').innerHTML += "Real Stats <br> Might:" + Math.round(mightA) + " Res:" + Math.round(resA) + " Tat Might:" + Math.round(tatMightA) + " Tat Res:" + Math.round(tatResA) + " Hp:" + Math.round(hpA) + " Dmg:" + Math.round(dmgA) + " Dmg Reduction:" + Math.round(dmgReductionA) + '<br>';

  document.getElementById('playerStatB').innerHTML += playerNameB + '<br>';
  document.getElementById('playerStatB').innerHTML += "Amount:" + troopAmountB + "<br>  Might:" + troopMightB + "<br>  Res:" + troopResB + "<br>  Health:" + troopHealthB + "<br>  Power:" + troopPowerB + '<br>';
  document.getElementById('playerStatB').innerHTML += "Bonus <br> Might:" + Math.round(bonusMightB) + " Res:" + Math.round(bonusResB) + " Tat Might:" + Math.round(bonusTatMightB) + " Tat Res:" + Math.round(bonusTatResB) + " Hp:" + Math.round(bonusHpB) + " Dmg:" + Math.round(bonusDmgB) + " Dmg Reduction:" + Math.round(bonusDmgReductionB) + '<br>';
  document.getElementById('playerStatB').innerHTML += "Real Stats <br> Might:" + Math.round(mightB) + " Res:" + Math.round(resB) + " Tat Might:" + Math.round(tatMightB) + " Tat Res:" + Math.round(tatResB) + " Hp:" + Math.round(hpB) + " Dmg:" + Math.round(dmgB) + " Dmg Reduction:" + Math.round(dmgReductionB) + '<br>';

  var totalKillsA = 0;
  var totalKillsB = 0;

  // Normal Damage = (attack)/SQRT(attack + defense) * TroopTypeCoefficient * 1/(LoadedHP) * (1 + Damage %)
  // Attack = AttackingTroopCombatPower * AttackingTroopCount * BaseTroopMight * (1 + AttributeMight %) * (1 + CounteringMight %)
  // Defense = DefendingTroopCombatPower * DefendingTroopCount * BaseTroopResistance * (1 + AttributeResistance %) * (1 + CounteringResistance %)
  // LoadedHP = BaseHP * (1 + AttributeHP %)
  // Currently I add Tactical Might % to Attribute Might % for skill attack calculations, but I think I need to change it to a separate multiplier like Countering Might.

  for (let i = 1; i < 8; i++) {
    document.getElementById('battlelog').innerHTML += 'Round ' + i + '<br>';
    //var killsA = Math.round(troopAmountA * ((mightA * (1 + dmgA) )/ tatResB / hpB * coefA));
    var atackA = (troopAmountA * troopPowerA * mightA);
    var atackB = (troopAmountB * troopPowerB * mightB) * (1 + dmgB);
    var defA = (troopAmountA * troopPowerA * resA) * (1 + dmgReductionA);
    var defB = (troopAmountB * troopPowerB * resB) * (1 + dmgReductionB);
    var killsA = Math.round((atackA / Math.sqrt(atackA + defB)) * coefA * 1 / hpB * (1 + dmgA));
    document.getElementById('battlelog').innerHTML += playerNameA + ' atacks ' + playerNameB + ' and kills ' + killsA + '<br>';
    troopAmountB -= killsA;
    totalKillsA += killsA;
    var killsB = Math.round(troopAmountB * mightB * (1 + dmgB) / tatResA / hpA * coefB);
    document.getElementById('battlelog').innerHTML += playerNameB + ' atacks ' + playerNameA + ' and kills ' + killsB + '<br>';
    document.getElementById('battlelog').innerHTML += '<br>';
    troopAmountA -= killsB;
    totalKillsB += killsB;
    console.log(troopAmountA + ',' + mightA + ',' + resA + ',' + hpA + ',' + dmgA + ',' + troopAmountB + ',' + mightB + ',' + resB + ',' + hpB + ',' + dmgB);
    if (troopAmountA <= 0 || troopAmountB <= 0) {
      break;
    }
  };
  document.getElementById('results').innerHTML += playerNameA + ' killed ' + totalKillsA + ' troops<br>';
  document.getElementById('results').innerHTML += playerNameB + ' killed ' + totalKillsB + ' troops<br>';






  // display results

}