/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();
        this.enableTextures(true);
        this.scaleFactor = 1;

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);
        this.setUpdatePeriod(50);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.appearance = new CGFappearance(this);
        this.terrain = new MyTerrain(this);
        this.house = new MyHouse(this);
        this.bird = new MyBird(this, Math.PI/2, 0, 10, 20, 10);

      
                // Feather Material
		this.cubemapMaterial = new CGFappearance(this);
		this.cubemapMaterial.setAmbient(0.6, 0.6, 0.6, 1);
		this.cubemapMaterial.setDiffuse(0.8, 0.8, 0.8, 1);
		this.cubemapMaterial.setSpecular(0, 0, 0, 1);
		this.cubemapMaterial.setShininess(10.0);
		this.cubemapMaterial.loadTexture('images/cubemap.png');
        this.cubemapMaterial.setTextureWrap('REPEAT', 'REPEAT');

        // Tree
        this.axiom = "X"; //
        this.ruleF = "FF"; //
        this.ruleX = "F[-X][X]F[-X]+FX";
        this.angle = 60.0;
        this.iterations = 5;
        this.scaleFactor = 0.6;
        this.tree1 = new MyLPlant(this);
        this.tree2 = new MyLPlant(this);
        this.tree3 = new MyLPlant(this);
        this.tree4 = new MyLPlant(this);
        this.tree5 = new MyLPlant(this);
        this.cubemap = new MyCubeMap(this);

        this.doGenerateT = function () {
            this.tree1.generate(
                this.axiom,
                {
                    "F": [ "FF" ],
                    "X": [ "F[-X][X]F[-X]+X", "F[-X][X]+X", "F[+X]-X", "F[/X][X]F[\\X]+X", "F[\X][X]/X", "F[/X]\X", "F[^X][X]F[&X]^X", "F[^X]&X", "F[&X]^X" ]
                },
                this.angle,
                this.iterations,
                this.scaleFactor
            );
        }

        // do initial generation
        this.doGenerateT();

        this.doGenerateT = function () {
            this.tree2.generate(
                this.axiom,
                {
                    "F": [ "FF" ],
                    "X": [ "F[-X][X]F[-X]+X", "F[-X][X]+X", "F[+X]-X", "F[/X][X]F[\\X]+X", "F[\X][X]/X", "F[/X]\X", "F[^X][X]F[&X]^X", "F[^X]&X", "F[&X]^X" ]
                },
                this.angle,
                this.iterations,
                this.scaleFactor
            );
        }

        // do initial generation
        this.doGenerateT();

        this.doGenerateT = function () {
            this.tree3.generate(
                this.axiom,
                {
                    "F": [ "FF" ],
                    "X": [ "F[-X][X]F[-X]+X", "F[-X][X]+X", "F[+X]-X", "F[/X][X]F[\\X]+X", "F[\X][X]/X", "F[/X]\X", "F[^X][X]F[&X]^X", "F[^X]&X", "F[&X]^X" ]
                },
                this.angle,
                this.iterations,
                this.scaleFactor
            );
        }

        // do initial generation
        this.doGenerateT();

        this.doGenerateT = function () {
            this.tree4.generate(
                this.axiom,
                {
                    "F": [ "FF" ],
                    "X": [ "F[-X][X]F[-X]+X", "F[-X][X]+X", "F[+X]-X", "F[/X][X]F[\\X]+X", "F[\X][X]/X", "F[/X]\X", "F[^X][X]F[&X]^X", "F[^X]&X", "F[&X]^X" ]
                },
                this.angle,
                this.iterations,
                this.scaleFactor
            );
        }

        // do initial generation
        this.doGenerateT();

        this.doGenerateT = function () {
            this.tree5.generate(
                this.axiom,
                {
                    "F": [ "FF" ],
                    "X": [ "F[-X][X]F[-X]+X", "F[-X][X]+X", "F[+X]-X", "F[/X][X]F[\\X]+X", "F[\X][X]/X", "F[/X]\X", "F[^X][X]F[&X]^X", "F[^X]&X", "F[&X]^X" ]
                },
                this.angle,
                this.iterations,
                this.scaleFactor
            );
        }

        // do initial generation
        this.doGenerateT();
        

        //Lightning
        this.axiom = "X";
        this.ruleF = "FF";
        this.ruleX = "F[-X][X]F[-X]+FX";
        this.angle = 25.0;
        this.iterations = 3;
        this.scaleFactor = 0.5;
        this.lightning = new MyLightning(this);

        this.doGenerateL = function () {
            this.lightning.generate(
                this.axiom,
                {
                    "F": [ this.ruleF ],
                    "X": [ this.ruleX, "F[-X][X]F[-X]+X", "F[-X][X]+X", "F[/X][X]F[\\X]+X", "F[\X][X]/X", "F[^X][X]F[&X]^X"]
                },
                this.angle,
                this.iterations,
                this.scaleFactor
            );
        }

        // do initial generation
        this.doGenerateL();
    }
    initLights() {
        this.lights[0].setPosition(0, 50, 0, 1);
        this.lights[0].setDiffuse(0.8, 0.8, 0.8, 1.0);
        this.lights[0].setAmbient(0.8, 0.8, 0.8, 1.0);
        this.lights[0].setSpecular(0.6, 0.6, 0.6, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        //this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(40, 40, 40), vec3.fromValues(-5, -2, -5));
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(50, 50, 50), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
    }

    checkKeys(t) {
        var text="Keys pressed: ";
        var keysPressed=false;
        // Check for key codes e.g. in https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
            this.bird.accelerate(1);
            text+=" W ";
            keysPressed=true;
        }
        if (this.gui.isKeyPressed("KeyS")) {
            this.bird.accelerate(-1);
            text+=" S ";
            keysPressed=true;
        }
        if (this.gui.isKeyPressed("KeyA")) {
            this.bird.turn(Math.PI/32);
            text+=" A ";
            keysPressed=true;
        }
        if (this.gui.isKeyPressed("KeyD")) {
            this.bird.turn(-Math.PI/32);
            text+=" D ";
            keysPressed=true;
        }
        if (this.gui.isKeyPressed("KeyR")) {
            this.bird.reset();
            text+=" R ";
            keysPressed=true;
        }
        if (this.gui.isKeyPressed("KeyP")) {
            this.bird.descend();
            text+=" P ";
            keysPressed=true;
        }
        if (this.gui.isKeyPressed("KeyL")) {
            
            this.lightning.start = true;
            text+=" L ";
            keysPressed=true;
        }
        if (keysPressed)
        console.log(text);
    }
        
    update(t){
        this.bird.updateBuffers();
        this.checkKeys(t);
        if(this.lightning.start == true){
            this.lightning.startAnimation(t);
            this.lightning.start=false;
        }
        this.lightning.update(t);
    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        this.appearance.setAmbient(0.2, 0.4, 0.8, 1.0);
		this.appearance.setDiffuse(0.2, 0.4, 0.8, 1.0);
		this.appearance.setSpecular(0.2, 0.4, 0.8, 1.0);
		this.appearance.setShininess(10.0);

        // ---- BEGIN Primitive drawing section
        this.pushMatrix();
        this.scale(0.3,0.3,0.3);
        this.bird.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-3, 0, -1);
        this.scale(2, 2, 2);
        this.house.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-3, 0, -12);
        this.scale(1.5, 1.5, 1.5);
        this.tree1.display();
        this.translate(2, 0, -2);
        this.tree2.display();
        this.translate(0.6, 0, -0.3);
        this.tree3.display();
        this.translate(1.4, 0, 0);
        this.tree4.display();
        this.translate(1, 0, -0.3);
        this.tree5.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-10, 0, -5);
        this.rotate(Math.PI/2, 0,1,0);
        this.scale(-1.5, 1.5, 1.5);
        this.tree2.display();
        this.translate(2, 0, -2);
        this.tree3.display();
        this.translate(0.6, 0, -0.3);
        this.tree1.display();
        this.translate(1.4, 0, 0);
        this.tree5.display();
        this.translate(1, 0, -0.3);
        this.tree4.display();
        this.popMatrix();

        this.pushMatrix();
        this.scale(40,40,40);
        this.cubemapMaterial.apply();
        this.cubemap.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(0, -2.5, 0);
        this.terrain.display();
        this.popMatrix();

          
        if(this.lightning.active){
            this.pushMatrix();
            this.lightning.display();
            this.popMatrix();
        }
        // ---- END Primitive drawing section
    }
}