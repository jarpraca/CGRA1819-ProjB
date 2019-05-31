/**
 * MyCampfire
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyNest extends CGFobject {
	constructor(scene, x, z){
        super(scene);
        this.x=x;
        this.z=z;
		this.initBuffers();
	}
	initBuffers() {
		//Initialize scene objects
        this.cylinder = new MyCylinder(this.scene, 10, 1);
        
        // Texture
        this.trunkTexture = new CGFappearance(this.scene);
        this.trunkTexture.setAmbient(1, 1, 1, 1);
        this.trunkTexture.setDiffuse(1, 1, 1, 1);
        this.trunkTexture.setSpecular(0, 0, 0, 1);
        this.trunkTexture.setShininess(10.0);
        this.trunkTexture.loadTexture('images/trunk.jpg');
        this.trunkTexture.setTextureWrap('REPEAT', 'REPEAT');
	}
				
  updateBuffers() { 

	}

	display() {
            
        this.scene.pushMatrix();

        this.scene.translate(this.x,0, this.z);
        
        this.scene.scale(5,5,5);

        this.scene.pushMatrix();
        this.trunkTexture.apply();
        this.scene.translate(0.2,0.2,0);
        this.scene.rotate(-2*Math.PI/3, 0, 0, 1);
        this.scene.scale(0.2, -1.5, 0.2);
		this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/4, 0, 1, 0);
        this.scene.translate(0.2,0.2,0);
        this.scene.rotate(-2*Math.PI/3, 0, 0, 1);
        this.scene.scale(0.2, -1.5, 0.2);
		this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(2*Math.PI/4, 0, 1, 0);
        this.scene.translate(0.2,0.2,0);
        this.scene.rotate(-2*Math.PI/3, 0, 0, 1);
        this.scene.scale(0.2, -1.5, 0.2);
		this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(3*Math.PI/4, 0, 1, 0);
        this.scene.translate(0.2,0.2,0);
        this.scene.rotate(-2*Math.PI/3, 0, 0, 1);
        this.scene.scale(0.2, -1.5, 0.2);
		this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(4*Math.PI/4, 0, 1, 0);
        this.scene.translate(0.2,0.2,0);
        this.scene.rotate(-2*Math.PI/3, 0, 0, 1);
        this.scene.scale(0.2, -1.5, 0.2);
		this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(5*Math.PI/4, 0, 1, 0);
        this.scene.translate(0.2,0.2,0);
        this.scene.rotate(-2*Math.PI/3, 0, 0, 1);
        this.scene.scale(0.2,- 1.5, 0.2);
		this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(6*Math.PI/4, 0, 1, 0);
        this.scene.translate(0.2,0.2,0);
        this.scene.rotate(-2*Math.PI/3, 0, 0, 1);
        this.scene.scale(0.2, -1.5, 0.2);
		this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(7*Math.PI/4, 0, 1, 0);
        this.scene.translate(0.2,0.2,0);
        this.scene.rotate(-2*Math.PI/3, 0, 0, 1);
        this.scene.scale(0.2,- 1.5, 0.2);
		this.cylinder.display();
        this.scene.popMatrix();

        
        this.scene.pushMatrix();
        

        this.scene.rotate(Math.PI/8, 0, 1, 0);
        

        this.scene.pushMatrix();
        this.trunkTexture.apply();
        this.scene.translate(0.2,0.2,0);
        this.scene.rotate(-2*Math.PI/3, 0, 0, 1);
        this.scene.scale(0.2, -1.5, 0.2);
		this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/4, 0, 1, 0);
        this.scene.translate(0.2,0.2,0);
        this.scene.rotate(-2*Math.PI/3, 0, 0, 1);
        this.scene.scale(0.2, -1.5, 0.2);
		this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(2*Math.PI/4, 0, 1, 0);
        this.scene.translate(0.2,0.2,0);
        this.scene.rotate(-2*Math.PI/3, 0, 0, 1);
        this.scene.scale(0.2, -1.5, 0.2);
		this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(3*Math.PI/4, 0, 1, 0);
        this.scene.translate(0.2,0.2,0);
        this.scene.rotate(-2*Math.PI/3, 0, 0, 1);
        this.scene.scale(0.2, -1.5, 0.2);
		this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(4*Math.PI/4, 0, 1, 0);
        this.scene.translate(0.2,0.2,0);
        this.scene.rotate(-2*Math.PI/3, 0, 0, 1);
        this.scene.scale(0.2, -1.5, 0.2);
		this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(5*Math.PI/4, 0, 1, 0);
        this.scene.translate(0.2,0.2,0);
        this.scene.rotate(-2*Math.PI/3, 0, 0, 1);
        this.scene.scale(0.2,- 1.5, 0.2);
		this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(6*Math.PI/4, 0, 1, 0);
        this.scene.translate(0.2,0.2,0);
        this.scene.rotate(-2*Math.PI/3, 0, 0, 1);
        this.scene.scale(0.2, -1.5, 0.2);
		this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(7*Math.PI/4, 0, 1, 0);
        this.scene.translate(0.2,0.2,0);
        this.scene.rotate(-2*Math.PI/3, 0, 0, 1);
        this.scene.scale(0.2,- 1.5, 0.2);
		this.cylinder.display();
        this.scene.popMatrix();


        this.scene.popMatrix();
        this.scene.popMatrix();
	}
}
