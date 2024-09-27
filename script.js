
if (!('ontouchstart' in window)) {
    document.addEventListener('mousemove', function(e) {
        var heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = e.pageX + 'px';
        heart.style.top = e.pageY + 'px';
        document.body.appendChild(heart);
        setTimeout(function() {
            heart.parentElement.removeChild(heart);
        }, 2000);
    });
}