export function simulateTask1(time: number, label: String): Promise<String>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`task ${label} done after ${time} ms`)
        },time)
    });
}

const promise1 = simulateTask1(1000,"A");
const promise2 = simulateTask1(2000,"B");
const promise3 = simulateTask1(1500,"C");

Promise.all([promise1,promise2,promise3]).then((rs)=>{
    console.log("All tasks comleted:");
    rs.forEach((rs)=>{
        console.log(`${rs}, `)
    })
}).catch((error)=>{
    console.log("One of the tasks failed",error)
})
