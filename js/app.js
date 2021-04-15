

var userChoice = prompt('Do you love flower? yes / no ');
console.log(userChoice);

while (userChoice !== 'yes' && userChoice !== 'no'){
  userChoice = prompt('Do you love flower? yes / no ');
}
if(userChoice == 'yes'){
  document.write("<h1>very beautiful ^_^ </h1>");
<<<<<<< HEAD
  var namePic = prompt('please enter name of picture:(sunflower , camellia  , star )? ');
  var numPic = prompt('how many pictures do you want apper? ');
  var num1 =Number(prompt('please enter your Age: '));
=======
>>>>>>> 91660979a3235e37cabe05699dd7fd9f8d3a9108
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

