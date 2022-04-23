function startup() {
    edom.init();
    createContextContainer();

    if (localStorage.getItem("pokemon") === null) {
        initState();
    }

    setContext(Contexts.main);
}

function createContextContainer() {
    edom.fromTemplate(
        [
            {
                tag: 'div',
                id: 'contextContainer',
                classes: ['context'],
            },
        ],
        edom.body
    );
}
