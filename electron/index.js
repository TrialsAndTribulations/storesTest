const { app, BrowserWindow } = require("electron");
const { join } = require("path");
const { get } = require('svelte/store');
const { myObject } = require('./../src/stores');
// import { myObject } from "./../src/stores";

const delay = time => new Promise(res => setTimeout(res, time));
// let unsubscribe = myObject.subscribe(value => myObject = value);

console.log(get(myObject));
console.log(get(myObject).test);
console.log(get(myObject).test);
let mo = get(myObject);
mo.name = 'markus';
mo.test = 26;
console.log("$:", get(myObject));
console.log("mo:", mo);
// console.log(`mlo:`, myLocalObject);
myObject.set({ test: 7 });
console.log("$:", get(myObject));
myObject.update(o => ({ ...o, test: 13 }));
console.log("$:", get(myObject));

function main() {
    const window = new BrowserWindow({
        width: 800, height: 600,
        show: false,
        autoHideMenuBar: true,
        // resizable: false,
        webPreferences: {
            preload: join(__dirname, "./preload.js"),
        }
    });
    window.loadFile(join(__dirname, "../public/index.html"));

    window.on("ready-to-show", () => {
        console.log("ready to show:", get(myObject));
        window.show();
    });
}

app.whenReady().then(main);