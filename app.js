const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');

        const increment = target / 40000;

        const count = +counter.innerText;

        const formattedCount = Math.ceil(count + increment).toLocaleString();

        if (count < target) {
            counter.innerText = formattedCount;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target.toLocaleString();
        }
    }

    updateCounter();

})