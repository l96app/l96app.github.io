<?php
$url = 'http://legiongen.com/api/all/heros';
$response = file_get_contents($url);

if ($response === false) {
    error_log("Error al obtener la respuesta de la URL.");
    return false;
}

$data = json_decode($response);

if ($data === null) {
    error_log("Error al decodificar los datos JSON.");
    return false;
}

$heroIds = array();
foreach ($data->heros as $hero) {
    $heroIds[] = $hero->id;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Héroes</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            padding-top: 4.5rem;
        }
        .hero {
            border: 2px solid green;
            cursor: pointer;
            position: relative;
            width: 40px;
            height: 40px;
            margin-bottom: 3px; /* Espacio entre las filas */
            background-size: cover;
            background-position: center;
        }
        .hero img {
            display: block;
            max-width: 100%;
            max-height: 100%;
            width: auto;
            height: auto;
            margin: auto;

        }
        .hero + .hero {
            margin-left: 3px; /* Espacio entre las columnas */
        }
        .overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 128, 0, 0.3); /* verde con 30% de opacidad */
            transition: 0.3s; /* suaviza la transición de color */
            opacity: 0.1;
        }
        .hero.deselected {
            border-color: red;
        }
        .hero.deselected .overlay {
            background: rgba(255, 0, 0, 0.3);
            opacity: 0.4;
        }
        .hero.selected {
            border-color: green;
        }
        .hero.selected .overlay {
            background: rgba(0, 128, 0, 0.3);
        }
        .selected-ids,
        .not-selected-ids {
            margin-top: 3px;
        }
        .combo-container {
            margin-top: 20px;
        }
        .combo {
            display: flex;
            align-items: center;
        }
        .combo img {
            width: 50px;
            height: 50px;
            margin-right: 1px;
        }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#">Héroes</a>
    </nav>

    <main role="main" class="container">
    <div class='row'>
        <div class="container w-25">
            <h1>Héroes</h1>
            <p>Seleccioná los héroes que quieras para ver los combos que pueden hacer.</p>
        <div class="row justify-content-center">
            <?php
            if ($data) {
                foreach ($data->heros as $hero) {
                    echo '<div class="hero selected" hero-id="' . $hero->id . '"><img src="http://legiongen.com/' . $hero->roe_image . '"><div class="overlay"></div></div>';
                }
            }
            ?>
        </div>

        <div class="selected-ids">
            <h4>IDs Seleccionados:</h4>
            <p></p>
        </div>

        <div class="not-selected-ids">
            <h4>IDs No Seleccionados:</h4>
            <p></p>
        </div>

        <div>
            <p>Conseguí información</p>
        </div>
        </div>

        <div class="combo-container w-50" id="combos-container">
            <!-- Combos se agregarán aquí dinámicamente -->
        </div>
        </div>
    </main>

    <footer class="footer mt-auto py-3 bg-dark">
        <div class="container">
            <span class="text-muted">Página de Héroes</span>
        </div>
    </footer>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <script>
        $(document).ready(function() {
            var selectedHeroes = <?php echo json_encode($heroIds); ?>;
            var selectedIdsElement = $(".selected-ids p");
            var notSelectedIdsElement = $(".not-selected-ids p");
            var combosContainer = $("#combos-container");

            function updateSelectedIds() {
                selectedIdsElement.text(selectedHeroes.join(", "));
            }

            function updateNotSelectedIds() {
                var allHeroes = <?php echo json_encode($heroIds); ?>;
                var notSelectedHeroes = allHeroes.filter(function(heroId) {
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
                selectedHeroes.sort(function(a, b) {
                    return a - b;
                });
                updateIds();
                updateCombos();
            }

            $(".hero").click(function() {
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

                <?php
                $urlCombos = 'https://legiongen.com/public/api/combos/all';
                $responseCombos = file_get_contents($urlCombos);

                if ($responseCombos === false) {
                    error_log("Error al obtener la respuesta del endpoint de combos.");
                    return false;
                }

                $dataCombos = json_decode($responseCombos);

                if ($dataCombos === null) {
                    error_log("Error al decodificar los datos JSON de combos.");
                    return false;
                }

                foreach ($dataCombos->combos as $combo) {
                    $frontHero = $combo->FrontHero;
                    $middleHero = $combo->MiddleHero;
                    $backHero = $combo->BackHero;

                    echo 'var frontHeroId = ' . $frontHero->id . ';';
                    echo 'var middleHeroId = ' . $middleHero->id . ';';
                    echo 'var backHeroId = ' . $backHero->id . ';';

                    echo 'if (selectedHeroes.includes(frontHeroId) && selectedHeroes.includes(middleHeroId) && selectedHeroes.includes(backHeroId)) {';
                    echo 'var comboHTML = \'<div class="combo">\';';
                    echo 'comboHTML += \'<img class="hero-small" src="http://legiongen.com/\' + \'' . $frontHero->roe_image . '\' + \'">\';';
                    echo 'comboHTML += \'<img class="hero-small" src="http://legiongen.com/\' + \'' . $middleHero->roe_image . '\' + \'">\';';
                    echo 'comboHTML += \'<img class="hero-small" src="http://legiongen.com/\' + \'' . $backHero->roe_image . '\' + \'">\';';
                    echo 'comboHTML += \'</div>\';';
                    echo 'combosContainer.append(comboHTML);';
                    echo '}';
                }
                ?>
            }

            updateIds();
            updateCombos();
        });
    </script>
</body>
</html>
