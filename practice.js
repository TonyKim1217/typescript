"use strict";
/**
 * TS 기본 자료형
 * npx tsc 명령어로 컴파일
 * node [script]파일 명으로 실행
 */


// TYPE : Boolean (true/false)
var isFlag = false;
// TYPE : Number
var decimal = 6; //10진수
var hex = 0xff00d; //16진수
var binary = 10; //2진수
var octal = 484;
// TYPE : String
var user_name = "tony"; // Also you Can use single quotation like 'tony'
// String use backquot than you can use template string
var content = "This user name is ".concat(user_name);
// -> Above syntax will change to var content = "This user name is ".concat(user_name);
// TYPE : Array
var fruit = ['apple', 'banana', 'melon'];
var generic_fruit = ['apple', 2 + 'apple', 3 + 'apple', 22];
var json_list = [{ uid: 1, name: "tony", age: 31 }];
// TYPE : Tuple
var x;
// Tuple init
x = ['tony', 31];
//  Also you can use index for handling  value
x[0] = 'yumi';
x[1] = 31;
// TYPE : Enum
var Reservation_status;
(function (Reservation_status) {
    Reservation_status[Reservation_status["wait"] = 0] = "wait";
    Reservation_status[Reservation_status["live"] = 1] = "live";
    Reservation_status[Reservation_status["done"] = 2] = "done";
    Reservation_status[Reservation_status["cancel"] = 3] = "cancel";
})(Reservation_status || (Reservation_status = {}));
var now_status = Reservation_status.wait;
// console.log("Now Status "+now_status); You Should check complied js file. that have a amazing code
var status_index = Reservation_status[1]; //  Also you can use index for handling  value
//  Type : Any
var any_value = 31;
any_value = "문자열도 가능?";
any_value = false;
any_value = [];
// Type : Void
function display(message) {
    // This function is not return value
    alert(message);
}
// Type : Null And Undifined
var u = undefined;
var n = null;
// Type : Never (You can use exception process)
function error(message) {
    throw new Error(message);
}
// Function Example 
function sum(x, y) {
    //This function is only allow number parameters, And also return value is only number type
    return x + y;
}
// Class
var brand = /** @class */ (function () {
    function brand(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    brand.prototype.getColor = function () {
        return this.brand + " | " + this.color;
    };
    brand.prototype.getBrand = function () {
        return this.brand + " can make " + this.color;
    };
    return brand;
}());
var car_gallery = [new brand('Benz', 'blue'), new brand('Benz', 'red'), new brand('BMW', 'white'),];
car_gallery.forEach(function (car_gallery) {
  console.log(car_gallery.getBrand());
});

