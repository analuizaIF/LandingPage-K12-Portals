function switchTheme() {
    const body = document.body;
    const images = document.querySelectorAll('.invert-element');

    if (body.classList.contains('k12-theme')) {
        // Mudar para o tema Portals
        body.classList.remove('k12-theme');
        body.classList.add('portals-theme');

        images[0].src ='assets/images/portals/banner/portals-capa.jpg';
        images[1].src = 'assets/images/portals/gallery/criatura-sentada.jpg';
        images[2].src = 'assets/images/portals/gallery/criatura.jpg';
        images[3].src = 'assets/images/portals/gallery/fairy.jpg';
        images[4].src = 'assets/images/portals/gallery/posse-fada.jpg';
        images[5].src = 'assets/images/portals/banner/portals-perfil.jpg';
        images[5].src = 'assets/images/k12/banner/portals-perfil.jpg';

    } else {
        // Mudar para o tema K-12
        body.classList.remove('portals-theme');
        body.classList.add('k12-theme');

        images[0].src = 'assets/images/k12/banner/k12-sem-fundo.png';
        images[1].src = 'assets/images/k12/banner/k12-sem-fundo.png';
        images[2].src = 'assets/images/crybaby/banner/k12-sem-fundo.png';
        images[3].src = 'assets/images/crybaby/banner/k12-sem-fundo.png';
        images[4].src = 'assets/images/crybaby/banner/k12-sem-fundo.png';
        images[5].src = 'assets/images/k12/banner/k12-sem-fundo.png';
        images[6].src = 'assets/images/footer/heart-k12.png'; /*MUDAR DEPOIIS - FOOTERRR*/

    }
}

document.getElementById('switchTheme').addEventListener('click', switchTheme);
