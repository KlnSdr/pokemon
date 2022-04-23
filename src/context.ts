function setContext(context: Contexts) {
    edom.findById('contextContainer')?.clear();
    edom.fromTemplate(contexts[context], edom.findById('contextContainer'));

    if (context === Contexts.main) {
        const kinderGarden: edomElement[] =
            edom.findById('contextContainer')?.children!;
        let games: gameState[] = [];

        typeNames.forEach((name: string) => {
            games.push(getState(name));
        });

        for (let i = 0; i < kinderGarden.length; i++) {
            if (games[i].finished) {
                kinderGarden[i].children[0].applyStyle('done');
                kinderGarden[i].children[2].applyStyle('done');
            }
        }
    }
}
