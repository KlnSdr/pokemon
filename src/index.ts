function startup() {
    edom.init();
    createContextContainer();

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
