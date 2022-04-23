function loadImages(img1: number, img2: number) {
    (edom.findById('img1') as edomImageElement).setSrc(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${img1}.png`
    );
    (edom.findById('img2') as edomImageElement).setSrc(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${img2}.png`
    );
}
