/**
 * TS 기본 자료형
 * npx tsc 명령어로 컴파일
 */


// TYPE : Boolean (true/false)
let isFlag: boolean = false;

// TYPE : Number
let decimal: number = 6; //10진수
let hex: number = 0xff00d; //16진수
let binary: number = 0b1010; //2진수
let octal: number = 0o744;

// TYPE : String
let user_name: string = "tony"; // Also you Can use single quotation like 'tony'
// String use backquot than you can use template string
let content: string =`This user name is ${user_name}`;
// -> Above syntax will change to var content = "This user name is ".concat(user_name);

// TYPE : Array
let fruit: string[] = ['apple', 'banana', 'melon'];
let generic_fruit: Array<number | string> = ['apple', 2+'apple', 3+'apple',22];
let json_list: object[] = [{uid: 1, name:"tony", age : 31}];


// TYPE : Tuple
let x: [string, number];
// Tuple init
x = ['tony', 31];
//  Also you can use index for handling  value
x[0] = 'yumi';
x[1] = 31;

// TYPE : Enum
enum Reservation_status {'wait', 'live', 'done', 'cancel'}
let now_status: Reservation_status =  Reservation_status.wait;
// console.log("Now Status "+now_status); You Should check complied js file. that have a amazing code
let status_index: string =  Reservation_status[1];//  Also you can use index for handling  value

//  Type : Any
let any_value: any = 31;
any_value = "문자열도 가능?";
any_value = false;
any_value = [];

// Type : Void
function display(message: string): void{
  // This function is not return value
  alert(message);
}

// Type : Null And Undifined
let u: undefined = undefined;
let n: null = null;

// Type : Never (You can use exception process)
function error(message: string): never{
  throw new Error(message);
}


// Function Example 
function sum(x:number, y: number): number{
  //This function is only allow number parameters, And also return value is only number type
  return x+y;
}


// Interface With Class
interface Cars{
  getColor(): string;
  getBrand(): string;
}

// Class
class brand implements Cars {
  //set member value
  brand: string;
  color: string;
  
  constructor(brand: string, color: string) {
    this.brand = brand;
    this.color = color;
  }

  getColor(): string{
    return this.brand +" | "+ this.color; 
  }

  getBrand(): string{
    return this.brand +"has "+this.color; 
  }
}

const car_gallery: Cars[] = [new brand('Benz', 'red'), new brand('BMW', 'white')];

car_gallery.forEach(car_gallery => {
  console.log(car_gallery.getBrand());
});