// return the data from the url https://legiongen.com/api/all/heros and display the images in the gridHero div
fetch('https://api.allorigins.win/raw?url=http://legiongen.com/api/all/heros')
.then(response => response.json())
.then(data => {
  const grid = document.getElementById('gridHero');
  for (const hero of data.heros) {
    const item = document.createElement('div');
    item.className = 'col-3';
    const img = document.createElement('img');
    img.src = 'http://legiongen.com/' + hero.roe_image;
    img.alt = hero.roe_name;
    // make image responsive
    img.className = 'img-fluid';
    item.appendChild(img);
    grid.appendChild(item);
  }
})
.catch(error => console.error(error));
// add event when click you return the id of all heroes, but removing the selected
document.getElementById('gridHero').addEventListener('click', function(e) {
  if (e.target.tagName === 'IMG') {
    const heroId = e.target.src.split('/').pop().split('.')[0];
    const grid = document.getElementById('gridHero');
    const selected = document.getElementById('selectedHero');
    const item = document.createElement('div');
    item.className = 'col-3';
    const img = document.createElement('img');
    img.src = e.target.src;
    img.alt = e.target.alt;
    // make image responsive
    img.className = 'img-fluid';
    item.appendChild(img);
    selected.appendChild(item);
    grid.removeChild(e.target.parentNode);
  }
});


fetch('https://legiongen.com/public/api/combos/all')
.then(response => response.json())
.then(data => {
  const comboContainer = document.getElementById('comboContainer');
  const comboData = data.combos;

  // Group the comboData by combo type
  const groupedComboData = comboData.reduce((groups, combo) => {
    const key = combo.type;
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(combo);
    return groups;
  }, {});

  Object.keys(groupedComboData).forEach(comboType => {
    // Create a new div for each combo type
    const typeDiv = document.createElement('div');
    typeDiv.className = 'col-4';

    const typeHeader = document.createElement('div');
    typeHeader.className = 'typeHeader';
    typeHeader.innerHTML = `<h2>${comboType}</h2>`;
    typeDiv.appendChild(typeHeader);

    const typeBody = document.createElement('div');
    typeBody.className = 'typeBody';

    groupedComboData[comboType].forEach(combo => {
      const comboDiv = document.createElement('div');
      comboDiv.className = 'comboDiv';
      comboDiv.innerHTML = `  
  <div class='row'>  
    <div class='col-4'><img class='img-fluid' src='http://legiongen.com/${combo.FrontHero.roe_image}' /></div>
    <div class='col-4'><img class='img-fluid' src='http://legiongen.com/${combo.MiddleHero.roe_image}' /></div>
    <div class='col-4'><img class='img-fluid' src='http://legiongen.com/${combo.BackHero.roe_image}' /></div>
  </div>`;
      typeBody.appendChild(comboDiv);
    });
    typeDiv.appendChild(typeBody);
    comboContainer.appendChild(typeDiv);
  });
})
.catch(error => console.error(error));