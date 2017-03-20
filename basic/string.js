/**
 * Created by rollin on 17/1/24.
 */

var s = "test";
var o = "test";

console.log(s == o);
console.log(s.length);

console.log(s.substring(2));
s = "one;two;three";
console.log(s.split(";").length);

var x = s.split(";");

for (var y in  x) {
    console.log("char: " + y)
}