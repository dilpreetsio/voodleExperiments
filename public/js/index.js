// connect socket here
var socket = io.connect();

// GASP CODE FOR TEST

// 1. Create a variable
var $box = $('#box');

// 2. Create a First .to() Tween
TweenLite.to($box, 10, {y: 500, top: 100, left: 100, x: 100});

// 3. Create a .from() Tween
TweenLite.from($box, 2, {x: '+=500px', autoAlpha: 0});

// 4. Create a .set() Tween
TweenLite.set($box, {x: '+=200px', scale: 0.3});
TweenLite.set($box, {x: '+=100px', scale: 0.6});
TweenLite.set($box, {x: '-50%', scale: 1});

// 5. Create a .fromTo() Tween
TweenLite.fromTo($box, 2, {x: '+=200px'}, {x: 150});

// 6. Easing
TweenLite.fromTo($box, 2, {x: '+=200px'}, {x: 150, ease:Power4.easeInOut, onStart: start, onUpdate: update, onComplete: complete});

TweenLite.to($box, 0.4, {top: '100%', y: '200px', ease:Bounce.easeOut, delay: 2});
TweenLite.to($box, 0.7, {x: '+=200px', y: '200px', ease:Back.easeInOut, delay: 3});
TweenLite.to($box, 0.8, {x: '+=200px', y: '200px', ease:Back.easeInOut, delay: 4.2});
TweenLite.to($box, 2.5, {top: '50%', y: '200px', ease:Power0.easeNone, delay: 5});
TweenLite.to($box, 2.5, {x: '+=400px', ease:Elastic.easeInOut, delay: 7.7});
TweenLite.to($box, 2.5, {x: '+=400px', rotation: -720, ease: SlowMo.ease.config(0.1, 0.7, false), delay: 10.4});


// 7. Callback functions
function start(){
// console.log('start');
}

function update(){
// console.log('animating');
}

function complete(){
// console.log('end');
}


$('#cc').click(function (e) {
    let dom = document.getElementById('box');
    
    socket.emit('ccapture', { dom: dom })
})

$('#ffmpeg').click(function (e) {
    socket.emit('ffmpeg', { message: "Render using imagemagic & FFMPEG" })
})

$('#cc').click(function (e) {
    //socket.emit('cc', { dom: document.getElementById('cc')})

    canvg('canvas', '../sample.svg')

    // Convert SVG to CANVAS
    html2canvas(document.querySelector("#svg")).then(canvas => {
        document.body.appendChild(canvas)
    });
    
    // Capture Canvas using CCAPTURE
})