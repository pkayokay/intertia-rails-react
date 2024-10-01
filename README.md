# README

This is an example repo of a Rails and React app with [InertiaJS](https://github.com/inertiajs/inertia-rails), with [server-side rendering enabled](https://inertia-rails.netlify.app/guide/server-side-rendering.html#server-side-rendering-ssr).

## Deployment on Hatchbox

### Processes
- Add process reload command for inertia SSR port: `kill -9 $(lsof -ti tcp:13714) 2>/dev/null`

<img width="1289" alt="processes" src="https://github.com/user-attachments/assets/8ede26e7-6a0d-4688-8355-8c7e516cbbd9">

### Custom Deployments
- Add pre-build script: `rm -rf tmp/cache/vite`
- Add a post-deploy script: `bin/vite build --ssr && bin/vite ssr`
<img width="1042" alt="custom_deployments" src="https://github.com/user-attachments/assets/7076402d-0bd0-4a5d-ba8c-7c34b144e5ad">
