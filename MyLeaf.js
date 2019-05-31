/**
 * MyLeaf
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLeaf extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
        // Green
        this.green = new CGFappearance(this.scene);
        this.green.setAmbient(120/255, 179/255, 120/255, 1.0);
        this.green.setDiffuse(120/255, 179/255, 120/255, 1.0);
        this.green.setSpecular(0.5, 0.8, 0.5, 1.0);
				this.green.setShininess(10.0);
				this.green.loadTexture('images/leaves.jpg');
				this.green.setTextureWrap('REPEAT', 'REPEAT');
				

		//Initialize scene objects
		this.diamond = new MyDiamond(this.scene);
	}
				
  updateBuffers() { 

	}

	enableNormalViz() {
		this.diamond.enableNormalViz();
}
disableNormalViz() {
		this.diamond.disableNormalViz();
}
	
	display() {
		this.scene.pushMatrix();
        this.green.apply();
        this.scene.scale(6, 6, 6);
		this.diamond.display();
		this.scene.popMatrix();
	}
}

