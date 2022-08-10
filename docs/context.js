"use strict";
function setContext(context) {
    var _a, _b;
    (_a = edom.findById('contextContainer')) === null || _a === void 0 ? void 0 : _a.clear();
    edom.fromTemplate(contexts[context], edom.findById('contextContainer'));
    if (context === Contexts.main) {
        let kinderGarden = (_b = edom.findById('contextContainer')) === null || _b === void 0 ? void 0 : _b.children;
        kinderGarden.shift(); // remove image
        let games = [];
        typeNames.forEach((name) => {
            games.push(getState(name));
        });
        for (let i = 0; i < kinderGarden.length - 1; i++) {
            if (games[i].finished) {
                kinderGarden[i].children[0].applyStyle('done');
                kinderGarden[i].children[2].applyStyle('done');
            }
        }
    }
}
