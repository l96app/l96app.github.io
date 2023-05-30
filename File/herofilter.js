$(document).ready(function () {
  var selectedHeroes = [];
  var selectedIdsElement = $(".selected-ids p");
  var notSelectedIdsElement = $(".not-selected-ids p");
  var combosContainer = $("#combos-container");

  function updateSelectedIds() {
    selectedIdsElement.text(selectedHeroes.join(", "));
  }

  function updateNotSelectedIds() {
    var allHeroes = [];
    var heroElements = $(".hero");

    heroElements.each(function () {
      var heroId = $(this).attr("hero-id");
      allHeroes.push(parseInt(heroId));
    });

    var notSelectedHeroes = allHeroes.filter(function (heroId) {
      return !selectedHeroes.includes(heroId);
    });

    notSelectedIdsElement.text(notSelectedHeroes.join(", "));
  }

  function updateIds() {
    updateSelectedIds();
    updateNotSelectedIds();
  }

  function handleHeroSelection(heroId) {
    var index = selectedHeroes.indexOf(heroId);
    if (index !== -1) {
      selectedHeroes.splice(index, 1);
    } else {
      selectedHeroes.push(heroId);
    }
    selectedHeroes.sort(function (a, b) {
      return a - b;
    });
    updateIds();
    updateCombos();
  }

  $(document).on("click", ".hero", function () {
    var heroId = $(this).attr("hero-id");

    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected").addClass("deselected");
    } else {
      $(this).removeClass("deselected").addClass("selected");
    }

    handleHeroSelection(parseInt(heroId));
  });

  function updateCombos() {
    combosContainer.empty();

    $.ajax({
      url: "http://legiongen.com/api/all/heros",
      method: "GET",
      success: function (response) {
        var data = JSON.parse(response);
        var selectedHeroes = selectedHeroes;

        $.ajax({
          url: "https://legiongen.com/public/api/combos/all",
          method: "GET",
          success: function (responseCombos) {
            var dataCombos = JSON.parse(responseCombos);

            for (var i = 0; i < dataCombos.combos.length; i++) {
              var combo = dataCombos.combos[i];
              var frontHero = combo.FrontHero;
              var middleHero = combo.MiddleHero;
              var backHero = combo.BackHero;

              var frontHeroId = frontHero.id;
              var middleHeroId = middleHero.id;
              var backHeroId = backHero.id;

              if (
                selectedHeroes.includes(frontHeroId) &&
                selectedHeroes.includes(middleHeroId) &&
                selectedHeroes.includes(backHeroId)
              ) {
                var comboHTML = '<div class="combo">';
                comboHTML +=
                  '<img class="hero-small" src="http://legiongen.com/' +
                  frontHero.roe_image +
                  '">';
                comboHTML +=
                  '<img class="hero-small" src="http://legiongen.com/' +
                  middleHero.roe_image +
                  '">';
                comboHTML +=
                  '<img class="hero-small" src="http://legiongen.com/' +
                  backHero.roe_image +
                  '">';
                comboHTML += "</div>";
                combosContainer.append(comboHTML);
              }
            }
          },
          error: function (error) {
            console.log("Error al obtener la respuesta del endpoint de combos.");
          }
        });
      },
      error: function (error) {
        console.log("Error al obtener la respuesta de la URL.");
      }
    });
  }

  updateIds();
  updateCombos();
});
