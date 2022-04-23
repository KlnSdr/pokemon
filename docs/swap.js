"use strict";
var ssType;
(function (ssType) {
    ssType[ssType["cute"] = 0] = "cute";
    ssType[ssType["cool"] = 1] = "cool";
    ssType[ssType["shiny"] = 2] = "shiny";
})(ssType || (ssType = {}));
const headlines = ['cutest', 'coolest', 'shiniest'];
const typeNames = ['cute', 'cool', 'shiny'];
const maxID = 809;
let currentState = {
    currentID: 2,
    currentBest: 1,
    finished: false,
};
let currentType = ssType.cute;
function initSwipSwap(type) {
    var _a, _b;
    currentType = type;
    currentState = getState(typeNames[type]);
    (_a = edom.findById('currentMode')) === null || _a === void 0 ? void 0 : _a.setText(headlines[type]);
    (_b = edom.findById('whereAmI')) === null || _b === void 0 ? void 0 : _b.setText(currentState.currentID.toString() + '/' + maxID.toString());
    if (!currentState.finished) {
        loadImages(currentState.currentBest, currentState.currentID);
    }
    else {
        setContext(Contexts.endScreen);
        fetch('https://pokeapi.co/api/v2/pokemon/' +
            currentState.currentBest.toString())
            .then((response) => response.json())
            .then((data) => {
            var _a, _b;
            edom.findById('img1').setSrc(data.sprites['other']['home']['front_default']);
            (_a = edom.findById('h11')) === null || _a === void 0 ? void 0 : _a.setText(data.name + '#' + currentState.currentBest.toString());
            edom.findById('img1').deleteClick('click');
            (_b = edom.findById('currentMode')) === null || _b === void 0 ? void 0 : _b.setText(headlines[currentType]);
        });
    }
}
function setBest(id) {
    var _a;
    currentState.currentBest = id;
    currentState.currentID++;
    if (currentState.currentID > maxID) {
        currentState.finished = true;
        saveState(typeNames[currentType], currentState);
        setContext(Contexts.endScreen);
        fetch('https://pokeapi.co/api/v2/pokemon/' +
            currentState.currentBest.toString())
            .then((response) => response.json())
            .then((data) => {
            var _a, _b;
            edom.findById('img1').setSrc(data.sprites['other']['home']['front_default']);
            (_a = edom.findById('h11')) === null || _a === void 0 ? void 0 : _a.setText(data.name + '#' + currentState.currentBest.toString());
            edom.findById('img1').deleteClick('click');
            (_b = edom.findById('currentMode')) === null || _b === void 0 ? void 0 : _b.setText(headlines[currentType]);
        });
    }
    else {
        saveState(typeNames[currentType], currentState);
        loadImages(currentState.currentBest, currentState.currentID);
        (_a = edom.findById('whereAmI')) === null || _a === void 0 ? void 0 : _a.setText(currentState.currentID.toString() + '/' + maxID.toString());
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
    localStorage.setItem('pokemon', JSON.stringify({
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
    }));
}
function saveState(type, values) {
    let store = JSON.parse(localStorage.getItem('pokemon'));
    store[type] = values;
    localStorage.setItem('pokemon', JSON.stringify(store));
}
function getState(type) {
    return JSON.parse(localStorage.getItem('pokemon'))[type];
}
