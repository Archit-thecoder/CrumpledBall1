class Paper{
    constructor(){
        var option = {
            restitution:0.8,
            friction:0.3,
            density:1.2
        }
        this.body = Bodies.circle(50,380,20,option)
        World.add(world,this.body)
    }
    display(){
        ellipseMode(RADIUS)
        fill("magenta")
        ellipse(this.body.position.x,this.body.position.y,20,20)


    }
}