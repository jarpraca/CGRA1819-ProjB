/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene, sideTexture, topTexture, bottomTexture) {
		super(scene);
		this.initBuffers();

		this.sideTexture = sideTexture;
		this.topTexture = topTexture;
		this.bottomTexture = bottomTexture;
	}
	initBuffers() {
		//Initialize scene objects
		this.quad = new MyQuad(this.scene);
	}
				
  updateBuffers() { 

	}

	enableNormalViz() {
		this.quad.enableNormalViz();
}
disableNormalViz() {
		this.quad.disableNormalViz();
}
	
	display() {
		this.scene.pushMatrix();
		this.scene.translate(0, 0, 0.5);

		this.scene.pushMatrix();
		this.sideTexture.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		this.quad.display();
		this.scene.popMatrix();
		
		this.scene.pushMatrix();
		this.scene.rotate(Math.PI/2, 0, 1, 0);
		this.scene.translate(0.5, 0, 0.5);
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(Math.PI, 0, 1, 0);
		this.scene.translate(0, 0, 1);
		this.quad.display();
		this.scene.popMatrix();
	 
		this.scene.pushMatrix();
		this.scene.rotate(-Math.PI/2, 0, 1, 0);
		this.scene.translate(-0.5, 0, 0.5);
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(-Math.PI/2, 1, 0, 0);
		this.scene.translate(0, 0.5, 0.5);
		this.topTexture.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(Math.PI/2, 1, 0, 0);
		this.scene.translate(0, -0.5, 0.5);
		this.bottomTexture.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		this.quad.display();
		this.scene.popMatrix();

		this.scene.popMatrix();
	}
}

