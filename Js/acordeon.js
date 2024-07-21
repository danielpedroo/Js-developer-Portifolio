const acordeonBtntrigger = document.querySelectorAll('.acordeon .btnTrigger');

acordeonBtntrigger.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement;
        const isOpenAcordeon = acordeon.classList.contains('open');

        if (isOpenAcordeon) {
            acordeon.classList.remove('open');
        } else {
            acordeon.classList.add('open');
        }

    });
});