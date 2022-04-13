let userList = []
let userListProxy = new Proxy(userList,{
    set(target,property,value,receiver){
        console.log('arguments-->',...arguments)
       const res =  Reflect.set(...arguments)
       let u = Reflect.get(target,property,receiver)
       console.log('get ----> > > ',u)
        watchUser(u)
        return res;
    }
})
class User {
    constructor ( name ){
        this.name = name ;
    }
    getName (){
        return this.name;
    }
}
let proxyUser = new Proxy ( User , {
    construct (){
        let newUser = Reflect.construct(...arguments);
        userListProxy.push( newUser )
        return newUser;
    }
} )

function watchUser(d){
    typeof d == 'object' && console.log( d.getName())
}
let u1 = new proxyUser('潘永永');
let u2 = new proxyUser('范围为');


new Promise ((res,rej)=>{
    setTimeout(()=>{
        res(1)
    },1000)
}).then((r)=>{
    console.log(r)
    return new Promise((res,rej)=>{
        rej('haha')
    })
})
.then(()=>{},(r)=>{
    console.log(r)
})
.then(()=>{
    console.log('ok')
},()=>{
    console.log('not ok')
})
.catch((e)=>{
    console.log('catch',e)
})

Promise.resolve(1).then((r)=>{console.log(r);throw new Error('laji')}).catch((e)=>{console.log('err',e)})


function clickBd ( time = 10 ){
    function baidu(){
        let ev1 = new PointerEvent("pointerdown",
        {
            pointerId: 1,
            bubbles: true,
            cancelable: true,
            pointerType: "mouse",
            width: 1,
            height: 1,
            isPrimary: true,
            type : 'pointerdown',
            pressure: 0.5
        }
    );
    let ev2 = new PointerEvent("pointerup",
        {
            pointerId: 1,
            bubbles: true,
            cancelable: true,
            pointerType: "mouse",
            width: 1,
            height: 1,
            isPrimary: true,
            type : 'pointerup',
            pressure:0
        }
    );
        let ev3 = document.createEvent('MouseEvents');
        ev3.initMouseEvent('click',true,true,document.defaultView,1,661,142,661,31,false,false,false,false,false);
      
        $("#su")[0].dispatchEvent(ev1);
        $("#su")[0].dispatchEvent(ev2);
        $("#su")[0].dispatchEvent(ev3);
        console.log("点击了一次")
    }
    let timeId = setInterval(()=>{
        baidu()
    },5000)
    setTimeout(()=>{
        timeId && clearInterval(timeId)
        console.log('取消了点击')
    },time * 1000)
}



