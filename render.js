var fs = require('fs');

var ffmpeg = require('fluent-ffmpeg');

var fmpeg = new ffmpeg();

var gm = require('gm');
var imagemagick = gm.subClass({ imageMagick: true });

let canvas = require('canvas');

var phantomjs = require('phantomjs')

var html2canvas = require('html2canvas')

var jsdom = require('jsdom')
const { JSDOM } = jsdom;

/* Puppeteer
*/

// const puppeteer = require('puppeteer');
// var driver = require('webdriverio');

const _ = require("lodash");


module.exports = {
    
    // Screen capture using puppeteer

    // renderPuppet: function(dom) {
    //     (async () => {
    //         const browser = await puppeteer.launch();
    //         const page = await browser.newPage();
          
    //         await page.goto('http://localhost:5000');
            
    //         //render multiple images
    //         for(let i = 0; i< 60; i++) {
    //             await page.waitFor(1)
    //             page.screenshot({path: `puppeteer/example${i}.png`});
    //         }
        
    //         await browser.close();
    //       })();
    // },
    // this will convert an svg to video using FFMPEG
    svgToVideo() {
        
        console.log('Convert svg to png then convert to mp4')
    },

    capture() {

        let data = fs.readFileSync('./sample.svg', 'utf8')

        let fileDOM = `<div id="svg">${data}</div>`;
        let dom = new JSDOM(`<div id="svg">${data}</div>`)


        const { window } = new JSDOM(
            `
          <body>
              <script src='CCapture.all.min.js'></script>
              <canvas id='animation' width='400' height='200'></canvas>
          </body>
          `,
            // We need these options to allow JSDOM to require CCapture from node_modules
           //{ runScripts: "dangerously", resources: "usable", FetchExternalResources   : ['script'] }
          );
          
          const document = window.document;
          
          // Do our stuff after DOM is ready.
          window.onload = () => {
            const canvas = document.getElementById("animation");
            const ctx = canvas.getContext("2d");
          
            // Doing some random animation here
            const render = () => {
              ctx.fillStyle = "blue";
              ctx.font = "30px Impact";
              ctx.rotate(_.random(0.1, 0.2));
              ctx.fillText("Awesome!", 50, 100);
            };
          
            // Framerate for capturer is 1 per second just for example
            const capturer = new window.CCapture({
              format: "png",
              framerate: 30,
              verbose: true
            });
          
            capturer.start();
          
            // Doing 3 renders, and capture the canvas
            const interval = setInterval(() => {
              render();
              capturer.capture(canvas);
            }, 1000);
          
            // Now clearing the interval, stopping capturer
            setTimeout(() => {
              clearInterval(interval);
          
              capturer.stop();
          
              // Saving the file using FileReader (from JSDOM) and node.js API
              capturer.save(blob => {
                const reader = new window.FileReader();
                reader.onload = () => {
                  const arrayBuffer = reader.result;
                  const uint8Array = new Uint8Array(arrayBuffer);
          
                  // Sync for simplicity
                  fs.writeFileSync("./images.tar", uint8Array, { encoding: "binary" });
                };
          
                reader.readAsArrayBuffer(blob);
              });
            }, 4000);
          };

          

        // html2canvas(dom.window.document.getElementById('svg')).then(function(canvas) {
        //     console.log(canvas)
        // }).catch((e) => {
        //     console.log(e)
        // });

        //var capturer = CCapture( { format: 'webm' } );

    }
}
