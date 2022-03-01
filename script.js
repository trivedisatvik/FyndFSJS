// var a=50;
// a+=5;
// console.log(a);
// a-=5;
// console.log(a);
// a*=5;
// console.log(a);
// a/=5;
// console.log(a);
// a%=5;
// console.log(a);
// if(2>3){
//     console.log("falsy");
// }
// else{
//     console.log("truthy");
// }
// if(null){
//     console.log("falsy");
// }
// else{
//     console.log("truthy");
// }
// if(1){
//     console.log("falsy");
// }
// else{
//     console.log("truthy");
// }
// if(NaN){
//     console.log("falsy");
// }
// else{
//     console.log("truthy");
// }
// console.log(23+10);
// console.log(23+"10");
// console.log("23"+10);
// console.log(23-10);
// console.log(23-"10");
// console.log("23"-10);
// console.log("23"-"10");
// console.log(typeof(3.14));
// var sub = (a,b) =>a-b;
// console.log(sub(5,3));
// var convert = cel=> cel * 9/5 + 32;
// console.log(convert(60)); 
// var dayy=-1
let counter = 0
function add(){
    
    return function(){
        counter+=1
        
        return counter
    }
}

  function Day(dayy=-1){
     switch (dayy){
          case 0:
              console.log("Sunday");
              break;
          case 1:
              console.log("Monday");
              break;
          case 2:
              console.log("Tuesday");
              break;
          case 3:
              console.log("Wednesday");
              break;
          case 4:
              console.log("Thursday");
              break;
          case 5:
              console.log("Friday");
              break;
          case 6:
              console.log("Saturday");
              break;
          default:
              x = add();
              y=x();
              if(y==1){
                  console.log("Hey you have not given me any value!!!")
              }
              else{
                  console.log("Still you have not given me any value!!!")
              }
              break;
        
      }
  } 
  Day(0); 
  Day(1); 
  Day(2); 
  Day(3); 
  Day(4); 
  Day(5); 
  Day(6); 
  Day();
  Day();
//   function myname(x) {
//     return function(y) {
//       return x + y;
//     };
//   }

  
//   var fullname = myname("Satvik ");
  
  
//   console.log(fullname("Trivedi")); 
  
//   function myname() {
//     var x=1;
//     return function(y) {
            
//           return x++ + y;
     
//     }
//   }
  

//   var fullname = myname();
//   console.log(fullname(1));

// function addd(){
//     let count = 0
//     return function(){
//         count+=1
        
//         return count
//     }
// }
//  function CountRefreash(){
        
//      return function(){
//          f=add()
//          console.log(f());
//      }

//  }

//  y=CountRefreash()
//  y()
// testthis();
// function testthis(){
//     name="satvik";
//     console.log(name);
// }
let arrayy=[11,2,3,12,6,7]
// let iterable=arrayy.entries()
// arrayy.slice()
// console.log(iterable.next().value)

// console.log(iterable.next().done)
// console.log(iterable.next().value)

// console.log(iterable.next().done)
// for(let items of iterable)
// console.log(items);
// console.log(arrayy.filter(item=>item>=5).sort((a,b)=>a-b))
// console.log(arrayy)
// console.log(arrayy.reduce(((acuumulator,items)=>acuumulator+items),0))\
// let arraytoTest = [
//     {
//       studentsName: "Dazzlercool",
//       favouriteVideoGame: "DOTA2",
//       rank: "divine",
//       randomNumber: 7,
//     },
//     {
//       studentsName: "Mayank",
//       favouriteVideoGame: "Sonic",
//       rank: "Pro",
//       randomNumber: 3,
//     },
//     {
//       studentsName: "Alok",
//       favouriteVideoGame: "Mario",
//       rank: "Expert",
//       randomNumber: 8,
//     },
//     {
//       studentsName: "Satvik",
//       favouriteVideoGame: "Ludo",
//       rank: "Master",
//       randomNumber: 5,
//     },
//     {
//       studentsName: "Deepak",
//       favouriteVideoGame: "PUBG",
//       rank: "Conquerer",
//       randomNumber: 12,
//     },
//   ];


//   let newArray=arraytoTest.map(({studentsName,randomNumber})=>({studentsName,randomNumber})).sort((a,b)=>a.randomNumber-b.randomNumber);

// newArray.forEach(element => {
//     console.log(element.studentsName)
    
// });
let Users = [
    {
      id: 1,
      name: "Naman",
      leaves: [
        {
          id: 1,
          reason: "Party",
          dates: ["2022-02-25", "2022-02-24"],
        },
        {
          id: 2,
          reason: "Movie",
          dates: ["2022-02-20", "2022-02-21", "2022-02-22"],
        },
      ],
    },
    {
        id:2,
        name:"sarthak",
        leaves:[
            {
                id:1,
                reason:"Class",
                dates:["2022-02-22","2022-02-23"]
            },
            {
                id:2,
                reason:"Holiday",
                dates:["2022-02-10","2022-02-11","2022-02-12"]
            }
        ]
  
  
    },
    {
        id:3,
        name:"vedansh",
        leaves:[
            {
                id:1,
                reason:"Party",
                dates:["2022-02-22","2022-02-23","2022-02-24","2022-02-25"]
            },
            {
                id:2,
                reason:"Vaccation",
                dates:["2022-02-26"]
            }
        ]
  
  
    }
  
  ];
  var a=new Date("2022-02-23");
 var b=new Date("2022-02-26");
 var d = new Date();
 function today(a=new Date(d.getFullYear(),d.getMonth(),1),b=new Date(d.getFullYear(),d.getMonth()+1,0)){
     return(Users.map(item=>{return{id:item.id,name:item.name,leaves:item.leaves.map(pq=>{
         return{id:pq.id,reason:pq.reason,dates:pq.dates.filter(x=>new Date(x)>a && new Date(x)<b)}
     }).filter(j=>j.dates.length>0)}}).filter(k=>k.leaves.length>0))
 }
 console.log(today(a,b));
 
 console.log(today());
 console.log(today(a));
 
 