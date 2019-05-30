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
/*
        //Lightning
        this.axiom = "X";
        this.ruleF = "FF";
        this.ruleX = "F[-X][X]F[-X]+FX";
        this.angle = 25.0;
        this.iterations = 3;
        this.scaleFactor = 0.5;
        this.lightning = new MyLightning(this);

        this.doGenerate = function () {
            this.lightning.generate(
                this.axiom,
                {
                    "F": [ this.ruleF ],
                    "X": [ this.ruleX ]
                },
                this.angle,
                this.iterations,
                this.scaleFactor
            );
        }

        // do initial generation
        this.doGenerate();

        // Tree
        this.axiom = "X"; //
        this.ruleF = "FF"; //
        this.ruleX = "F[-X][X]F[-X]+FX";
        this.angle = 60.0;
        this.iterations = 5;
        this.scaleFactor = 0.6;
        this.tree = new MyLPlant(this);

        this.doGenerate = function () {
            this.tree.generate(
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
        this.doGenerate();
        */
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        //this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(40, 40, 40), vec3.fromValues(-5, -2, -5));
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(100, 100, 100), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    checkKeys(t) {
        var text="Keys pressed: ";
        var keysPressed=false;
        // Check for key codes e.g. in https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
            text+=" W ";
            keysPressed=true;
        }
        if (this.gui.isKeyPressed("KeyS")) {
            text+=" S ";
            keysPressed=true;
        }
        if (this.gui.isKeyPressed("KeyL")) {
            this.lSystem.startAnimation(t);
            text+=" L ";
            keysPressed=true;
        }
        if (keysPressed)
            console.log(text);
    }
        
    update(t){
        this.checkKeys(t);
        //this.lightning.update(t);
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
        this.translate(0, 5, 0);
        this.house.display();
        //if(this.lightning.active)
            //this.lightning.display();
        this.popMatrix();
        //this.pushMatrix();
        this.terrain.display();
        //this.popMatrix();
        // ---- END Primitive drawing section
    }
}