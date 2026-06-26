enum Direction {
    Up,
    Down,
    LEFT,
    Right,
}

function move(direction:Direction){
    console.log(`Moving ${Direction[direction].toLowerCase()}`)
}

move(Direction.LEFT)