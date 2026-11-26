//task 2
import { log } from "console";
import fs from "fs/promises";

const writeData = async ()=>{
    try{
        console.log("about to write...");
        await fs.writeFile('stud.txt',"Name: Raman Singh");
        console.log("file wrtitten");
    } catch (error) {
        console.error(error);
    }
};
const f1=()=>{
    console.log("f1");
};
const f2 = ()=>{
    console.log("f2");
};
const main = ()=>{
    console.log("main");
    setTimeout(f1,0);
    setImmediate(f2);
    process.nextTick(f2);
    console.log("end");
};
main();
//promise