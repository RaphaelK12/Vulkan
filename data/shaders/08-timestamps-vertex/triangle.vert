#version 450

void main() 
{
	gl_Position = vec4(4.0 * float(gl_VertexIndex % 2) - 1.0, 4.0 * float(gl_VertexIndex / 2) - 1.0, 0.0, 1.0);
}


