
    const rotated = document.getElementById('phreak');
    let rotation = 0;
    const angle = 90;

    function rotateImage(){
        rotation = (rotation + angle) % 360;
        rotated.style.transform = `rotate(${rotation}deg)`;
    }

    function toggleImage(){
        const image1 = document.getElementById("jax");
        const image2 = document.getElementById("jeff");

        image1.classList.toggle('hidden');
        image2.classList.toggle('hidden');
    }