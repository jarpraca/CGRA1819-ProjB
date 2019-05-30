/**
 * MyBranch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBranch extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
        // Wood
        this.wood = new CGFappearance(this.scene);
        this.wood.setAmbient(86/2550, 47/2550, 14/2550, 1.0);
        this.wood.setDiffuse(86/255, 47/255, 14/255, 1.0);
        this.wood.setSpecular(0, 0, 0, 1.0);
        this.wood.setShininess(10.0);

		//Initialize scene objects
		this.cylinder = new MyCylinder(this.scene, 4);
	}
				
  updateBuffers() { 

	}

	enableNormalViz() {
		this.cylinder.enableNormalViz();
}
disableNormalViz() {
		this.cylinder.disableNormalViz();
}
	
	display() {
		this.scene.pushMatrix();
        this.wood.apply();
        this.scene.scale(0.5, 1, 0.5);
		this.cylinder.display();
		this.scene.popMatrix();
	}
}

