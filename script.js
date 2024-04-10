document.addEventListener('DOMContentLoaded', () => {
    const fact = document.getElementById('fact');
    const cat = document.getElementById('cat');
    const dog = document.getElementById('dog');
    const parrot = document.getElementById('parrot');
    const animalInput = document.getElementById('animalInput');
    const inputFact = document.getElementById('inputFact');

    cat.addEventListener('mouseover', () => {
        fact.textContent = "Cats can make over 100 vocal sounds.";
    });

    dog.addEventListener('mouseover', () => {
        fact.textContent = "Dogs can smell thousands of times better than humans.";
    });

    parrot.addEventListener('mouseover', () => {
        fact.textContent = "Parrots are among the most intelligent bird species.";
    });

    animalInput.addEventListener('change', (e) => {
        const animal = e.target.value.toLowerCase();
        switch (animal) {
            case 'cat':
                inputFact.textContent = "Did you know? Cats can jump up to six times their length!";
                break;
            case 'dog':
                inputFact.textContent = "Fun fact: Dogs have about 1,700 taste buds.";
                break;
            case 'parrot':
                inputFact.textContent = "Interesting! Parrots can live for over 50 years.";
                break;
            default:
                inputFact.textContent = "Sorry, we don't have a fun fact for that animal. Try another!";
        }
    });

    const catGif = document.querySelector('#catGif'); // Targeting the cat gif
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', function(e) {
        // Make the cat gif visible as soon as the mouse moves
        catGif.style.display = 'block';
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    setInterval(function() {
        // Ensure catGif is defined to avoid errors
        if (!catGif) return;

        let catX = catGif.offsetLeft + catGif.offsetWidth / 2;
        let catY = catGif.offsetTop + catGif.offsetHeight / 2;

        let distanceX = mouseX - catX;
        let distanceY = mouseY - catY;

        // Dynamically adjust speed and distanceOffset for a fun interaction
        let speed = 0.05; // Speed of movement
        let distanceOffset = 100; // Distance from cursor when stopping

        // Increase distanceOffset when the cursor is close to simulate the cat stopping further away
        if (Math.sqrt(distanceX * distanceX + distanceY * distanceY) < 200) {
            distanceOffset = 200;
        }

        let adjustedDistanceX = distanceX - distanceOffset * Math.sign(distanceX);
        let adjustedDistanceY = distanceY - distanceOffset * Math.sign(distanceY);

        catGif.style.left = catGif.offsetLeft + adjustedDistanceX * speed + 'px';
        catGif.style.top = catGif.offsetTop + adjustedDistanceY * speed + 'px';
    }, 50);
});
