function append(){
    let data=JSON.parse(localStorage.getItem("students"))||[]
  let cont=document.getElementById("cont")
    data.forEach(function(el){
    let div=document.createElement("div")
  let img=document.createElement("img")
   img.src=el.image;
   let p=document.createElement("p")
   p.innerText=el.name;
  div.append(img,p)
  cont.append(div)
   });
   
}
append()