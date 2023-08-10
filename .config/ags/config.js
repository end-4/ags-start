// Import
const { setupScss } = imports.scss.scss;
const { exec, CONFIG_DIR } = ags.Utils;
Object.keys(imports['modules']).forEach(m => imports['modules'][m]);
Object.keys(imports['windows']).forEach(m => imports['windows'][m]);

// Exporting the config
var config = {
    style: CONFIG_DIR + '/style.css',
    windows: [
        imports.windows.bar.bar,
        imports.scss.scss.loader,
    ],
};