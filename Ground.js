class Ground {
    constructor() {

        var ground_S = {
            'isStatic': true
        }

        this.body = Bodies.rectangle(200, 380, 400, 18,ground_S);
        World.add(world, this.body);
    }
    display() {
        rectMode(CENTER);
        rect(200,380,400,18);
    }
}