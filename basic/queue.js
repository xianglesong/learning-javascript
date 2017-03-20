/**
 * Created by rollin on 17/1/24.
 */
var queue = [];
queue.push(2);         // queue is now [2]
queue.push(5);         // queue is now [2, 5]

var i = queue.shift(); // queue is now [5]
console.log(i)

i = queue.shift();
console.log(i)