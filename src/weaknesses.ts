enum types {
    normal = 'normal',
    fire = 'fire',
    water = 'water',
    grass = 'grass',
    electric = 'electric',
    ice = 'ice',
    fighting = 'fighting',
    poison = 'poison',
    ground = 'ground',
    flying = 'flying',
    psychic = 'psychic',
    bug = 'bug',
    rock = 'rock',
    ghost = 'ghost',
    dragon = 'dragon',
    dark = 'dark',
    steel = 'steel',
    fairy = 'fairy',
}

const chart: { [key: string]: number[] } = {
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
    const oppTypes: number[][] = [];

    edom.allElements.forEach((elm: edomElement) => {
        if (
            elm.classes.includes('smolBttn') &&
            elm.getValue('state') === true
        ) {
            oppTypes.push(chart[elm.text]);
        }
    });

    const effectiveness: number[] = Array.from(Array(18)).map(() => {
        return 0;
    });

    oppTypes.forEach((type: number[]) => {
        for (let i = 0; i < type.length; i++) {
            effectiveness[i] += type[i];
        }
    });

    let result: {
        [key: string]: string[];
    } = {
        double: [], // opponent has a double weakness
        super: [], // super effective
        not: [], // not very effective
        immune: [], // immune
    };

    const detailsHeadlines: { [key: string]: string } = {
        double: 'double weakness',
        super: 'super effective',
        not: 'not very effective',
        immune: 'immune',
    };

    console.log(effectiveness);

    effectiveness.forEach((value: number, index: number) => {
        if (value > 1) {
            result.double.push(Object.keys(chart)[index]);
        } else if (value > 0) {
            result.super.push(Object.keys(chart)[index]);
        } else if (value < -1) {
            result.immune.push(Object.keys(chart)[index]);
        } else if (value < 0) {
            result.not.push(Object.keys(chart)[index]);
        }
    });

    Object.keys(result).forEach((key: string) => {
        edom.findById(key)?.clear();
        edom.findById(key)?.parent?.children[0].setText(
            detailsHeadlines[key] + ' (' + result[key].length + '):'
        );

        result[key].forEach((pokeType: string) => {
            edom.fromTemplate(
                [
                    {
                        tag: 'li',
                        text: '- ' + pokeType,
                    },
                ],
                edom.findById(key)
            );
        });
    });
}
