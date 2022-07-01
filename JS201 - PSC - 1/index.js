 //document.querySelector("form").addEventListener("submit",storeData)
 function Student(n,c,u,i,b){
    this.name=n;
    this.course=c;
    this.unit=u;
    this.image=i;
    this.batch=`Ft-web${b}`;
    
}
//let stuLS=
function storeData(e){
e.preventDefault()
//console.log("work")
let form = document.getElementById("studen_data");
let name= form.name.value
let course= form.course.value;
let unit = form.unit.value;
let image = form.image.value;
let batch = form.batch.value;

let s1= new Student(name,course,unit,image,batch)
//console.log(name,course,unit,image,batch)
//console.log(s1)
let data=JSON.parse(localStorage.getItem("students"))||[]
data.push(s1)
localStorage.setItem("students",JSON.stringify(data))
console.log(s1)
}
function cal(){
//first tak a data from ls
let data=JSON.parse(localStorage.getItem("students"))||[]   
//let arr=[];
let obj={};
for(let i=0; i<data.length; i++){

  if(!obj[data[i].batch]){
    obj[data[i].batch]=1;
  }
}
console.log(obj)
}
cal()