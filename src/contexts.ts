enum Contexts {
    main,
    swipSwap,
    endScreen,
    types,
}

const contexts: edomTemplate[][] = [
    // main
    [
        {
            tag: 'img',
            classes: ['homeScreenIcon'],
            src: 'favicon.svg',
        },
        {
            tag: 'button',
            children: [
                {
                    tag: 'span',
                    classes: ['fa-solid', 'fa-ice-cream'],
                },
                {
                    tag: 'span',
                    text: 'cutest',
                },
                {
                    tag: 'span',
                    classes: ['fa-solid', 'fa-ice-cream'],
                },
            ],
            handler: [
                {
                    type: 'click',
                    id: 'click',
                    body: () => {
                        setContext(Contexts.swipSwap);
                        initSwipSwap(ssType.cute);
                    },
                },
            ],
        },
        {
            tag: 'button',
            children: [
                {
                    tag: 'span',
                    classes: ['fa-solid', 'fa-snowflake'],
                },
                {
                    tag: 'span',
                    text: 'coolest',
                },
                {
                    tag: 'span',
                    classes: ['fa-solid', 'fa-snowflake'],
                },
            ],
            handler: [
                {
                    type: 'click',
                    id: 'click',
                    body: () => {
                        setContext(Contexts.swipSwap);
                        initSwipSwap(ssType.cool);
                    },
                },
            ],
        },
        {
            tag: 'button',
            children: [
                {
                    tag: 'span',
                    classes: ['fa-solid', 'fa-star'],
                },
                {
                    tag: 'span',
                    text: 'shiniest',
                },
                {
                    tag: 'span',
                    classes: ['fa-solid', 'fa-star'],
                },
            ],
            handler: [
                {
                    type: 'click',
                    id: 'click',
                    body: () => {
                        setContext(Contexts.swipSwap);
                        initSwipSwap(ssType.shiny);
                    },
                },
            ],
        },
        {
            tag: 'button',
            children: [
                {
                    tag: 'span',
                    classes: ['fa-solid', 'fa-burst'],
                },
                {
                    tag: 'span',
                    text: 'weaknesses',
                },
                {
                    tag: 'span',
                    classes: ['fa-solid', 'fa-burst'],
                },
            ],
            handler: [
                {
                    type: 'click',
                    id: 'click',
                    body: () => {
                        setContext(Contexts.types);
                    },
                },
            ],
        },
    ],
    // swipSwap
    [
        {
            tag: 'div',
            classes: ['topbar'],
            children: [
                {
                    tag: 'button',
                    classes: ['fa-solid', 'fa-house'],
                    handler: [
                        {
                            type: 'click',
                            id: 'click',
                            body: () => {
                                setContext(Contexts.main);
                            },
                        },
                    ],
                },
                {
                    tag: 'h1',
                    id: 'currentMode',
                },
                {
                    tag: 'h1',
                    id: 'whereAmI',
                },
            ],
        },
        {
            tag: 'div',
            classes: ['container'],
            children: [
                {
                    tag: 'h1',
                    id: 'h11',
                    text: '',
                },
                {
                    tag: 'img',
                    id: 'img1',
                    src: '',
                    handler: [
                        {
                            type: 'click',
                            id: 'click',
                            body: (self: edomElement) => {
                                setBest(self.getValue('ID'));
                            },
                        },
                    ],
                },
                {
                    tag: 'h1',
                    id: 'h12',
                    text: '',
                },
                {
                    tag: 'img',
                    id: 'img2',
                    src: '',
                    handler: [
                        {
                            type: 'click',
                            id: 'click',
                            body: (self: edomElement) => {
                                setBest(self.getValue('ID'));
                            },
                        },
                    ],
                },
            ],
        },
    ],
    // endScreen
    [
        {
            tag: 'div',
            classes: ['topbar'],
            children: [
                {
                    tag: 'button',
                    classes: ['fa-solid', 'fa-house'],
                    handler: [
                        {
                            type: 'click',
                            id: 'click',
                            body: () => {
                                setContext(Contexts.main);
                            },
                        },
                    ],
                },
                {
                    tag: 'h1',
                    id: 'currentMode',
                },
                {
                    tag: 'h1',
                    id: 'whereAmI',
                },
            ],
        },
        {
            tag: 'div',
            classes: ['container'],
            children: [
                {
                    tag: 'h1',
                    id: 'h11',
                    text: '',
                },
                {
                    tag: 'img',
                    id: 'img1',
                    src: '',
                    handler: [
                        {
                            type: 'click',
                            id: 'click',
                            body: (self: edomElement) => {
                                setBest(self.getValue('ID'));
                            },
                        },
                    ],
                },
                {
                    tag: 'p',
                    id: 'pType',
                    text: 'type:',
                },
                {
                    tag: 'p',
                    id: 'pWeight',
                    text: 'weight:',
                },
                {
                    tag: 'p',
                    id: 'pHeight',
                    text: 'height:',
                },
                {
                    tag: 'button',
                    text: 'reset',
                    id: 'resetGame',
                    handler: [
                        {
                            type: 'click',
                            id: 'click',
                            body: () => {
                                resetCurrentState();
                            },
                        },
                    ],
                },
            ],
        },
    ],
    // types
    [
        {
            tag: 'div',
            classes: ['topbar'],
            children: [
                {
                    tag: 'button',
                    classes: ['fa-solid', 'fa-house'],
                    handler: [
                        {
                            type: 'click',
                            id: 'click',
                            body: () => {
                                setContext(Contexts.main);
                            },
                        },
                    ],
                },
                {
                    tag: 'h1',
                    id: 'currentMode',
                },
                {
                    tag: 'h1',
                    id: 'whereAmI',
                },
            ],
        },
        {
            tag: 'div',
            classes: ['container', 'weak'],
            children: [
                {
                    tag: 'p',
                    text: 'types:',
                },
                {
                    tag: 'div',
                    classes: ['containerTypes'],
                    children: genTypeButtons(),
                },
                {
                    tag: 'hr',
                },
                {
                    tag: 'div',
                    children: [
                        {
                            tag: 'details',
                            children: [
                                {
                                    tag: 'summary',
                                    text: 'double weakness:',
                                },
                                {
                                    tag: 'ul',
                                    id: 'double',
                                },
                            ],
                        },
                        {
                            tag: 'details',
                            children: [
                                {
                                    tag: 'summary',
                                    text: 'super effective:',
                                },
                                {
                                    tag: 'ul',
                                    id: 'super',
                                },
                            ],
                        },
                        {
                            tag: 'details',
                            children: [
                                {
                                    tag: 'summary',
                                    text: 'not very effective:',
                                },
                                {
                                    tag: 'ul',
                                    id: 'not',
                                },
                            ],
                        },
                        {
                            tag: 'details',
                            children: [
                                {
                                    tag: 'summary',
                                    text: 'immune:',
                                },
                                {
                                    tag: 'ul',
                                    id: 'immune',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
];

function genTypeButtons(): edomTemplate[] {
    let bttns: edomTemplate[] = [];

    Object.keys(types).forEach((typ: string) => {
        bttns.push({
            tag: 'button',
            text: typ,
            classes: ['smolBttn'],
            handler: [
                {
                    type: 'click',
                    id: 'click',
                    body: (self: edomElement) => {
                        typeButtonsState(self);
                    },
                },
            ],
        });
    });

    return bttns;
}

function typeButtonsState(self: edomElement) {
    const isActive: boolean = self.getValue('state') || false;
    self.setValue('state', !isActive);

    if (isActive) {
        self.removeStyle('active');
    } else {
        self.applyStyle('active');
    }

    refreshConters();
}
