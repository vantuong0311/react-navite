Promise.resolve(2).then(num=>{
    console.log("bat dau",num);
    return num*num;
}
).then(num=>{
    console.log(" sau khi binh phuong",num);
    return num*2;
})
.then(num=>{
    console.log(" sau khi nhan doi", num);
    return num + 5;
})
.then(rs=>{
    console.log("ket qua cuoi cung", rs)
})
.catch(err=>{
    console.log("loi", err)
})
