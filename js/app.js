function myFunction() {
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
