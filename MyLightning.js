/**
 * MyLightning
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLightning extends MyLSystem {
    constructor(scene) {
        super(scene);
        this.depth = 0;
        this.start_time = 0;
        this.active = false;
        this.i = 0;
    }

    // cria o lexico da gramática
    initGrammar(){
        this.grammar = {
            "F": new MyQuadLightning(this.scene),
            "X": new MyQuadLightning(this.scene)
        };
    }

    update(t){
        if((t-this.start_time) >= 1000){
            //console.log("done "+(t-this.start_time));
            this.active = false;
            this.depth = 0;
        }
        if(this.active){
            //this.depth = (t - this.start_time) * this.axiom.length * 0.1;
            this.depth = this.axiom.length / 1000;
            //console.log("depth "+this.depth);
            //console.log(t - this.start_time);
            this.display();
        }
    }

    startAnimation(t){
        console.log("start");
        if(!this.active){
            console.log("aqui");
            this.active = true;
            this.start_time = t;
            super.iterate();
            this.depth = 0;
            console.log("length "+this.axiom.length);
        }
        else
            console.log("end");
    }

    display(){
        if(this.depth == 0)
            return;
        
        console.log("depth "+this.depth);
        this.scene.pushMatrix();
        this.scene.scale(this.scale, this.scale, this.scale);

        //var i;
        var c = 0;

        // percorre a cadeia de caracteres
        for (; this.i<this.axiom.length; ++this.i){
            if(c >= this.depth)
                break;
            // verifica se sao caracteres especiais
            switch(this.axiom[this.i]){
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
                    var primitive=this.grammar[this.axiom[this.i]];

                    if ( primitive )//&& this.i < this.depth)
                    {
                        primitive.display();
                        this.scene.translate(0, 1, 0);
                    }
                    break;
            }
            c++;
        }
        this.scene.popMatrix();
    }
}