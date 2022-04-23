enum Contexts {
    main,
    swipSwap,
}

const contexts: edomTemplate[][] = [
    // main
    [
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
                        loadImages(1, 2);
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
            ],
        },
        {
            tag: 'div',
            classes: ['container'],
            children: [
                {
                    tag: 'h1',
                    text: 'Bulbasaur',
                },
                {
                    tag: 'img',
                    id: 'img1',
                    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png',
                },
                {
                    tag: 'h1',
                    text: 'Evesaure',
                },
                {
                    tag: 'img',
                    id: 'img2',
                    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/132.png',
                },
            ],
        },
    ],
];
