var ffmpeg = require('fluent-ffmpeg');
const puppeteer = require('puppeteer');
var driver = require('webdriverio');

var fmpeg = new ffmpeg();

module.exports = {
    renderPuppet: function(dom) {
        (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
          
            await page.goto('http://localhost:5000');
            
            //render multiple images
            for(let i = 0; i< 60; i++) {
                await page.waitFor(1)
                page.screenshot({path: `puppeteer/example${i}.png`});
            }
        
            await browser.close();
          })();
    },
    // this will convert an svg to video using FFMPEG
    svgToVideo() {
        
    }
}
