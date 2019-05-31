/**
 * MyLightning
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLightning extends MyLSystem {
    constructor(scene) {
        super(scene);

    }
    // cria o lexico da gramática
    initGrammar(){
        this.grammar = {
            "F": new MyQuadLightning(this.scene),
            "X": new MyQuadLightning(this.scene)
        };
    }
    startAnimation(t){

        console.log("Starting animation");
        this.active=true;
        this.startTime=t;
        console.log("Starting Time" + this.startTime);
        this.depth=0;
        
        console.log("Initial Depth" + this.depth);
        this.scene.doGenerateL();
        //super.iterate();
        

    }

    update(t){
        if(this.active){
            this.depth += (this.axiom.length / 10) ;
            
            console.log("Update lightning");
            console.log("t delta " + (t - this.startTime));
            console.log("Axiom length " + this.axiom.length);
            console.log("Axiom length /(1000/50) " +  (this.axiom.length / (1000/50)));
            console.log("Depth " + this.depth);

            if(this.depth>200){
                this.active=false;
            }

        }

    }


    display(){
        this.scene.pushMatrix();
        this.scene.translate(0,20,0);
        this.scene.scale(-1,-1,-1);

        var i;

        this.pushes=0;
        this.pops=0;
        // percorre a cadeia de caracteres
            for (i=0; i<this.axiom.length; ++i){
                
                
                //console.log("Trying to display, Axiomlength: " + this.axiom.length + " depth: " + this.depth + " current iteration: " + i);
                

                if(i < this.depth){
                    
                    //console.log("Good Depth");
                    // verifica se sao caracteres especiais
                    switch(this.axiom[i]){
                        case "+":
                            // roda a esquerda
                            this.scene.rotate(this.angle, 0, 0, 1);
                            break;

                        case "-":
                            // roda a direita
                            this.scene.rotate(-this.angle, 0, 0, 1);
                            break;

                        case "\\":
                            // rotacao positiva eixo XX
                            this.scene.rotate(this.angle, 1, 0, 0);
                            break;
                        
                        case "/":
                            // rotacao negativa eixo XX
                            this.scene.rotate(-this.angle, 1, 0, 0);
                            break;

                        case "^":
                            // rotacao positiva eixo YY
                            this.scene.rotate(this.angle, 0, 1, 0);
                            break;
                        
                        case "&":
                            // rotacao negativa eixo YY
                            this.scene.rotate(-this.angle, 0, 1, 0);
                            break;

                        case "[":
                            // push
                            this.pushes++;
                            this.scene.pushMatrix();
                            break;

                        case "]":
                            // pop
                            this.pops++;
                            this.scene.popMatrix();
                            break;

                        // processa primitiva definida na gramatica, se existir
                        default:
                            var primitive=this.grammar[this.axiom[i]];

                        if ( primitive )
                        {
                            primitive.display();
                            this.scene.translate(0, 1, 0);
                        }
                        break;


                    }

                }
            }
            
        
        console.log("Pushes: " +this.pushes +" pops: " + this.pops);
        
        
        this.scene.popMatrix();
        this.scene.popMatrix();
        //this.scene.popMatrix();
    }
    



}