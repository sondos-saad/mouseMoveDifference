
let curser = document.querySelector('.curser');
addEventListener('mousemove', function(e){
    curser.style.cssText = `
        top:${e.y - 20}px;
        left:${e.x - 20}px;
        
    `
})