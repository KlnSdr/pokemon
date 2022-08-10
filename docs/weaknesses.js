"use strict";
var types;
(function (types) {
    types["normal"] = "normal";
    types["fire"] = "fire";
    types["water"] = "water";
    types["grass"] = "grass";
    types["electric"] = "electric";
    types["ice"] = "ice";
    types["fighting"] = "fighting";
    types["poison"] = "poison";
    types["ground"] = "ground";
    types["flying"] = "flying";
    types["psychic"] = "psychic";
    types["bug"] = "bug";
    types["rock"] = "rock";
    types["ghost"] = "ghost";
    types["dragon"] = "dragon";
    types["dark"] = "dark";
    types["steel"] = "steel";
    types["fairy"] = "fairy";
})(types || (types = {}));
const chart = {
    normal: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, -2, 0, 0, 0, 0],
    fire: [0, -1, 1, 0, 0, -1, 0, 0, 1, 0, 0, -1, 1, 0, 0, 0, -1, -1],
    water: [0, -1, -1, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0],
    grass: [0, 1, -1, -1, -1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    electric: [0, 0, 0, 0, -1, 0, 0, 0, 1, -1, 0, 0, 0, 0, 0, 0, -1, 0],
    ice: [0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    fighting: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, -1, -1, 0, 0, -1, 0, 1],
    poison: [0, 0, 0, -1, 0, 0, -1, -1, 1, 0, 1, -1, 0, 0, 0, 0, 0, -1],
    ground: [0, 0, 1, 1, -2, 1, 0, -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0],
    flying: [0, 0, 0, -1, 1, 1, -1, 0, -2, 0, 0, -1, 1, 0, 0, 0, 0, 0],
    psychic: [0, 0, 0, 0, 0, 0, -1, 0, 0, 0, -1, 1, 0, 1, 0, 1, 0, 0],
    bug: [0, 1, 0, -1, 0, 0, -1, 0, -1, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    rock: [-1, -1, 1, 1, 0, 0, 1, -1, 1, -1, 0, 0, 0, 0, 0, 0, 1, 0],
    ghost: [-2, 0, 0, 0, 0, 0, -2, 0, 0, 0, 0, -1, 0, 1, 0, 1, 0, 0],
    dragon: [0, -1, -1, -1, -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    dark: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, -2, 1, 0, -1, 0, -1, 0, 1],
    steel: [-1, 1, 0, -1, 0, -1, 1, -2, 1, -1, -1, 0, -1, 0, -1, 0, -1, -1],
    fairy: [0, 0, 0, 0, 0, 0, -1, 1, 0, 0, 0, -1, 0, 0, -2, 0, 1, 0],
};
function refreshConters() {
    const oppTypes = [];
    edom.allElements.forEach((elm) => {
        if (elm.classes.includes('smolBttn') &&
            elm.getValue('state') === true) {
            oppTypes.push(chart[elm.text]);
        }
    });
    const effectiveness = Array.from(Array(18)).map(() => {
        return 0;
    });
    oppTypes.forEach((type) => {
        for (let i = 0; i < type.length; i++) {
            effectiveness[i] += type[i];
        }
    });
    let result = {
        double: [],
        super: [],
        not: [],
        immune: [],
    };
    const detailsHeadlines = {
        double: 'double weakness',
        super: 'super effective',
        not: 'not very effective',
        immune: 'immune',
    };
    console.log(effectiveness);
    effectiveness.forEach((value, index) => {
        if (value > 1) {
            result.double.push(Object.keys(chart)[index]);
        }
        else if (value > 0) {
            result.super.push(Object.keys(chart)[index]);
        }
        else if (value < -1) {
            result.immune.push(Object.keys(chart)[index]);
        }
        else if (value < 0) {
            result.not.push(Object.keys(chart)[index]);
        }
    });
    Object.keys(result).forEach((key) => {
        var _a, _b, _c;
        (_a = edom.findById(key)) === null || _a === void 0 ? void 0 : _a.clear();
        (_c = (_b = edom.findById(key)) === null || _b === void 0 ? void 0 : _b.parent) === null || _c === void 0 ? void 0 : _c.children[0].setText(detailsHeadlines[key] + ' (' + result[key].length + '):');
        result[key].forEach((pokeType) => {
            edom.fromTemplate([
                {
                    tag: 'li',
                    text: '- ' + pokeType,
                },
            ], edom.findById(key));
        });
    });
}
