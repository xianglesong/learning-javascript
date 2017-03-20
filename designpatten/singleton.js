/**
 * Created by rollin on 17/1/24.
 */

function Person() {
    var d = new Date();
    console.log("d: " + d);
    this.createTime = d;
}

var instance
function getInstance() {
    if (!instance) {
        instance = new Person();
    }
    return instance;
}
console.log("instance:" + instance);
console.log("singleton:" + getInstance().createTime);

// sleep
function sleepFor(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) {
    }
}

function sleepThenAct() {
    sleepFor(2000);
    console.log("sleep!");
}

sleepThenAct();

//
var myBadSingleton = (function () {
    // 存储单例实例的引用
    var instance;

    return {
        getInstance: function () {
            if (!instance) {
                instance = new Person();
            }
            return instance;
        }
    };

})();

console.log(myBadSingleton.getInstance().createTime);
console.log(myBadSingleton.getInstance().createTime);