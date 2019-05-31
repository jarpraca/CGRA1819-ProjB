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
        this.active=true;
        this.startTime=t;
        this.depth=0;
        
        this.axiom = "X";
        this.ruleF = "FF";
        this.ruleX = "F[-X][X]F[-X]+FX";
        //this.scene.doGenerate();
        super.iterate();
    }

    update(t){
        if(this.active){
            this.depth += (this.axiom.length / 10) ;

            if(this.depth>this.axiom.length)
                this.active=false;
        }
    }

    display(){
        this.scene.pushMatrix();
        //this.scene.rotate(Math.PI, 0, 0, 1);
        this.scene.scale(1, -1, 1);

        var i;

        // percorre a cadeia de caracteres
            for (i=0; i<this.axiom.length; ++i){                

                if(i < this.depth){
                    
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
                            this.scene.pushMatrix();
                            break;

                        case "]":
                            // pop
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
        
        this.scene.popMatrix();
    }



}