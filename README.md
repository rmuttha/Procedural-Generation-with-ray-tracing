Here's a `README.md` file for the OpenGL-based procedural generation with ray tracing project. This will provide an overview of the project, how to set it up, and how it works.

---

# OpenGL Ray Tracing with Procedural Generation

## Overview

This project demonstrates a simple implementation of ray tracing in OpenGL combined with procedural generation of spheres. The program renders a 3D scene directly within a fragment shader using ray tracing techniques, showcasing basic procedural generation of objects and shading.

## Features

- **Ray Tracing in OpenGL**: Implements ray tracing to simulate the path of light as it interacts with virtual objects.
- **Procedural Generation**: Randomly generates spheres in the scene, making each run unique.
- **Basic Shading**: Applies simple Lambertian shading to the spheres for a basic lighting effect.
- **Full-screen Quad Rendering**: Uses a full-screen quad to run the ray tracing algorithm across the entire screen.

## Requirements

- **OpenGL 3.3+**
- **GLFW**: For window and input management.
- **GLAD**: For OpenGL function loading.
- **GLM**: For vector and matrix operations.
- **C++11 or later**

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/rmuttha/Procedural-Generation-with-ray-tracing
```

### 2. Install Dependencies

Make sure you have the following dependencies installed:

- **GLFW**: [Download and installation instructions](https://www.glfw.org/download.html)
- **GLAD**: [Download and installation instructions](https://glad.dav1d.de/)
- **GLM**: [Download and installation instructions](https://glm.g-truc.net/0.9.9/index.html)

You can install them using your package manager or include them in your project directory.

### 3. Compile the Project

Ensure you have a C++ compiler (like `g++` or `clang++`). Then, compile the project with the following commands:

```bash
g++ -o raytracer main.cpp -lglfw -lGL -ldl
```

Make sure to adjust the command depending on your platform and the location of your dependencies.

### 4. Run the Program

Execute the compiled binary:

```bash
./raytracer
```

A window should open, displaying a procedurally generated scene with spheres rendered using ray tracing.


### `main.cpp`

This file sets up the OpenGL context, loads shaders, and handles the rendering loop. It also initializes the fullscreen quad used for rendering the scene.

### `shader.vert`

The vertex shader is minimal, simply passing through vertex positions to the fragment shader.

### `shader.frag`

This is where the ray tracing and procedural generation magic happens. The fragment shader casts rays into the scene, checks for intersections with procedurally generated spheres, and applies basic shading.

## How It Works

- **Procedural Sphere Generation**: The fragment shader generates a fixed number of spheres at random positions, sizes, and colors. These spheres are stored in an array and checked for ray intersections.
  
- **Ray Tracing**: For each pixel, a ray is cast from the camera into the scene. The shader computes the intersection of this ray with each sphere, determines the nearest hit, and calculates the color based on the sphere's material and the light direction.

- **Rendering**: The scene is rendered to a fullscreen quad, meaning the entire screen is covered by one large polygon, with the fragment shader calculating the color for each pixel.

## Future Improvements

- **Reflections and Refractions**: Add more complex material properties for realistic rendering.
- **Optimized Performance**: Move ray tracing to compute shaders for better performance.
- **Scene Complexity**: Introduce more complex procedural objects and textures.

## Contact

If you have any questions or suggestions, feel free to reach out:

- **Author**: Rutuja Muttha
- **Email**: rmuttha@pdx.edu
- **GitHub**: [github.com/rmuttha](https://github.com/rmuttha)
