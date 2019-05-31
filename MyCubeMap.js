/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			// Face trás
			1, -1, 1,	//0
			1, -1, -1,	//1
			1, 1, -1,	//2
			1, 1, 1,	//3

			// Face direita
			-1, -1, 1,	//4
			1, -1, 1,	//5
			1, 1, 1,	//6
			-1, 1, 1,	//7

			// Face esquerda
			1, -1, -1,	//8
			-1, -1, -1,	//9
			-1, 1, -1,	//10
			1, 1, -1,	//11

			// Face frente
			-1, -1, -1,	//12
			-1, -1, 1,	//13
			-1, 1, 1,	//14
			-1, 1, -1,	//15

			// Face baixo
			-1, -1, 1,	//16
			-1, -1, -1,	//17
			1, -1, -1,	//18
			1, -1, 1,	//19

			// Face cima
			1, 1, 1,	//20
			1, 1, -1,	//21
			-1, 1, -1,	//22
			-1, 1, 1	//23
		];
		
		this.texCoords = [
			// Face trás
			0.75, 2/3, 	//12
			0.5, 2/3, 	//13
			0.5, 1/3, 	//14
			0.75, 1/3, 	//15			

			// Face direita
			1, 2/3,  	//4
			0.75, 2/3,  //5
			0.75, 1/3,  //6
			1, 1/3, 	//7

			// Face esquerda
			0.5, 2/3, 	//8
			0.25, 2/3, 	//9
			0.25, 1/3, 	//10
			0.5, 1/3, 	//11

			// Face frente
			0.25, 2/3,	//0
			0, 2/3, 	//1
			0, 1/3, 	//2
			0.25, 1/3, 	//3

			// Face baixo
			0, 2/3, 	//16
			0.25, 2/3, 	//17
			0.25, 1, 	//18
			0, 1, 		//19

			// Face cima
			0, 0, 		//20
			0.25, 0, 	//21
			0.25, 1/3, 	//22
			0, 1/3 		//23
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 2, 1,
			0, 3, 2,

			4, 6, 5,
			4, 7, 6,

			8, 10, 9,
			8, 11, 10,

			12, 14, 13,
			12, 15, 14,

			16, 18, 17,
			16, 19, 18,

			20, 22, 21,
			20, 23, 22
		];

		this.normals = [
			// Face trás
			-1, 1, -1,
			-1, 1, 1,
			-1, -1, 1,
			-1, -1, -1,

			// Face direita
			1, 1, -1,
			-1, 1, -1,
			-1, -1, -1,
			1, -1, -1,

			// Face esquerda
			-1, 1, 1,
			1, 1, 1,
			1, -1, 1,
			-1, -1, 1,

			// Face frente
			1, 1, 1,
			1, 1, -1,
			1, -1, -1,
			1, -1, 1,

			// Face baixo
			1, 1, -1,
			1, 1, 1,
			-1, 1, 1,
			-1, 1, -1,

			// Face cima
			-1, -1, -1,
			-1, -1, 1,
			1, -1, 1,
			1, -1, -1
		]

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}


























