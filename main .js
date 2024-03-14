
let curser = document.querySelector('.curser');
addEventListener('mousemove', function(e){
    curser.style.cssText = `
        top:${e.y - 50}px;
        left:${e.x - 50}px;
        
    `
})