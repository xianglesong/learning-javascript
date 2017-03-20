/**
 * Created by rollin on 17/1/24.
 */
// 父构造函数
function CarMaker() {
}

// 所有子类通用方法
CarMaker.prototype.drive = function () {
    console.log("Vroom, I have " + this.doors + " doors");
};

// 静态工厂方法 子类无法继承
CarMaker.factory = function (type) {
    var constr = type, newcar;

    console.log("type: " + type);

    // 如果构造函数不存在，则发生错误
    if (typeof CarMaker[constr] !== "function") {
        throw {
            name: "Error",
            message: constr + " doesn't exist"
        };
    }

    // 继承父类，但仅继承一次
    if (typeof CarMaker[constr].prototype.drive !== "function") {
        console.log("constr: " + constr);
        CarMaker[constr].prototype = new CarMaker();
    }

    newcar = new CarMaker[constr]();

    return newcar;
};

// 定义不同的子对象
CarMaker.Compact = function () {
    this.doors = 4;
};
CarMaker.Convertible = function () {
    this.doors = 2;
};
CarMaker.SUV = function () {
    this.doors = 24;
};

// 测试
var corolla = CarMaker.factory('Compact');
var solstice = CarMaker.factory('Convertible');
var cherokee = CarMaker.factory('SUV');
corolla.drive();
solstice.drive();
cherokee.drive();

//Vroom, I have 4 doors
//Vroom, I have 2 doors
//Vroom, I have 24 doors

var t = new CarMaker["Convertible"]();
t.drive();

var x = new CarMaker();
x.drive();

var y = new CarMaker("SUV");
y.drive();