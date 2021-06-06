import {App} from './src/app.js'

const app = new App();
app.init();
window.onresize = app.resize;