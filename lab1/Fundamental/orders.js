orders
import { EventEmitter} from 'node:events';
import { EventEmitter } from 'node:stream';

class OrderSystem extends EventEmitter{
    placeOrder(order){
        console.log(`order received : #${order.id} for ${order.customerName}`),
        console.log("Saving order to database");
        this.emit("orderPlaced",order);
    }
}

const orderObj = new OrderSystem()
//sending email
orderObj.on('orderPlaced',(order)=>{
    console.log(`Sending confirmation email to ${order.email}`)
});
//inventory service
orderObj.on('orderPlaced',(order)=>{
    order.forEach((item)=>{
        console.log(`Reducing stock of ${item.name}`);
    });
});
//shipping service
orderObj.on("OrderPlaced",(order)=>{
    console.log(`creating shipping label for order #${order.id}`);
});
//error
orderObj.on("error",(err)=>{
    console.log(`error in order ${err}`);
});

OrderSystem.placeOrder({
    id:"ORD10001",
    customerName:"Ramesh Solanki",
    email:"ramesh.sol27@gmail.com",
    items:[
        {name:"wireless mouse",qty:1},
        { name: "wireless headset", qty: 2 }
    ],
    total: 2399
});