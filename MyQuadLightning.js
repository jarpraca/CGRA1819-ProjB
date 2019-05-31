/**
 * MyQuadLightning
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyQuadLightning extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {	

		// Feather Material
		this.lightningMaterial = new CGFappearance(this.scene);
		this.lightningMaterial.setAmbient(1, 1, 1, 1);
		this.lightningMaterial.setDiffuse(1, 1, 1, 1);
		this.lightningMaterial.setSpecular(1, 1, 1, 1);
		this.lightningMaterial.setShininess(10.0);
		
		//Initialize scene objects
		this.quad = new MyQuad(this.scene);
	}
				
    updateBuffers() { 

	}

	enableNormalViz() {
        this.cube.enableNormalViz();
        this.pyramid.enableNormalViz();
        this.prism.enableNormalViz();
    }
    disableNormalViz() {
        this.cube.disableNormalViz();
        this.pyramid.disableNormalViz();
        this.prism.disableNormalViz();
    }
	
	display() {		

		
		// Quad
		this.scene.pushMatrix();
        this.scene.scale(0.1, 1, 0);
		this.scene.translate(0.5, 0.5, 0);
		this.lightningMaterial.apply();
		this.quad.display();
		this.scene.popMatrix();
	}
}

