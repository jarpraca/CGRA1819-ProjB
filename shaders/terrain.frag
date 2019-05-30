#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
varying float height;
uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform sampler2D uSampler3;

void main() {

	vec4 color = texture2D(uSampler, vTextureCoord);

	vec2 grad = vec2(0, 1.0 - height);
	vec4 gradient = texture2D(uSampler3, grad);

	//normalize(color);
	//normalize(coords);
	//normalize(gradient);
	
	//if(coords.z > 0.1)
	//if(gradient.y > 0.1)
	//if(gl_FragCoord.z > 0.1)
	//if(coords.z == (gradient.y * 2.0))
		gl_FragColor = mix(color, gradient, 0.5);
	//gl_FragCoord = coords;
	
	//gl_FragColor = color;
}