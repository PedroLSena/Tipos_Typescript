type Situations = "Habilitado" | "Habilitando" | "Inabitavel" | "Inexploravel";
type Cords = [number, number, number, number];

type Planet = {
    name: string,
    cords: Cords,
    situation: Situations,
    satellites: string[]
};

let planets: Planet[] = [];

function addPlanet({ name, cords, situation, satellites }: { name: string, cords: Cords, situation: Situations, satellites: string[] }) {
    planets.push({
        name,
        cords,
        situation,
        satellites
    });
    alert(`O planeta ${name} foi adicionado com sucesso`);
}

function findPlanet(name: string): Planet | false {
    const planet = planets.find(planet => planet.name === name);
    return planet ?? false;
}

function updatePlanetSituation(name: string, situation: Situations) {
    const planet = findPlanet(name);
    if (planet) {
        planet.situation = situation;
        alert(`Situação do planeta ${name} atualizada para ${situation}`);
    } else {
        alert(`Planeta ${name} não encontrado`);
    }
}

function addSatellite(name: string, planetName: string) {
    const planet = findPlanet(planetName);
    if (planet) {
        planet.satellites.push(name);
        alert(`Satélite ${name} adicionado ao planeta ${planetName}`);
    } else {
        alert(`Planeta ${planetName} não encontrado`);
    }
}

function removeSatellite(name: string, planetName: string) {
    const planet = findPlanet(planetName);
    if (planet) {
        planet.satellites = planet.satellites.filter(satellite => satellite !== name);
        alert(`Satélite ${name} removido do planeta ${planetName}`);
    } else {
        alert(`Planeta ${planetName} não encontrado`);
    }
}

function promptAction() {
    const action = prompt("Escolha uma ação: \n1. Adicionar planeta \n2. Atualizar situação do planeta \n3. Adicionar satélite \n4. Remover satélite \n5. Sair");
    switch (action) {
        case "1":
            const planetName = prompt("Informe o nome do planeta:");
            const cords = prompt("Informe as coordenadas (x, y, z, w) separadas por vírgula:").split(",").map(Number);
            const situation = promptSituation();
            addPlanet({ name: planetName, cords, situation, satellites: [] });
            break;
        case "2":
            const planetToUpdate = prompt("Informe o nome do planeta:");
            const newSituation = promptSituation();
            updatePlanetSituation(planetToUpdate, newSituation);
            break;
        case "3":
            const satelliteName = prompt("Informe o nome do satélite:");
            const parentPlanet = prompt("Informe o nome do planeta ao qual adicionar o satélite:");
            addSatellite(satelliteName, parentPlanet);
            break;
        case "4":
            const satelliteToRemove = prompt("Informe o nome do satélite:");
            const parentPlanetToRemoveFrom = prompt("Informe o nome do planeta do qual remover o satélite:");
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

function promptSituation(): Situations {
    let situation: Situations | undefined;
    let validSituation = false;

    while (!validSituation) {
        const situationPrompt = prompt("Informe a situação do planeta (1: Habilitado, 2: Habilitando, 3: Inabitável, 4: Inexplorável)");

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
    return situation!;
}

promptAction();
