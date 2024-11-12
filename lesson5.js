
for (let i = 0; i < catalog.length; i++) {
 catalog[i]["id"]=100+i; 
}
function Name1() {
    let st=  document.querySelector("#text").value;
    let arr=catalog.filter((x)=>x.title.includes(st));
    console.log(arr);
    print(arr);
}
function f1() {
    let arr2=catalog.map(p => p.country);
    let arr3=arr2.filter((item, index) => !arr2.includes(item, index + 1)).sort()
    console.log(arr3);
    for (let i = 0; i < arr3.length; i++) {

      document.querySelector("#country").innerHTML+= "<Option>"+arr3[i]+"</Option>";       
    }   
   
}
f1()
function f2() {
    let st=  document.querySelector("#country").value; 
    console.log(st) ;
    let arr=catalog.filter((x)=>x.country==st);
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        document.querySelector("#show").innerHTML+="<br></br>"+ arr[i].title;        
      }   
print(arr);
}
function f3() {
    let n1=  document.querySelector("#n1").value; 
    let n2=  document.querySelector("#n2").value; 
    let arr5=catalog.find((x)=>x.year>=n1&&x.year<=n2);
    console.log(arr5); 
        document.querySelector("#show").innerHTML+= arr5.title;  
        print(arr5);      
}

function print(arr) {
    
 let tb=arr.map(x=>"<tr>"+
 "<td>"+ x.title+"</td>"+
"<td>"+ x.artist+"</td>"+
 "<td>"+ x.country+"</td>"+
"<td>"+ x.company+"</td>"+
"<td>"+ x.price+"</td>"+
"<td>"+ x.year+"</td>"+
"</tr>")
document.querySelector("#tb").innerHTML=tb;
}


function add() {
    let title=  document.querySelector("#title").value; 
    let artist=  document.querySelector("#artist").value; 
    let country=  document.querySelector("#country").value; 
    let company=  document.querySelector("#company").value; 
    let price=  document.querySelector("#price").value;    
    let year=  document.querySelector("#year").value; 

    catalog.push();
}



