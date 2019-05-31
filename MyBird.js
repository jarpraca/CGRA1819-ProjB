/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBird extends CGFobject {
	constructor(scene,orientation, velocity, x,y,z) {
                super(scene);
                this.defaultOrientation=orientation;
                this.defaultVelocity=velocity;
                this.defaultX=x;
                this.defaultY=y;
                this.defaultZ=z;
                this.orientation=orientation;
                this.velocity=velocity;
                this.x=x;
                this.y=y;
                this.z=z;
		this.initBuffers();
	}
	initBuffers() {
                this.speedFactor = 1;
                this.scaleFactor = 1;
                this.t=0;
                this.carrying=false;

                // Feather Material
		this.featherMaterial = new CGFappearance(this.scene);
		this.featherMaterial.setAmbient(0, 0, 0, 1);
		this.featherMaterial.setDiffuse(0.6, 0.6, 0.6, 1);
		this.featherMaterial.setSpecular(0, 0, 0, 1);
		this.featherMaterial.setShininess(10.0);
		this.featherMaterial.loadTexture('images/feathers.jpg');
                this.featherMaterial.setTextureWrap('REPEAT', 'REPEAT');
                
                
                // Feather Material
		this.eyeMaterial = new CGFappearance(this.scene);
		this.eyeMaterial.setAmbient(1, 0.95, 0.7, 1);
		this.eyeMaterial.setDiffuse(0, 0, 0, 1);
		this.eyeMaterial.setSpecular(0, 0, 0, 1);
		this.eyeMaterial.setShininess(10.0);

		//Initialize scene objects
                this.cube = new MyUnitCubeQuad(this.scene, this.featherMaterial, this.featherMaterial, this.featherMaterial);
                this.triangle = new MyTriangle(this.scene);
                this.quad = new MyQuad(this.scene);
                this.prism = new MyPrism(this.scene, 4, 2);
                this.pyram = new MyPyramid(this.scene, 4, 2);
                this.wing = new MyWing(this.scene, this.velocity, this.speedFactor);
                
                this.branch1=new MyTreeBranch(this.scene,Math.random() * 25, Math.random() * 30);
                this.branch2=new MyTreeBranch(this.scene,Math.random() * 25 + 25, Math.random() * 30);
                this.branch3=new MyTreeBranch(this.scene,Math.random() * 25, Math.random() * (-30));
                this.branch4=new MyTreeBranch(this.scene,Math.random() * 25 + 25, Math.random() * (-30));
                
                this.nest = new MyNest(this.scene,-8,-18);
        }

        reset(){
                this.orientation=this.defaultOrientation;
                this.velocity=this.defaultVelocity;
                this.t=0;
                this.x=this.defaultX;
                this.y=this.defaultY;
                this.z=this.defaultZ;

        }
        turn(v){
                this.orientation+=v*this.speedFactor;

        }
        accelerate(v){
                if(this.velocity + v*this.speedFactor >=0)
                        this.velocity+=v*this.speedFactor;

        }
        descend(){
                if(!this.catchingBranch){
                        this.catchingBranch = true;
                        this.descending=true;
                        console.log("Ya ja vai");
                }

        }
        updateBuffers() { 
 
                this.t+=0.4;
                this.x += (-this.velocity * Math.cos(this.orientation))*(50/1000);
                this.z += (this.velocity * Math.sin(this.orientation))*(50/1000);
                if(this.catchingBranch == true){
                        if(this.y>2 && this.descending==true){
                                this.y-= this.defaultY*(50/1000);
                                console.log("Descendo");
                        }
                        if(this.y==2){
                                this.descending=false;
                                if(this.x>this.branch1.x-10 && this.x<this.branch1.x+10 && this.z>this.branch1.z-10 && this.z<this.branch1.z+10 && this.carrying == false){
                                        this.branch1.caught=true;
                                        this.carrying=true;

                                }

                                if(this.x>this.branch2.x-10 && this.x<this.branch2.x+10 && this.z>this.branch2.z-10 && this.z<this.branch2.z+10 && this.carrying == false){
                                        this.branch2.caught=true;
                                        this.carrying=true;

                                }

                                if(this.x>this.branch3.x-10 && this.x<this.branch3.x+10 && this.z>this.branch3.z-10 && this.z<this.branch3.z+10 && this.carrying == false){
                                        this.branch3.caught=true;
                                        this.carrying=true;

                                }

                                if(this.x>this.branch4.x-10 && this.x<this.branch4.x+10 && this.z>this.branch4.z-10 && this.z<this.branch4.z+10 && this.carrying == false){
                                        this.branch4.caught=true;
                                        this.carrying=true;

                                }
                                if(this.carrying == true && this.x>this.nest.x-10 && this.x<this.nest.x+10 && this.z>this.nest.z-10 && this.z<this.nest.z+10){
                                        if(this.branch1.caught){
                                                this.branch1.dropped=true;
                                                this.carrying = false;
                                        }
                                        if(this.branch2.caught){
                                                this.branch2.dropped=true;
                                                this.carrying = false;
                                        }
                                        if(this.branch3.caught){
                                                this.branch3.dropped=true;
                                                this.carrying = false;
                                        }
                                        if(this.branch4.caught){
                                                this.branch4.dropped=true;
                                                this.carrying = false;
                                        }
                                         
                                }

                                console.log("Fundo");

                        }
                        if(this.y<=this.defaultY&& this.descending == false){
                                this.y+= this.defaultY*(50/1000);
                                console.log("Subindo");
                        }
                        if(this.y==this.defaultY&& this.descending==false){
                                this.catchingBranch=false;
                                console.log("Topo");
                        }
                        
                }
                this.display();

        }
       
	display() {
                
                this.scene.pushMatrix();
                if(this.branch1.dropped){
                        
                        this.scene.translate(this.nest.x-1.5,3.3,this.nest.z-2);
                }
                if(this.branch1.caught && !this.branch1.dropped){
                        
                        this.scene.translate(0,2*Math.sin(this.t),0,0);
                        this.scene.translate(this.x-(Math.cos(-this.orientation)*5),this.y,this.z-(Math.sin(-this.orientation)*5));
                        this.scene.rotate(this.orientation,0,1,0);
                        this.scene.translate(0,0,-2.5);
                        if(this.catchingBranch==true && this.descending ==false){
                                this.scene.translate(-1.5*Math.cos(Math.PI/4)*Math.cos(this.orientation),7*Math.sin(Math.PI/4),-1.5*Math.cos(Math.PI/4)*Math.sin(this.orientation));
                                                    
                        }
                        if(this.catchingBranch==true && this.descending ==true){
                                this.scene.translate(-1.5*Math.cos(-Math.PI/4)*Math.cos(this.orientation),7*Math.sin(-Math.PI/4),-1.5*Math.cos(-Math.PI/4)*Math.sin(this.orientation));
                                                    
                        }
                }
                this.branch1.display();
                this.scene.popMatrix();
                
                this.scene.pushMatrix();
                if(this.branch2.dropped){
                        
                        this.scene.translate(this.nest.x-0.2,4,this.nest.z-2);
                }
                if(this.branch2.caught && !this.branch2.dropped){
                        
                        this.scene.translate(0,2*Math.sin(this.t),0,0);
                        this.scene.translate(this.x-(Math.cos(-this.orientation)*5),this.y,this.z-(Math.sin(-this.orientation)*5));
                        this.scene.rotate(this.orientation,0,1,0);
                        this.scene.translate(0,0,-2.5);
                        if(this.catchingBranch==true && this.descending ==false){
                                this.scene.translate(-1.5*Math.cos(Math.PI/4)*Math.cos(this.orientation),7*Math.sin(Math.PI/4),-1.5*Math.cos(Math.PI/4)*Math.sin(this.orientation));
                                                    
                        }
                        if(this.catchingBranch==true && this.descending ==true){
                                this.scene.translate(-1.5*Math.cos(-Math.PI/4)*Math.cos(this.orientation),7*Math.sin(-Math.PI/4),-1.5*Math.cos(-Math.PI/4)*Math.sin(this.orientation));
                                                    
                        }
                }
                this.branch2.display();
                this.scene.popMatrix();
                
                this.scene.pushMatrix();
                if(this.branch3.dropped){
                        
                        this.scene.translate(this.nest.x+1,4.2,this.nest.z-2);
                }
                if(this.branch3.caught && !this.branch3.dropped){
                        
                        this.scene.translate(0,2*Math.sin(this.t),0,0);
                        this.scene.translate(this.x-(Math.cos(-this.orientation)*5),this.y,this.z-(Math.sin(-this.orientation)*5));
                        this.scene.rotate(this.orientation,0,1,0);
                        this.scene.translate(0,0,-2.5);
                        if(this.catchingBranch==true && this.descending ==false){
                                this.scene.translate(-1.5*Math.cos(Math.PI/4)*Math.cos(this.orientation),7*Math.sin(Math.PI/4),-1.5*Math.cos(Math.PI/4)*Math.sin(this.orientation));
                                                    
                        }
                        if(this.catchingBranch==true && this.descending ==true){
                                this.scene.translate(-1.5*Math.cos(-Math.PI/4)*Math.cos(this.orientation),7*Math.sin(-Math.PI/4),-1.5*Math.cos(-Math.PI/4)*Math.sin(this.orientation));
                                                    
                        }
                }
                this.branch3.display();
                this.scene.popMatrix();
                
                this.scene.pushMatrix();
                if(this.branch4.dropped){
                        
                        this.scene.translate(this.nest.x+2,3.7,this.nest.z-2);
                }
                if(this.branch4.caught && !this.branch4.dropped){
                        
                        this.scene.translate(0,2*Math.sin(this.t),0,0);
                        this.scene.translate(this.x-(Math.cos(-this.orientation)*5),this.y,this.z-(Math.sin(-this.orientation)*5));
                        this.scene.rotate(this.orientation,0,1,0);
                        this.scene.translate(0,0,-2.5);
                        
                        if(this.catchingBranch==true && this.descending ==false){
                                this.scene.translate(-1.5*Math.cos(Math.PI/4)*Math.cos(this.orientation),7*Math.sin(Math.PI/4),-1.5*Math.cos(Math.PI/4)*Math.sin(this.orientation));
                                                    
                        }
                        if(this.catchingBranch==true && this.descending ==true){
                                this.scene.translate(-1.5*Math.cos(-Math.PI/4)*Math.cos(this.orientation),7*Math.sin(-Math.PI/4),-1.5*Math.cos(-Math.PI/4)*Math.sin(this.orientation));
                                                    
                        }
                }
                this.branch4.display();
                this.scene.popMatrix();
                
                this.scene.pushMatrix();

                if(this.catchingBranch==true && this.descending ==true){
                        this.scene.translate(this.x,this.y,this.z);
                        this.scene.rotate(Math.PI/4,Math.sin(this.orientation),0,Math.cos(this.orientation));
                        this.scene.translate(-this.x,-this.y,-this.z);
                }
                if(this.catchingBranch==true && this.descending ==false){
                        this.scene.translate(this.x,this.y,this.z);
                        this.scene.rotate(-Math.PI/4,Math.sin(this.orientation),0,Math.cos(this.orientation));
                        this.scene.translate(-this.x,-this.y,-this.z);
                }
                
                this.scene.pushMatrix();
                this.scene.translate(0,2*Math.sin(this.t),0,0);
                this.scene.translate(this.x, this.y, this.z);
                this.scene.scale(0.3,0.3,0.3);
                this.scene.scale(this.scaleFactor,this.scaleFactor,this.scaleFactor);
                this.scene.rotate(this.orientation,0,1,0);

                this.scene.pushMatrix();
		this.featherMaterial.apply();
                this.scene.scale(10,5,5);
                this.cube.display();
                this.scene.popMatrix();


                this.scene.pushMatrix();
		this.featherMaterial.apply();
                this.scene.translate(-5.5,-2.5,0);
                this.scene.scale(5,5,5);
                this.scene.rotate(Math.PI/2, 1,0,0);
                this.quad.display();
                this.scene.popMatrix();


                this.scene.pushMatrix();
		this.featherMaterial.apply();
                this.scene.translate(-6.5,0,-2.5);
                this.scene.scale(-1.5,2.5,2.5);
                this.triangle.display();
                this.scene.popMatrix();

                this.scene.pushMatrix();
		this.featherMaterial.apply();
                this.scene.translate(-6.5,0,2.5);
                this.scene.scale(-1.5,2.5,2.5);
                this.triangle.display();
                this.scene.popMatrix();


                this.scene.pushMatrix();
		this.featherMaterial.apply();
                this.scene.translate(-6.4,0,0);
                this.scene.scale(5,4,3.5);
                this.scene.rotate(5.7*Math.PI/16,0,0,1);
                this.scene.rotate(-Math.PI/4,0,1,0);
                this.scene.scale(1,1.25,1);
                this.prism.display();
                this.scene.popMatrix();

                
                this.scene.pushMatrix();
		this.featherMaterial.apply();
                this.scene.translate(-10.3,1.6,0);
                this.scene.scale(5,4,3.5);
                this.scene.rotate(Math.PI/2,0,0,1);
                this.scene.rotate(-Math.PI/4,0,1,0);
                this.scene.scale(1.1,1.25*1.9,1.1);
                this.pyram.display();
                this.scene.popMatrix();

                
                this.scene.pushMatrix();
		this.featherMaterial.apply();
                this.scene.translate(5,0,0);
                this.scene.scale(1,0.7,0.7);
                this.scene.scale(14,5,5);
                this.scene.rotate(-Math.PI/2,0,0,1);
                this.scene.rotate(-Math.PI/4,0,1,0);
                this.pyram.display();
                this.scene.popMatrix();


                this.scene.pushMatrix();
                this.scene.rotate((Math.PI/4)*((Math.sin(this.t*this.speedFactor *(this.velocity/10)+0.1))*0.5),1,0,0);
                this.wing.display(this.t*this.speedFactor);
                this.scene.popMatrix();

                

                this.scene.pushMatrix();
                this.scene.scale(1,1,-1);
                this.scene.rotate((Math.PI/4)*((Math.sin(this.t*this.speedFactor*(this.velocity/10)+0.1))*0.5),1,0,0);
                this.wing.display(this.t*this.speedFactor);
                this.scene.popMatrix();


                this.scene.pushMatrix();
		this.featherMaterial.apply();
                this.scene.translate(15,0,-4);
                this.scene.scale(4,4,4);
                this.scene.rotate(Math.PI, 0,1,0);
                this.scene.rotate(Math.PI/2, 1,0,0);
                this.triangle.display();
                this.scene.popMatrix();

                
                this.scene.pushMatrix();
		this.featherMaterial.apply();
                this.scene.translate(15,0,4);
                this.scene.scale(4,4,-4);
                this.scene.rotate(Math.PI, 0,1,0);
                this.scene.rotate(Math.PI/2, 1,0,0);
                this.triangle.display();
                this.scene.popMatrix();

                
                this.scene.pushMatrix();
		this.eyeMaterial.apply();
                this.scene.translate(-13,4,2);
                this.scene.rotate(Math.PI/2,0,0,1);
                this.scene.rotate(-Math.PI/4,0,1,0);
                this.scene.scale(1.1*0.5,1.25*1.9*0.5,1.1*0.5);
                this.pyram.display();
                this.scene.popMatrix();

                
                this.scene.pushMatrix();
		this.eyeMaterial.apply();
                this.scene.translate(-13,4,-2);
                this.scene.rotate(Math.PI/2,0,0,1);
                this.scene.rotate(-Math.PI/4,0,1,0);
                this.scene.scale(1.1*0.5,1.25*1.9*0.5,1.1*0.5);
                this.pyram.display();
                this.scene.popMatrix();


                this.scene.popMatrix();
                
                this.scene.popMatrix();

                this.nest.display();

        }

        
}

