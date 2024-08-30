#version 330 core

out vec4 FragColor;

uniform vec2 iResolution;
uniform float iTime;

// Procedural Sphere
struct Sphere {
    vec3 center;
    float radius;
    vec3 color;
};

#define MAX_SPHERES 10
Sphere spheres[MAX_SPHERES];

// Random Number Generator
float random(float x) {
    return fract(sin(x) * 43758.5453123);
}

// Sphere Intersection
bool intersectSphere(Sphere sphere, vec3 ro, vec3 rd, out float t) {
    vec3 oc = ro - sphere.center;
    float b = dot(oc, rd);
    float c = dot(oc, oc) - sphere.radius * sphere.radius;
    float h = b * b - c;
    if (h < 0.0) return false;
    h = sqrt(h);
    t = -b - h;
    if (t < 0.0) t = -b + h;
    return t > 0.0;
}

void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    uv = uv * 2.0 - 1.0;
    uv.x *= iResolution.x / iResolution.y;
    
    vec3 ro = vec3(0.0, 0.0, 5.0);  // Ray origin
    vec3 rd = normalize(vec3(uv, -1.0));  // Ray direction

    // Initialize spheres (procedurally)
    for (int i = 0; i < MAX_SPHERES; ++i) {
        spheres[i].center = vec3(random(float(i) + 0.1) * 10.0 - 5.0, random(float(i) + 0.2) * 5.0, random(float(i) + 0.3) * 10.0 + 5.0);
        spheres[i].radius = random(float(i) + 0.4) * 0.5 + 0.2;
        spheres[i].color = vec3(random(float(i) + 0.5), random(float(i) + 0.6), random(float(i) + 0.7));
    }

    // Ray tracing
    vec3 color = vec3(0.0);
    float t;
    for (int i = 0; i < MAX_SPHERES; ++i) {
        if (intersectSphere(spheres[i], ro, rd, t)) {
            vec3 hitPoint = ro + t * rd;
            vec3 normal = normalize(hitPoint - spheres[i].center);
            color = spheres[i].color * max(dot(normal, vec3(0.0, 1.0, -1.0)), 0.0);  // Simple Lambertian shading
            break;
        }
    }

    FragColor = vec4(color, 1.0);
}
