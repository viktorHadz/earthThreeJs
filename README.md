# Three.js Earth
- Earth texture maps: [PlanetPixelEmporium](https://planetpixelemporium.com/earth.html)

Interactive 3D Earth visualization with realistic textures and atmospheric effects.

## Tech Stack

- **Three.js** for 3D rendering
- **WebGL** shaders for atmospheric glow
- **Vanilla JavaScript** ES6 modules

## Features

- **Realistic Earth**: Diffuse, specular, and bump mapping
- **City Lights**: Night-side illumination with additive blending
- **Cloud Layer**: Animated cloud cover with transparency
- **Atmospheric Glow**: Custom Fresnel shader for atmosphere effect
- **Starfield**: Procedural star generation with spherical distribution
- **Orbit Controls**: Interactive camera movement

## Getting Started

```bash
# Serve with any static server
python -m http.server 8000
# or
npx serve .
```

## Project Structure

```
├── index.html           # Entry point
├── index.js            # Main Three.js setup
├── src/
│   ├── getStarfield.js # Procedural star generation
│   └── getFresnelMat.js # Atmospheric glow shader
└── textures/           # Earth texture maps
```

## Shaders

Custom GLSL shaders for atmospheric effects:
- Fresnel-based atmospheric scattering
- Additive blending for realistic glow
- Vertex/fragment shader pair for edge lighting


