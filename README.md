# README

This is an example repo of a Rails and React app with [InertiaJS](https://github.com/inertiajs/inertia-rails), with [server-side rendering enabled](https://inertia-rails.netlify.app/guide/server-side-rendering.html#server-side-rendering-ssr).

You can find the app on https://6wlq3.hatchboxapp.com/
## Deployment on Hatchbox

#### 1. Add a new web process

- `kill -9 $(lsof -ti tcp:13714) 2>/dev/null` kills the existing ssr server
- `bin/vite ssr` starts up the server

<img width="670" alt="Xnapper-2024-10-02-08 01 37" src="https://github.com/user-attachments/assets/67f9677a-59d9-4f22-ac27-bb65253c7f77">

<img width="1199" alt="image" src="https://github.com/user-attachments/assets/3237e2d9-7bcb-4d3e-8d21-18d926f11e54">

#### 2. Update custom deployments scripts section
- Add pre-build script clear the vite cache: `rm -rf tmp/cache/vite`
- Add a post-deploy script to build your server-side bundle: `bin/vite build --ssr`

<img width="993" alt="image" src="https://github.com/user-attachments/assets/e38e26d7-5f6e-4998-a6a7-0af74c1f7529">
