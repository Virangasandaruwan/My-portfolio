window.onload = () => {
    const robot = document.querySelector('.robot');
    const head = document.getElementById('head');


    setTimeout(() => {
        robot.classList.add('assembled');
    }, 500);


    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;


        const moveX = (clientX - centerX) / 25;
        const moveY = (clientY - centerY) / 25;


        head.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX}deg)`;
    });
};