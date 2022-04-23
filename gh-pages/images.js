"use strict";
function loadImages(ID1, ID2) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + ID1.toString())
        .then((response) => response.json())
        .then((data) => {
        var _a;
        edom.findById('img1').setSrc(currentType === ssType.shiny
            ? data.sprites['other']['home']['front_shiny']
            : data.sprites['other']['home']['front_default']);
        (_a = edom.findById('h11')) === null || _a === void 0 ? void 0 : _a.setText(data.name);
        edom.findById('img1').setValue('ID', ID1);
    });
    fetch('https://pokeapi.co/api/v2/pokemon/' + ID2.toString())
        .then((response) => response.json())
        .then((data) => {
        var _a;
        edom.findById('img2').setSrc(currentType === ssType.shiny
            ? data.sprites['other']['home']['front_shiny']
            : data.sprites['other']['home']['front_default']);
        (_a = edom.findById('h12')) === null || _a === void 0 ? void 0 : _a.setText(data.name);
        edom.findById('img2').setValue('ID', ID2);
    });
}
