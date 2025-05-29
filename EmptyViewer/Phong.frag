
#version 330 core
out vec4 FragColor;

in vec3 wPosition;
in vec3 wNormal;
in vec3 wColor;

uniform vec3 lightPos;
uniform vec3 viewPos;
uniform float Ia;
uniform vec3 ka;
uniform vec3 kd;
uniform vec3 ks;
uniform float shininess;

void main()
{
    vec3 ambient = Ia * ka;
    vec3 norm = normalize(wNormal);
    vec3 lightDir = normalize(lightPos - wPosition);
    float diff = max(dot(norm, lightDir), 0.0);
    vec3 diffuse = diff * kd;
    vec3 viewDir = normalize(viewPos - wPosition);
    vec3 reflectDir = reflect(-lightDir, norm);
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), shininess);
    vec3 specular = spec * ks;
    vec3 color = ambient + diffuse + specular;
    color = pow(color, vec3(1.0 / 2.2));
    FragColor = vec4(color, 1.0);
}