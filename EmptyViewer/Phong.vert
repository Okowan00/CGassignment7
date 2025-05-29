
#version 330 core
layout (location = 0) in vec3 aPos;
layout (location = 1) in vec3 aNormal;
layout (location = 2) in vec3 aColor;

out vec3 wPosition;
out vec3 wNormal;
out vec3 wColor;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

void main()
{
    vec4 worldPos = model * vec4(aPos, 1.0);
    gl_Position = projection * view * worldPos;
    wPosition = vec3(worldPos);
    wNormal = mat3(transpose(inverse(model))) * aNormal;
    wColor = aColor;
}