function rejectAfterSecond(){
    return new Promise((_ ,reject)=>{
        setTimeout(()=>{
            reject("something went wrong");
        },1000)
    });
}
rejectAfterSecond().catch((error)=>{
    console.log(error)
})