enum ssType {
    cute,
    cool,
    shiny,
}

interface gameState {
    currentBest: number;
    currentID: number;
    finished: boolean;
}

const headlines: string[] = ['cutest', 'coolest', 'shiniest'];
const typeNames: string[] = ['cute', 'cool', 'shiny'];

const maxID: number = 809;
let currentState: gameState = {
    currentID: 2,
    currentBest: 1,
    finished: false,
};
let currentType: ssType = ssType.cute;

function initSwipSwap(type: ssType) {
    currentType = type;
    currentState = getState(typeNames[type]);

    edom.findById('currentMode')?.setText(headlines[type]);

    edom.findById('whereAmI')?.setText(
        currentState.currentID.toString() + '/' + maxID.toString()
    );

    if (!currentState.finished) {
        loadImages(currentState.currentBest, currentState.currentID);
    } else {
        setContext(Contexts.endScreen);
        fetch(
            'https://pokeapi.co/api/v2/pokemon/' +
                currentState.currentBest.toString()
        )
            .then((response) => response.json())
            .then((data) => {
                (edom.findById('img1') as edomImageElement).setSrc(
                    data.sprites['other']['home']['front_default']
                );
                edom.findById('h11')?.setText(
                    data.name + '#' + currentState.currentBest.toString()
                );
                (edom.findById('img1') as edomImageElement).deleteClick(
                    'click'
                );
            });
    }
}

function setBest(id: number) {
    currentState.currentBest = id;
    currentState.currentID++;
    if (currentState.currentID > maxID) {
        currentState.finished = true;
        saveState(typeNames[currentType], currentState);

        setContext(Contexts.endScreen);
        fetch(
            'https://pokeapi.co/api/v2/pokemon/' +
                currentState.currentBest.toString()
        )
            .then((response) => response.json())
            .then((data) => {
                (edom.findById('img1') as edomImageElement).setSrc(
                    data.sprites['other']['home']['front_default']
                );
                edom.findById('h11')?.setText(
                    data.name + '#' + currentState.currentBest.toString()
                );
                (edom.findById('img1') as edomImageElement).deleteClick(
                    'click'
                );
            });
    } else {
        saveState(typeNames[currentType], currentState);
        loadImages(currentState.currentBest, currentState.currentID);
        edom.findById('whereAmI')?.setText(
            currentState.currentID.toString() + '/' + maxID.toString()
        );
    }
}

function resetCurrentState() {
    saveState(typeNames[currentType], {
        currentBest: 1,
        currentID: 2,
        finished: false,
    });
    setTimeout(() => {
        setContext(Contexts.swipSwap);
    }, 50);
}

function initState() {
    localStorage.setItem(
        'pokemon',
        JSON.stringify({
            cute: {
                currentBest: 1,
                currentID: 2,
                finished: false,
            },
            cool: {
                currentBest: 1,
                currentID: 2,
                finished: false,
            },
            shiny: {
                currentBest: 1,
                currentID: 2,
                finished: false,
            },
        })
    );
}

function saveState(type: string, values: gameState) {
    let store = JSON.parse(localStorage.getItem('pokemon')!);
    store[type] = values;
    localStorage.setItem('pokemon', JSON.stringify(store));
}

function getState(type: string): gameState {
    return JSON.parse(localStorage.getItem('pokemon')!)[type] as gameState;
}
