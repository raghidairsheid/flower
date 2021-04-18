var userChoice = prompt('Do you love flower? yes / no ');
console.log(userChoice);


var namePic;
// = prompt('please enter name of picture:(sunflower , camellia  , star )? ');
var numPic;
// = prompt('how many pictures do you want apper? ');
    
uch();

function uch(){  
  if(userChoice == 'yes'){
      document.write("<h1>very beautiful ^_^ </h1>");
      namePic = prompt('please enter name of picture:(sunflower , camellia  , star )? ');
      numPic = prompt('how many pictures do you want apper? ');

      document.write('<p>This name of picture </p>' + "<br>");
      nPic(namePic); 
      document.write('<p>************************************</p>');
      countfl(numPic);
    }
    else if(userChoice == 'no'){
      document.write('<p> Why, i hope you cgange your mind? >_< </p>');
    }
}


function nPic(namePic){
if(namePic == 'sunflower')
    {
      var image1 ='<img src="img/sunflower.jpg"/>' ;
      document.write("<br>" + "<br>" + image1  + "<br>");
    }
    else if(namePic == 'camellia'){
        var image2 = '<img src="https://th.bing.com/th/id/OIP.9doxYfXROHvHnMEFOL3a6wHaE6?w=253&h=180&c=7&o=5&pid=1.7" alt="Camellia" /> ';
        document.write("<br>" + image2+ "<br>");
    }
    console.log(namePic);
    return nPic;
}

function countfl(numPic){
  for(var i=0; i<numPic; i++){
    nPic(namePic);   
  }
  document.write("<br>" + 'The count of loop: '+ i + "<br>");
  console.log(numPic);
  return numPic;
}

var fun1 = function(){
  var a = prompt('your age is: ');
  //console.log(a);
  return a; 
}

var b =fun1();
console.log(b);

var fun2 = function(flo){
  var c = prompt('like ' + flo);
  //console.log(flo);
  return flo;
}
var d = fun2('sunflower');
console.log(d);



/*
var userChoice = prompt('Do you love flower? yes / no ');
console.log(userChoice);

while (userChoice !== 'yes' && userChoice !== 'no'){
  userChoice = prompt('Do you love flower? yes / no ');
}
if(userChoice == 'yes'){
  document.write("<h1>very beautiful ^_^ </h1>");

  var namePic = prompt('please enter name of picture:(sunflower , camellia  , star )? ');
  var numPic = prompt('how many pictures do you want apper? ');
  var num1 =Number(prompt('please enter your Age: '));


}
else if(userChoice == 'no'){
  document.write('<p> Why, i hope you cgange your mind? >_< </p>');
}





for(var i=0; i<numPic; i++){
 
 if(namePic == 'sunflower')
    {
      var image1 ='<img src="img/sunflower.jpg"/>' ;
      document.write("<br>" + "<br>" + image1  + "<br>");
    }
    else if(namePic == 'camellia'){
        var image2 = '<img src="https://th.bing.com/th/id/OIP.9doxYfXROHvHnMEFOL3a6wHaE6?w=253&h=180&c=7&o=5&pid=1.7" alt="Camellia" /> ';
        document.write("<br>" + image2+ "<br>");
    }
   
}
 document.write("<br>" + 'The count of loop: '+ i + "<br>");
 console.log(namePic);



 if(num1 >= 20 && num1 <=100)
 {
   document.write('amazing your Age, ' + num1 +' the whole lifetime *_* ' + "<br>");
 }
 else if(num1 <20){
   document.write('<p>your Age less than 20 @_@</p>');
 }
*/
