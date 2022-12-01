



function myFunction(a, b) {

let objeto = new Object();
  
for (let i = 0; i < a.length; i++) {
    let indice = a[i];
    objeto[indice] = b[i];    
  }

  
  return objeto;


  }  
 

  console.log(myFunction(['a','b','c'],[1,2,3]));
  console.log(myFunction(['a','b','c'],[1,() => {}, {name: 'khriztian'}]));
  console.log(myFunction(['name','hobbies','isAdmin'],['khriztian',['music', 'tv series'], false]));