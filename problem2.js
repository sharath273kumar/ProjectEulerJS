var num1 = 1;
var num2 = 2;
var sum = 2;

while(sum < 4000000) {
	var num3 = num1 + num2;
    if(num3 % 2 === 0) {
    	sum += num3;
    }
    num1 = num2;
    num2 = num3;
}