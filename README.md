<html lang="en">
    <body>
        <h1>Responsive Website Components</h1>
        <div>
            <p>I'm using this repository to experiment with building responsive Vue components with the help of the wonderous ResizeObserver. Making vue components respond to component width rather than the screen width is important due to the nature of Vue and making components that can be reusable throughout the site. This can be achieved super simply by creating a ResizeObserver during the mounting of a component.</p>
        </div>
        <div>
            <h2>Examples</h2>
            <div style="display: flex; flex-flow: column nowrap;">
                <div style="display: flex; flex-flow: column nowrap; justify-content: center;">
                    <h3>Desktop</h3>
                    <img alt="Desktop Screenshot" style="width: 100%;  max-width: 40rem; align-self: center;" src="https://github.com/tsarvs/responsive-website-components/blob/master/src/assets/screenshotDesktop.png?raw=true">
                </div>
                <div style="display: flex; flex-flow: column nowrap;">
                    <h3>Mobile</h3>
                    <div style="width: 100%;  max-width: 12.5rem; align-self: center;">
                        <img alt="Mobile Screenshot" src="https://github.com/tsarvs/responsive-website-components/blob/master/src/assets/screenshotMobile.png?raw=truee">
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h2>Project setup</h2>
            <pre>yarn install</pre>
            <div>
                <h3>Compiles and hot-reloads for development</h3>
                <pre>yarn serve</pre>
            </div>
            <div>
                <h3>Compiles and minifies for production</h3>
                <pre>yarn build</pre>
            </div>
            <div>
                <h3>Lints and fixes files</h3>
                <pre>yarn lint</pre>
            </div>
            <div>
                <h3>Customize configuration</h3>
                <text>See <a href="https://cli.vuejs.org/config/">Configuration Reference</a></text>
            </div>
        </div>
    </body>
</html>