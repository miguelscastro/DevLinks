function toggleMode () {
    const html = document.documentElement;
    html.classList.toggle('light-mode');


    const img = document.querySelector('#profile img');
    if(html.classList.contains('light-mode')) {
        img.setAttribute('src', 'assets/avatar-light-mode.png')
        img.setAttribute('alt', 'foto de perfil (light-mode')
    } else {
        img.setAttribute('src', 'assets/avatar-night-mode.png');
        img.setAttribute('alt', 'foto de perfil (night-mode')
    }
}