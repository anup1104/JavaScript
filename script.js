var input = document.querySelector('input');
var data = [
    {name:"Shyam", src: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG90cmFpdCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Harsh", src: "https://images.unsplash.com/photo-1710438597462-32b8fabf8dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvdHJhaXQlMjBtYW4lMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Bob", src: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"William", src: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}   
]




input.addEventListener("input",()=>{
  var  match =  data.filter((e)=>{
        return e.name.startsWith(input.value);
    })
var per = "";
    match.forEach((elem)=>{
        per+=`
             <div  id="person1">
                   <div class="per"><img src="${elem.src}" alt="">
                   </div>
                   <p>${elem.name}</p> 
                </div>
        `;
    })
    document.querySelector('#container').innerHTML = per;
    


})




