/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyHouse extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {		
		//Initialize materials

		// Roof Material
		this.roofMaterial = new CGFappearance(this.scene);
		this.roofMaterial.setAmbient(1, 1, 1, 1);
		this.roofMaterial.setDiffuse(0.8, 0.7, 0.7, 1);
		this.roofMaterial.setSpecular(0.1, 0.1, 0.1, 1);
		this.roofMaterial.setShininess(10.0);
		this.roofMaterial.loadTexture('images/roof.jpg');
		this.roofMaterial.setTextureWrap('REPEAT', 'REPEAT');

		// Column Material
		this.columnMaterial = new CGFappearance(this.scene);
		this.columnMaterial.setAmbient(1, 1, 1, 1);
		this.columnMaterial.setDiffuse(1, 1, 1, 1);
		this.columnMaterial.setSpecular(1, 1, 1, 1);
		this.columnMaterial.setShininess(10.0);
		this.columnMaterial.loadTexture('images/column.jpg');
		this.columnMaterial.setTextureWrap('REPEAT', 'REPEAT');

		// Wall Material
		this.wallMaterial = new CGFappearance(this.scene);
		this.wallMaterial.setAmbient(1, 1, 1, 1);
		this.wallMaterial.setDiffuse(0.9, 0.8, 0.8, 1);
		this.wallMaterial.setSpecular(0.2, 0.2, 0.2, 1);
		this.wallMaterial.setShininess(10.0);
		this.wallMaterial.loadTexture('images/house_side.png');
		this.wallMaterial.setTextureWrap('REPEAT', 'REPEAT');

		// House Front Material
		this.frontMaterial = new CGFappearance(this.scene);
		this.frontMaterial.setAmbient(1, 1, 1, 1);
		this.frontMaterial.setDiffuse(0.9, 0.8, 0.8, 1);
		this.frontMaterial.setSpecular(0.2, 0.2, 0.2, 1);
		this.frontMaterial.setShininess(10.0);
		this.frontMaterial.loadTexture('images/house_front.jpg');
		this.frontMaterial.setTextureWrap('REPEAT', 'REPEAT');

		//Initialize scene objects
    	this.cube = new MyUnitCubeQuad(this.scene, this.wallMaterial, this.wallMaterial, this.wallMaterial);
    	this.pyramid = new MyPyramid(this.scene, 4, 1);
		this.prism = new MyPrism(this.scene, 6, 1);
		this.front = new MyQuad(this.scene);
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
		// Cube
		this.scene.pushMatrix();
		this.scene.translate(0, 0.5, 0);
		this.wallMaterial.apply();
		this.cube.display();
		this.scene.popMatrix();

		// Pyramid
		this.scene.pushMatrix();
		this.scene.translate(0, 1, 0);
		this.scene.rotate(Math.PI/4, 0, 1, 0);
		this.scene.scale(1.2, 1, 1.2);
		this.roofMaterial.apply();
		this.pyramid.display();
		this.scene.popMatrix();

		// Prism 1
		this.scene.pushMatrix();
		this.scene.translate(0.7, 0, 0.7);
		this.scene.scale(0.1, 1, 0.1);
		this.columnMaterial.apply();
		this.prism.display();
		this.scene.popMatrix();

		// Prism 2
		this.scene.pushMatrix();
		this.scene.translate(-0.7, 0, 0.7);
		this.scene.scale(0.1, 1, 0.1);
		this.columnMaterial.apply();
		this.prism.display();
		this.scene.popMatrix();

		// Prism 3
		this.scene.pushMatrix();
		this.scene.translate(0.7, 0, -0.7);
		this.scene.scale(0.1, 1, 0.1);
		this.columnMaterial.apply();
		this.prism.display();
		this.scene.popMatrix();
		
		// Prism 4
		this.scene.pushMatrix();
		this.scene.translate(-0.7, 0, -0.7);
		this.scene.scale(0.1, 1, 0.1);
		this.columnMaterial.apply();
		this.prism.display();
		this.scene.popMatrix();
		
		// Quad
		this.scene.pushMatrix();
		this.scene.rotate(Math.PI/2, 0, 1, 0);
		this.scene.translate(0, 0.5, 0.501);
		this.frontMaterial.apply();
		this.front.display();
		this.scene.popMatrix();
	}
}

