var params = {
        container: document.getElementById('svglogo'),
        renderer: 'html',
        loop: true,
        autoplay: true,
        animationData: 'data.json'
    };

    var anim;

    anim = lottie.loadAnimation(params);