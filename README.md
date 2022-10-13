# Responsive Website Components
I'm using this repository to experiment with building responsive Vue components with the help of the wonderous ResizeObserver. Making vue components respond to component width rather than the screen width is important due to the nature of Vue and making components that can be reusable throughout the site. This can be achieved super simply by creating a ResizeObserver during the mounting of a component. 

## Examples

<div style="display: flex; flex-flow: column nowrap; gap: 1rem 0; justify-content: center; max-width: 40rem">
<h3>Desktop</h3>
  <img src="https://github.com/tsarvs/responsive-website-components/blob/master/src/assets/screenshotDesktop.png?raw=true" alt="Desktop Screenshot"/>
<h3>Mobile</h3>  
<img src="https://github.com/tsarvs/responsive-website-components/blob/master/src/assets/screenshotMobile.png?raw=true" alt="Mobile Screenshot"/>
</div>
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
