
var number=0;
var obj;
var url = 'url.json';

function processData(data) 
{
	  obj=data;  
}

function handler() 
{
    if (this.readyState == this.DONE) {
      if (this.status == 200) 
	{
        try {
          processData(JSON.parse(this.responseText));
        } catch(ex) {
          console.log(ex.message);
        }
      }
    }
}

function ajax() 
{
    var client = new XMLHttpRequest();
    client.onreadystatechange = handler;
    client.open('GET', url);
    client.send();
}

    


function NextPage()
{
	var obj=eval("("+txt+")");
	number+=1;
	if (number>=obj.photo.length)
		number=0;
	document.getElementById("newsphoto").innerHTML=("<img src='img/"+obj.photo[number]+"'>");

}

function PreviousPage()
{
	var obj=eval("("+txt+")");
	number-=1;
	if (number<0)
		number=obj.photo.length-1;
	document.getElementById("newsphoto").innerHTML=("<img src='img/"+obj.photo[number]+"'>");

}


function scroll()
{
	var second=5000;
	setInterval('NextPage()',second);	
}


function showphoto()
{
	ajax();
	document.getElementById("newsphoto").innerHTML=("<img src='img/"+obj.photo[number]+"'>");

	scroll();
		
}