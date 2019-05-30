/**
 * MyTerrain
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTerrain extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
		this.savedAppearance = scene.appearance;
	}
	initBuffers() {		

		// Initialize scene objects
        this.plane = new Plane(this.scene, 32);
        
        // Textures
        this.texture = new CGFtexture(this.scene, "images/terrain.jpg");
		this.scene.appearance.setTexture(this.texture);
		this.scene.appearance.setTextureWrap('REPEAT', 'REPEAT');

		this.texture2 = new CGFtexture(this.scene, "images/heightmap.jpg");
		this.texture3 = new CGFtexture(this.scene, "images/altimetry.png");
        
        // Shaders
        this.shader = new CGFshader(this.scene.gl, "shaders/terrain.vert", "shaders/terrain.frag");

		this.shader.setUniformsValues({ uSampler2: 1 });
		this.shader.setUniformsValues({ uSampler3: 2 });
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
		this.scene.pushMatrix();
		this.texture2.bind(1);
		this.texture3.bind(2);
		this.scene.appearance.apply();
		this.scene.setActiveShader(this.shader);
		
        // Plane
		
		this.scene.pushMatrix();
        this.scene.rotate(-0.5*Math.PI, 1, 0, 0);
		this.scene.scale(60, 60, 1);
        this.plane.display();
		this.scene.popMatrix();
		this.scene.popMatrix();
		
		this.scene.setActiveShader(this.scene.defaultShader);
		this.scene.appearance = this.savedAppearance;
    }
}

