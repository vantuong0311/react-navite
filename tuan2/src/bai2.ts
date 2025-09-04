function getNumberAfterOneSecond(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(10);
        },1000);
    });

}

getNumberAfterOneSecond().then((rs)=>{
    console.log(rs)
})