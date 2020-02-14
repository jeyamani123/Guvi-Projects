class calculator{
    number(){
        var num1 = parseInt(prompt('Enter number:'));
        var num2 = parseInt(prompt('Enter number:'));
        this.num1 = num1;
        this.num2 = num2;
    }
    addition(){
        return this.num1+this.num2;
    }
    subraction(){
        return this.num1-this.num2;
    }
    nultiplication(){
        return this.num1*this.num2;
    }
    division(){
        return this.num1/this.num2;
    }
}
var calc = new calculator();

while(true){
var input = parseInt(prompt('1.Addition 2.Subraction 3.Multiplication 4.Division 5.Reload'));
switch(input){
    case 1:
    calc.number();
    var result=calc.addition();
    alert("Addition :"+result);
    break;

    case 2:
    calc.number();
    var result=calc.subraction();
    alert("Subtraction :"+result);
    break;

    case 3:
    calc.number();
    var result=calc.multiplication();
    alert("Multiplication :"+result);
    break;

    case 4:
    calc.number();
    var result=calc.division();
    alert("Division :"+result);
    break;

    case 5:

        break;

    default:
    alert("Enter any valid choice");
}
}
