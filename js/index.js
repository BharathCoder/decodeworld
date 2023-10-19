const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.expicon');
const links = navbar.querySelector('.links');
const animate = document.querySelector('h1.animate');
const episodeElementsContainer = document.getElementById('episodes');

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('hclass');
    navbar.classList.toggle('col');
    links.classList.toggle('viz');
    links.classList.toggle('col');
});

Array.from(links.children).forEach(link=>{
    link.addEventListener('click', ()=>{
        setTimeout(() => {
            navbar.classList.toggle('hclass');
            navbar.classList.toggle('col');
            links.classList.toggle('viz');
            links.classList.toggle('col');
        }, 200);
    });
});

const episodes = [
    {name: 'What is Matrix? Complete Analysis', link: '#'},
    {name: 'True Masculinity', link: '#'},
    {name: 'Complete Self Improvement Guide', link: '#'},
    {name: 'Andrew Tate, an analysis', link: '#'},
    {name: 'Learn these if you want to become a REAL MAN', link: '#'},
];

episodes.forEach(episode=>{
    let episodeElement = document.createElement('div');
    episodeElement.className = 'episode'
    const innerContent = `<div class="title">
    <h3>${episode.name}</h3>
    <a class="play" href="${episode.link}">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="black" class="bi bi-play-fill" viewBox="0 0 16 16">
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
          </svg>
        Play on Spotify
    </a>
</div>`
    episodeElement.innerHTML = innerContent
    episodeElementsContainer.append(episodeElement)
});