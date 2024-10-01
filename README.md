# README

## Deployment on Hatchbox

### Processes
Add process reload command for inertia SSR port
`kill -9 $(lsof -ti tcp:13714) 2>/dev/null`


### Custom Deployments
Add pre-build script
`rm -rf tmp/cache/vite`

Add a post-deploy script
`bin/vite build --ssr && bin/vite ssr`
