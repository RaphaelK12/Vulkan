#version 450

layout (location = 0) in vec3 inColor;

layout (location = 0) out vec4 outFragColor;

layout(push_constant) uniform perDraw {
	float Timer;
} PerDraw;

void main() 
{
  outFragColor = mix(vec4(inColor, 1.0), vec4(1.0, 0.5, 0.0, 1.0), PerDraw.Timer);
}
