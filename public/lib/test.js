$('#su').click(function(e){
    let m = JSON.parse(JSON.stringify(e))

})

let ev = document.createEvent('Event')
ev.clientX = 629
ev.clientY = 40;
ev.offsetX = 16;
ev.offsetY = 26;
ev.which = 1;
ev.originalEvent = {}
ev.initEvent('click',true,true)
$('#su')[0].dispatchEvent(ev)

