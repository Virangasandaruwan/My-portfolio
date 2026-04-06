window.onload = () => {
    const robot = document.querySelector('.robot');
    const head = document.getElementById('head');

    // 1. Assembly Animation එක trigger කිරීම
    setTimeout(() => {
        robot.classList.add('assembled');
    }, 500);

    // 2. Mouse Tracking
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Mouse එක තියෙන පැත්ත අනුව පොඩි rotate එකක් දීම
        const moveX = (clientX - centerX) / 25;
        const moveY = (clientY - centerY) / 25;

        // ඔළුවට පමණක් විශේෂයෙන් චලනයක් දීම
        head.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX}deg)`;
    });
};