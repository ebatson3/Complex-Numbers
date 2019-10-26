//The prototype function 'ComplexNumberPrototype' contains the real and imaginary parts of the number
let ComplexNumberPrototype={
    real:0, //Declaring variables to represent the real/imaginary parts of the number
    imag:0,
    print: function print () { //Print function to output the number
        console.log(this.real + " + " + this.imag + " i ");
    }
};

//function returning object of template that contains both imaginary and real numbers
//This function
function createComplexNumber(r,i)
{
    let complexNum=Object.create(ComplexNumberPrototype);
    complexNum.real=r;
    complexNum.img=i;
    return complexNum;
}
//complexNumber is used to call the createComplexNumber function with parameters r and i
let complexNumber=createComplexNumber(4, 6);
complexNumber.print();

//This function constructs another complex number
//Inner functions are used to execute simple arithmetic operation on 2 complex numbers
//Real part = sum(real 1, real 2)
//Imaginary part = sum(imag 1, imag 2)
function ConstructorFunction(real,imag){
    this.real=real;
    this.img=imag;
    this.print=function(){
        console.log(this.real+ " + " + this.imag+ " i ");
    }

    this.add=function(object2){
        let addResultReal=object2.real+this.real;
        let addResultImag=object2.imag+this.imag;

        let addResultComplex=createComplexNumber(addResultReal, addResultImag);
        return addResultComplex;
    };

    this.subtraction=function(object2){
        let subResultReal=this.real-object2.real;
        let subResultImag=this.imag-object2.imag;

        let subResultComplex=createComplexNumber(subResultReal, subResultImag);
        return subResultComplex;
    };

    this.division=function(object2){
        let divResultReal=((this.real*object2.real)+(this.imag*object2.imag))/((object2.real*object2.real)+(object2.imag*object2.imag));
        let divResultImag=((this.imag*object2.real)-(this.real*object2.imag))/((object2.real*object2.real)+(object2.imag*object2.imag));

        let divResultComplex=createComplexNumber(divResultReal, divResultImag);
        return divResultComplex;
    };

    this.multiplication=function(object2){
        let multResultReal=((this.real*object2.real)-(this.imag*object2.imag));
        let multResultImag=((this.real*object2.imag)+(this.imag*object2.real));

        let multResultComplex=createComplexNumber(multResultReal, multResultImag);
        return multResultComplex;
    };
}
//Testing program using inputs 2 and 8 to call the constructor function
let object1=new ConstructorFunction(2, 8);
//Printing this result
object1.print();