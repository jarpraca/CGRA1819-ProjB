attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;
uniform float normScale;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
varying float height;
uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform sampler2D uSampler3;

void main() {

    vec4 offset = texture2D(uSampler2, aTextureCoord);

    vec4 vertex = vec4(aVertexPosition.x, aVertexPosition.y, aVertexPosition.z + offset.z*10.0*normScale, 1.0);
    //vec4 vertex = vec4(aVertexPosition.x, aVertexPosition.y, aVertexPosition.z, 1.0);

    gl_Position = uPMatrix * uMVMatrix * vertex;

    vTextureCoord = aTextureCoord;

    height = vertex.b/10.0;
    //coords = vertex;
}

