/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeBranch extends CGFobject {
	constructor(scene,x,z) {
                super(scene);
                this.x=x;
                this.z=z;
		this.initBuffers();
        }
        
	initBuffers() {
		//Initialize scene objects
                this.branch = new MyCylinder(this.scene,8,1);
                this.caught = false;
                this.dropped = false;
                this.rotate = Math.PI*Math.random();
                
                // Feather Material
		this.branchMaterial = new CGFappearance(this.scene);
		this.branchMaterial.setAmbient(1, 1, 1, 1);
		this.branchMaterial.setDiffuse(0.9, 0.8, 0.8, 1);
		this.branchMaterial.setSpecular(0.2, 0.2, 0.2, 1);
		this.branchMaterial.setShininess(10.0);
		this.branchMaterial.loadTexture('images/branch.jpeg');
		this.branchMaterial.setTextureWrap('REPEAT', 'REPEAT');
        }
        updateBuffers() { 

        }

	display() {
        
                this.scene.pushMatrix();
                if(!this.caught){
                        this.scene.translate(this.x,0,this.z);
                        this.scene.rotate(this.rotate,0,1,0);
                }
                this.scene.rotate(Math.PI/2,1,0,0);
                this.scene.scale(0.3,5,0.3);
                this.branchMaterial.apply();
                this.branch.display();
                this.scene.popMatrix();
	}
}

