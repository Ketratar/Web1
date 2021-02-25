
var btn = document.getElementById("btn");
var types = document.getElementsByName('type');
//Дальше идут проверки
//Если мы пишем породу и он ее не находит, то написано неправильно
//Иначе получаем рандом картинку с собачкой ^_^

btn.addEventListener("click", function() {
	//Очищаем содержимое, если было
	document.getElementById("pics").innerHTML = '';
	
	//Проверка на выбранный пункт
	if(types[0].checked)
	{
		resulttxt();
	}
	else
	{
		resulttxt2();
	}
});

function resulttxt()
{
	var text = document.getElementById("txt2");
	var request = new XMLHttpRequest();
	request.open('GET', 'https://dog.ceo/api/breed/' + text.value.toLowerCase() + '/images/random');
	request.onload = function()
	{
		var data = JSON.parse(request.responseText);
		console.log(data.message);
		
		var img = document.createElement('IMG');
		img.src = data.message;
		img.width = 500;
		img.height = 500;
		document.getElementById("pics").appendChild(img);
	};
	request.send();
	
}

function resulttxt2()
{
	var q = document.getElementById('poloska').value;
	var request2 = new XMLHttpRequest();
	console.log(q);
	request2.open('GET', 'https://dog.ceo/api/breeds/image/random/'+ q);
	request2.onload = function() {
		var data2 = JSON.parse(request2.responseText);
		console.log(data2.message);
		
		//Кто же не любит большое кол-во собак? Конечно, никто.
		for (var i = 0; i < q; i++)
		{
			var img = document.createElement('IMG');
			img.src = data2.message[i];
			img.width = 500;
			img.height = 500;
			document.getElementById("pics").appendChild(img);
		}
	};
	request2.send();
}


function changething()
{
	document.getElementById("pics").innerHTML = '';
	var types = document.getElementsByName('type');
	if(types[1].checked) 
	{
		document.getElementById('txt2').value = "";
		document.getElementById('txt').hidden = true;
		document.getElementById('poloska').hidden = false;
		document.getElementById('txt3').hidden = false;
		document.getElementById('number').hidden = false;		
	}
	else
	{
		document.getElementById('poloska').hidden = true;
		document.getElementById('txt3').hidden = true;
		document.getElementById('number').hidden = true;
		document.getElementById('txt').hidden = false;
	}
}

function changething2()
{
	var plsk = document.getElementById('poloska').value;
	var label = document.getElementById('number');
	label.innerHTML = plsk;
}
