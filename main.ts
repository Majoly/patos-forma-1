controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . 7 7 7 7 7 9 9 9 9 7 7 7 . . 
        . 7 7 7 7 7 7 9 9 9 9 7 7 7 7 . 
        . 7 7 7 7 7 7 9 9 9 9 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(2)
    if (info.score() == 70) {
    	
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let Tiburón: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
game.setDialogCursor(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `)
game.splash("Patos forma 1", "Autor:Mario Banegas I Nacimiento:2010")
game.showLongText("En este videojuego habrán tiburones tienes que matarlos con el botón A  si te toca el tiburón 3 vezes mueres ", DialogLayout.Bottom)
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    Tiburón = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . c c f f f . . . . . . . . . . . 
        . . . . . . . . . . f f f f f f f f f c b b b b f . . . . . . . . . . . 
        . . . . . . . . . f b b b b b b b b b f f f b f . . . . . . . . . . . . 
        . . . . . . . . . f b b 1 1 1 b f f b b b b f f . . . . . . . . . . . . 
        . . . . . . . . . f b 1 1 1 1 1 f f b b b b b c f f . . . . . . . . . . 
        . . . . . . . . . f 1 c c c c 1 1 b b c b c b c c c f . . . . . . . . . 
        . . . . . . . . . . f c 1 c 1 c 1 b b b c b c b c c c f . . . c c c c c 
        . . . . . . . . . . . . c 3 3 3 1 b b b c b c b c c c c f c c d d b b c 
        . . . . . . . . . . . c 3 3 3 c 1 b b b b b b b c c c c c b d d b c c . 
        . . . . . . . . . . . c 3 3 1 c 1 1 b b b b b c c c c c c c b b c c . . 
        . . . . . . . . . . c c 1 3 c 1 1 1 b b b b c c c c c c f f b c c f . . 
        . . . . . . . . . . c 1 1 1 1 1 1 c b b b c c c c c b b c . f c c f . . 
        . . . . . . . . . . . c c 1 1 1 1 c b b b f d d d d d c . . f b b c f . 
        . . . . . . . . . . . . . c c c f f b d b b f d d d c . . . . f b b f . 
        . . . . . . . . . . . . . . . . . . f b d b b f c c . . . . . . f b b f 
        . . . . . . . . . . . . . . . . . . . f f f f f . . . . . . . . . f f f 
        `, SpriteKind.Enemy)
    Tiburón.setPosition(randint(160, 10), randint(120, 10))
})
