class SlingShot{
    constructor(bodyA, pointB){
        var option = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10,
        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.slingShot=Matter.Constraint.create(option);
        World.add(world, this.slingShot);
    }
        display(){
        if(this.slingShot.bodyA){
        strokeWeight(4);
        stroke(48,22,8);
        line(this.bodyA.position.x - 20, this.bodyA.position.y, this.pointB.x, this.pointB.y);
        line(this.bodyA.position.x - 20, this.bodyA.position.y, this.pointB.x + 50, this.pointB.y);
        }
        }
    
        fly(){
        this.slingShot.bodyA=null; 
        }
    }