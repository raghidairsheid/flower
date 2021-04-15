
var userChoice = prompt('Do you love flower? yes / no ');
console.log(userChoice);

while (userChoice !== 'yes' && userChoice !== 'no'){
  userChoice = prompt('Do you love flower? yes / no ');
}
if(userChoice == 'yes'){
  document.write("<h1>many thanks ^_^ </h1>");
}
else if(userChoice == 'no'){
  document.write('<p> Why? >_< </p>');
}

var namePic = prompt('please enter name of picture:(sunflower , camellia  , star )? ');

var numPic = prompt('how many pictures do you want apper? ');

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


var num1 =Number(prompt('please enter your Age: '));
 if(num1 >= 20 && num1 <=100)
 {
   document.write('amazing your Age,' + num1 +' the whole lifetime *_* ' + "<br>");
 }
 else if(num1 <20){
   document.write('<p>your Age less than 20 @_@</p>');
 }



/* function myFunction() {
  var flowerName = "Sapphire flower";
  document.write('this is my function :' + flowerName +"<br>");
  var image6 ='<img src="img/sapphire.jpg"/>' ;
    document.write(image6);
}

alert('wlcome to my website');
var userName= prompt('please enter your name: ');
console.log(userName);

document.write('<h1>Flowers</h1>');



var age = prompt('please enter Age: ');
var name = prompt('please enter a flower type(sunflower , camellia  , star )?');

if(name == 'camellia')
{
   document.write('<h5> camellia Flowers</h5>');
  var image2 = '<img src="https://th.bing.com/th/id/OIP.9doxYfXROHvHnMEFOL3a6wHaE6?w=253&h=180&c=7&o=5&pid=1.7" alt="Camellia" /> ';
 document.write(image2);
}
else if (name != 'star' || name != 'sunflower' || name != 'camellia' )
{
  document.write('<p>please enter the right name of flower</p>');
}


prompt('please enter Age and type of flower(sunflower , camellia  , star ): ');
if (age == 2 && (name == 'sunflower' || name == 'star' || name == 'camellia'))
{
    var image4 ='<img src="img/sunflower.jpg"/>' ;
    document.write("<br>" + "<br>" + image4);
}
else{
 document.write('<p>please enter the right Age and name of flower</p>');
}


document.write("<br>");

var number= prompt('please enter  number: ');

if(number >= 2)
{
  document.write('<p>true</p>');
  myFunction();
}
else
{
  document.write('<p>false</p>');
}
*/