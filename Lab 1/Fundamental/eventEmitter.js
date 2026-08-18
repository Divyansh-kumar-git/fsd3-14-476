import {EventEmitter} from 'node:events';

const sayHi = (name) =>{
    console.log(`${name} logged in`);
};

const task = new EventEmitter();

task.once("greet",()=>{
    console.log("System started");
});

task.on('greet', sayHi);
task.on("greet",(name) =>{
    console.log(`${name} starts working`);

});
task.on("greet",(name) =>{
    console.log(`${name} Logged out`)
});
task.once("exit",(name)=>{
    console.log(`system shutdown by ${name}`);
});
task.emit("greet", "Rahul Singh");
console.log();
task.off("greet",sayHi);//must have function name
task.emit("greet","Manish Sinha");
console.log();
task.emit("exit","Manager");
task.emit("exit","Empliyee");//won't affect
console.log("total listner", task.listenerCount("greet"));
task.removeAllListeners();

