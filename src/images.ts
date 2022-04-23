function loadImages(ID1: number, ID2: number) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + ID1.toString())
        .then((response) => response.json())
        .then((data) => {
            (edom.findById('img1') as edomImageElement).setSrc(
                currentType === ssType.shiny
                    ? data.sprites['other']['home']['front_shiny']
                    : data.sprites['other']['home']['front_default']
            );
            edom.findById('h11')?.setText(data.name);
            (edom.findById('img1') as edomImageElement).setValue('ID', ID1);
        });

    fetch('https://pokeapi.co/api/v2/pokemon/' + ID2.toString())
        .then((response) => response.json())
        .then((data) => {
            (edom.findById('img2') as edomImageElement).setSrc(
                currentType === ssType.shiny
                    ? data.sprites['other']['home']['front_shiny']
                    : data.sprites['other']['home']['front_default']
            );
            edom.findById('h12')?.setText(data.name);
            (edom.findById('img2') as edomImageElement).setValue('ID', ID2);
        });
}
