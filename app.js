// let d=new Date();

// alert(d.);

// let x=Math.round(4.1);
// alert(x);

// let n=Math.random();
// let x=Math.round(n);

// alert(x);

// --------------------------------------------------------------------
// let cus=[{
//     name:"oshan",
//     age:"29",
//     address:"meegoda"
// },
// {
//     name:"duahn",
//     age:"30",
//     address:"liyanvala"
// }]
// console.log(cus);

// let json=JSON.stringify(cus);
// console.log(json);

// console.log(JSON.parse(json));
// -------------------------------------------------------------------

// let fun=function(){
//     console.log("hi");
// }

// let fun=(value)=>{
//     return "Hellow Arrow "+value;
// }

// console.log(fun(10));

// let arrow=val=>{
//     return "hi "+val;
// }
// console.log(arrow(10));

function getRandomNumer(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1));
}

let r = getRandomNumer(1, 20);
console.log(r);

let att = 0;
function submit() {
  if (att < 3) {
    let n = document.getElementById("input").value;

    if(n==""){
        alert("Please enter a number !!");

    }else{
        if (r == n) {
            alert("Congratulations .....You won!!!");
          } else {
            if (r < n) {
              alert("Too High Value");
              document.getElementById("input").value = "";
            } else {
              alert("Too Small Value");
              document.getElementById("input").value = "";
            }
          }
          att++;
    }
    
  } else {
    alert("You Lost !!!!!,Your 3 attemp is finished. and Number is " + r);
  }
}
