/**
* MyCylinder
* @constructor
*/
class MyCylinder extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;

        for(var i = 0; i < this.slices; i++){
            // All vertices have to be declared for a given face
            // even if they are shared with others, as the normals 
            // in each face will be different

            var sa=Math.sin(ang);
            var saa=Math.sin(ang+alphaAng);
            var ca=Math.cos(ang);
            var caa=Math.cos(ang+alphaAng);

            if(i == 0)
            {
                this.vertices.push(ca, 0, -sa);     // 0
                this.vertices.push(ca, 1, -sa);     // 1
                this.vertices.push(caa, 0, -saa);   // 2
                this.vertices.push(caa, 1, -saa);   // 3

                // push normal once for each vertex of this triangle
                this.normals.push(ca, 0, -sa);
                this.normals.push(ca, 1, -sa);
                this.normals.push(caa, 0, -saa);
                this.normals.push(caa, 1, -saa);

                this.indices.push(0, 2, 1);
                this.indices.push(2, 3, 1);

                this.texCoords.push(0, 1);
                this.texCoords.push(0 ,0);
                this.texCoords.push(1/this.slices, 1);
                this.texCoords.push(1/this.slices, 0);
            }
            else
            {
                this.vertices.push(caa, 0, -saa);   // 4
                this.vertices.push(caa, 1, -saa);   // 5

                // push normal once for each vertex of this triangle
                this.normals.push(caa, 0, -saa);
                this.normals.push(caa, 1, -saa);

                this.indices.push((2*i), (2*i+2) , (2*i+1) );
                this.indices.push((2*i+2), (2*i+3) , (2*i+1) );

                this.texCoords.push((i+1)/this.slices, 1);
                this.texCoords.push((i+1)/this.slices, 0);
            }

            ang+=alphaAng;
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


