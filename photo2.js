
var number=0;
var obj;

$(document).ready(function() {  
    $.ajax({  
        type:"GET",  
        url:"url.json",  
        dataType: "json",  
        success: function(data){  
            $.each(data,function(i,item){  
                var content=item.name+","+item.email+","+item.gender+  
","+item.hobby[0]+","+item.hobby[1]+"</br>";  
                $("#result").append(content);  
            })  
        }  
    })  
});      


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
	document.getElementById("newsphoto").innerHTML=("<img src='img/"+obj.photo[number]+"'>");

	scroll();
		
}