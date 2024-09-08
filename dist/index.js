var planets = [];
function addPlanet(_a) {
    var name = _a.name, cords = _a.cords, situation = _a.situation, satellites = _a.satellites;
    planets.push({
        name: name,
        cords: cords,
        situation: situation,
        satellites: satellites
    });
    alert("O planeta ".concat(name, " foi adicionado com sucesso"));
}
function findPlanet(name) {
    var planet = planets.find(function (planet) { return planet.name === name; });
    return planet !== null && planet !== void 0 ? planet : false;
}
function updatePlanetSituation(name, situation) {
    var planet = findPlanet(name);
    if (planet) {
        planet.situation = situation;
        alert("Situa\u00E7\u00E3o do planeta ".concat(name, " atualizada para ").concat(situation));
    }
    else {
        alert("Planeta ".concat(name, " n\u00E3o encontrado"));
    }
}
function addSatellite(name, planetName) {
    var planet = findPlanet(planetName);
    if (planet) {
        planet.satellites.push(name);
        alert("Sat\u00E9lite ".concat(name, " adicionado ao planeta ").concat(planetName));
    }
    else {
        alert("Planeta ".concat(planetName, " n\u00E3o encontrado"));
    }
}
function removeSatellite(name, planetName) {
    var planet = findPlanet(planetName);
    if (planet) {
        planet.satellites = planet.satellites.filter(function (satellite) { return satellite !== name; });
        alert("Sat\u00E9lite ".concat(name, " removido do planeta ").concat(planetName));
    }
    else {
        alert("Planeta ".concat(planetName, " n\u00E3o encontrado"));
    }
}
function promptAction() {
    var action = prompt("Escolha uma ação: \n1. Adicionar planeta \n2. Atualizar situação do planeta \n3. Adicionar satélite \n4. Remover satélite \n5. Sair");
    switch (action) {
        case "1":
            var planetName = prompt("Informe o nome do planeta:");
            var cords = prompt("Informe as coordenadas (x, y, z, w) separadas por vírgula:").split(",").map(Number);
            var situation = promptSituation();
            addPlanet({ name: planetName, cords: cords, situation: situation, satellites: [] });
            break;
        case "2":
            var planetToUpdate = prompt("Informe o nome do planeta:");
            var newSituation = promptSituation();
            updatePlanetSituation(planetToUpdate, newSituation);
            break;
        case "3":
            var satelliteName = prompt("Informe o nome do satélite:");
            var parentPlanet = prompt("Informe o nome do planeta ao qual adicionar o satélite:");
            addSatellite(satelliteName, parentPlanet);
            break;
        case "4":
            var satelliteToRemove = prompt("Informe o nome do satélite:");
            var parentPlanetToRemoveFrom = prompt("Informe o nome do planeta do qual remover o satélite:");
            removeSatellite(satelliteToRemove, parentPlanetToRemoveFrom);
            break;
        case "5":
            alert("Saindo...");
            return;
        default:
            alert("Opção inválida. Tente novamente.");
            break;
    }
    promptAction();
}
function promptSituation() {
    var situation;
    var validSituation = false;
    while (!validSituation) {
        var situationPrompt = prompt("Informe a situação do planeta (1: Habilitado, 2: Habilitando, 3: Inabitável, 4: Inexplorável)");
        switch (situationPrompt) {
            case "1":
                situation = "Habilitado";
                validSituation = true;
                break;
            case "2":
                situation = "Habilitando";
                validSituation = true;
                break;
            case "3":
                situation = "Inabitavel";
                validSituation = true;
                break;
            case "4":
                situation = "Inexploravel";
                validSituation = true;
                break;
            default:
                alert("Situação inválida. Tente novamente.");
                break;
        }
    }
    return situation;
}
promptAction();
