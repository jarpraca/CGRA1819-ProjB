/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyWing extends CGFobject {
	constructor(scene, velocity, speedFactor) {
                super(scene);
                this.velocity = velocity;
                this.speedFactor = speedFactor;
		this.initBuffers();
	}
	initBuffers() {

                this.t=0;
                
                // Feather Material
		this.featherMaterial = new CGFappearance(this.scene);
		this.featherMaterial.setAmbient(0.7, 0.7, 0.7, 1);
		this.featherMaterial.setDiffuse(0.3, 0.3, 0.3, 1);
		this.featherMaterial.setSpecular(0.4, 0.4, 0.4, 1);
		this.featherMaterial.setShininess(10.0);
		this.featherMaterial.loadTexture('images/feathers3.jpg');
		this.featherMaterial.setTextureWrap('REPEAT', 'REPEAT');
                

		//Initialize scene objects
                this.cube = new MyUnitCubeQuad(this.scene, this.featherMaterial, this.featherMaterial, this.featherMaterial);
                this.triangle = new MyTriangle(this.scene);
                this.quad = new MyQuad(this.scene);
                this.prism = new MyPrism(this.scene, 4, 2);
                this.pyram = new MyPyramid(this.scene, 4, 2);
        
        }
        updateBuffers() { 

                this.t+=0.05;
                this.display();

        }
       
	display(t) {

                

                this.scene.pushMatrix();
                this.featherMaterial.apply();
                this.scene.translate(0,0,5);
                this.scene.scale(8,5,12);
                this.scene.rotate(-Math.PI/2, 1,0,0);
                this.quad.display();
                this.scene.popMatrix();


                this.scene.pushMatrix();
		this.featherMaterial.apply();
                this.scene.translate(0,0,11);
                this.scene.rotate((Math.PI/6)*(Math.sin(t)*(this.velocity/10)*this.speedFactor*0.5), 1,0,0);
                this.scene.rotate((Math.PI/6), 1,0,0);
                this.scene.translate(0,0,5);
                this.scene.scale(-4,1,5);
                this.scene.rotate(Math.PI/2, 1,0,0);
                this.triangle.display();
                this.scene.popMatrix();
        }        
}

