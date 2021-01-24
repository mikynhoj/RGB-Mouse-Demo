document.addEventListener('mousemove',function(e){
    console.log(e.pageX,e.pageY);
    const r = Math.round(255*e.pageX / window.innerWidth);
    const b = Math.round(255*e.pageY / window.innerHeight);
    document.body.style.backgroundColor = `rgb(${r},0,${b})`; 
})