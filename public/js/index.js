
// GASP CODE FOR TEST

// 1. Create a variable
var $box = $('#box');

// 2. Create a First .to() Tween
// TweenLite.to($box, 0.7, {left: 0, x: 0});

// 3. Create a .from() Tween
// TweenLite.from($box, 2, {x: '-=200px', autoAlpha: 0});

// 4. Create a .set() Tween
//TweenLite.set($box, {x: '-=200px', scale: 0.3});
//TweenLite.set($box, {x: '+=100px', scale: 0.6});
//TweenLite.set($box, {x: '-50%', scale: 1});

// 5. Create a .fromTo() Tween
//TweenLite.fromTo($box, 2, {x: '-=200px'}, {x: 150});

// 6. Easing
TweenLite.fromTo($box, 2, {x: '-=200px'}, {x: 150, ease:Power4.easeInOut, onStart: start, onUpdate: update, onComplete: complete});

TweenLite.to($box, 0.4, {top: '100%', y: '-100%', ease:Bounce.easeOut, delay: 2});
TweenLite.to($box, 0.7, {x: '-=200px', y: '-100%', ease:Back.easeInOut, delay: 3});
TweenLite.to($box, 0.8, {x: '-=200px', y: '-100%', ease:Back.easeInOut, delay: 4.2});
TweenLite.to($box, 2.5, {top: '50%', y: '-50%', ease:Power0.easeNone, delay: 5});
TweenLite.to($box, 2.5, {x: '+=400px', ease:Elastic.easeInOut, delay: 7.7});
TweenLite.to($box, 2.5, {x: '-=400px', rotation: -720, ease: SlowMo.ease.config(0.1, 0.7, false), delay: 10.4});


// 7. Callback functions
function start(){
console.log('start');
}

function update(){
console.log('animating');
}

function complete(){
console.log('end');
}

