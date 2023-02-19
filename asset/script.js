const tween = KUTE.fromTo(
    '#blob1',
    { path: '#blob1' },
    { path: '#blob2' },
    { repeat: 999, yoyo: true, duration: 2000 }

)

tween.start()

