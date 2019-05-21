/**
 * MyTerrain
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTerrain extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {		
		//Initialize materials
/*
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
*/
		// Initialize scene objects
        this.plane = new Plane(this.scene, 32);
        
        // Textures
        this.texture = new CGFtexture(this.scene, "images/terrain.jpg");
		this.scene.appearance.setTexture(this.texture);
		this.scene.appearance.setTextureWrap('REPEAT', 'REPEAT');

        this.texture2 = new CGFtexture(this.scene, "images/heightmap2.jpg");
        
        // Shaders
        this.shader = new CGFshader(this.scene.gl, "shaders/terrain.vert", "shaders/terrain.frag");

		this.shader.setUniformsValues({ uSampler2: 1 });
		this.shader.setUniformsValues({ normScale: this.scene.scaleFactor });
	}
				
  	updateBuffers() { 

	}

	enableNormalViz() {
        this.plane.enableNormalViz();
    }
    disableNormalViz() {
        this.plane.disableNormalViz();
    }
        
    display() {
        this.texture2.bind(1);
		this.scene.appearance.apply();
		this.scene.setActiveShader(this.shader);
		
        // Plane
        this.scene.pushMatrix();
        this.scene.rotate(-0.5*Math.PI, 1, 0, 0);
		this.scene.scale(60, 60, 1);
        this.plane.display();
        this.scene.popMatrix();
    }
}

