
function movementDirection(direction, keycode, startposition, character, shouldIncrement){
    window.addEventListener('keydown', function(e){
        if(e.key === keycode){
            shouldIncrement ? character.style[direction] = startposition++ + "px" : character.style[direction] = startposition-- + "px"
        }
    })
}

window.onload = function(){
    var c = document.getElementById('character');
    movementDirection('left', 'ArrowRight', 8, c, true)
    movementDirection('left', 'ArrowLeft', null, c, false)
    movementDirection('top', 'ArrowDown', 8, c, true)
    movementDirection('top', 'ArrowUp', null, c, false)
}

