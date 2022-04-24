enum Contexts {
    main,
    swipSwap,
    endScreen,
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
];
