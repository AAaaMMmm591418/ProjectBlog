function Check(){
    var username = document.forms["form"]["ema"].value;
    var password = document.forms["form"]["pas"].value;
    if(username =="mnaralhrby378@gmail.com" && password == "3333"){
      window.location.href='Admin.html';
    alert("Login successfully!!")  

      //return false;
     
    }

     else{
       alert("Wrong information")  
     }
}

 function addToArray(){
     var title = document.getElementById("title").value;
     var content = document.getElementById("content").value;
     var post=[title ,content];
var cont=document.getElementById("ti");
cont.innerHTML=title;
var titl=document.getElementById("co");
cont.innerHTML=content;

window.location.href="Blog.html";
}