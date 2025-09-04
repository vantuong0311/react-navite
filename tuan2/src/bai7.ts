import { simulateTask1 } from "./bai6";

const pr1= simulateTask1(1000,"X");
const pr2= simulateTask1(2000,"Y");
const pr3 = simulateTask1(1500,"Z")

Promise.race([pr1,pr2,pr3]).then((firstResult)=>{
    console.log("first task comleted: ",firstResult)
})
.catch((error)=>{
    console.log("loi",error)
})