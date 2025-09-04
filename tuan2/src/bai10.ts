function example(success: boolean): Promise<String>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(success){
                resolve("thanh cong")
            }else {
                reject("that bai")
            }
        }, 1000);
    })
}
example(true).then((rs)=>{
    console.log(rs)
}).catch((err)=>{
    console.log("loi", err)
})
.finally(()=>{
    console.log("Done")
})

example(false).then((rs)=>{
    console.log(rs)
}).catch((err)=>{
    console.log("loi", err)
})
.finally(()=>{
    console.log("Done")
})