function clock() {
    function getTimeFromSeconds(seconds) {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pr-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const clock = document.querySelector('.relogio');
    let seconds = 0;
    let timer;

    function startWatch() {
        timer = setInterval(function () {
            seconds++
            clock.innerHTML = getTimeFromSeconds(seconds);
        }, 1000);
    }

    document.addEventListener('click', function (e) {
        const el = e.target
        if (el.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            relogio.classList.remove('pausado');
            seconds = 0
        }

        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            startWatch();
        }

        if (el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
    });
}
clock();