// Задача №1


	var daysInYear = "365";
	var ourPlanetName = "Земля";
	var amountOfPeople = "7 млрд.";
	var ourMainStarName = "Солнца";
	var home = "Мы живем на планете " + ourPlanetName + ", она делает один оборот вокруг " + ourMainStarName + " за " + daysInYear + " дней. " +"Население нашей планеты состовляет примерно "+ amountOfPeople + " человек."
	document.write("<h1>Задача №1</h1>");
	document.write(home);

// Задача №2
	var a = 5;
	var b, c;
	b = a * 5;
	b = (c = (b/2));

	document.write("<h1>Задача №2</h1>");
	document.write("Первоочередно вычисляется значение &laquo;b = a * 5&raquo; в результате получаем &laquo;b = 25&raquo;. <br>");
	document.write("После из выражения &laquo;b = (c = (b/2))&raquo; выполняется вычисление значения &laquo;с = b/2&raquo;.<br>");
	document.write("Поскольку приоритет знака деления значительно выше приоритета знака равенства что в результате дает &laquo;c = " + c + "&raquo;.<br>");
	document.write("После вычисления значения переменной &laquo;с&raquo; происходит переприсвоение значения переменной &laquo;b&raquo; которая будет равна &laquo;b = " + b + "&raquo;.");

// Задача №3
	var mln = " млн.";
	var city = ["Германия - ", "Турция - ", "Франция - ", "Италия - ", "Украина - "];
	var count = ["82.887.000" + mln, "80.810.525" + mln, "67.372.000" + mln, "60.395.921" + mln, "42.220.824" + mln];
	document.write("<h1>Задача №3</h1>");
	document.write(city[0] + count[0] + "<br>" + city[1] + count[1] + "<br>" + city[2] + count[2] + "<br>" + city[3] + count[3] + "<br>" + city[4] + count[4] + "<br><br>");


// Задача №4
	var fruit = [" Апельсин"," Банан"," Груша"];
	document.write("<h1>Задача №4</h1>");
	document.write(fruit + ".<br>");
	document.write("Сейчас в моей корзине " + fruit.length + " фрукта." + "<br>" + "<br>");

	fruit.unshift(" Грейпфрут");
	fruit.push(" Яблоко", " Ананас");
	document.write(fruit + ".<br>")
	document.write("Сейчас в моей корзине " + fruit.length + " фруктов." + "<br>" + "<br>");

	fruit.shift();
	fruit.pop();
	document.write(fruit + ".<br>")
	document.write("Сейчас в моей корзине " + fruit.length + " фрукта.");

// Задача №5
	var fruits = [" Яблоко"," Апельсин"," Груша"," Гранат"];
	fruits.splice(fruits.length - 2, 1, "Ананас");
	document.write("<h1>Задача №5</h1>");
	document.write(fruits + ".<br>");

	var fruits = [" Банан"," Мандарин"," Манго"];
	fruits.splice(fruits.length - 2, 1, " Ананас");
	document.write(fruits + ".");

// Задача №6
	var students = ["Сергей", "Матвей", "Лейла", "Алина", "Иоган"];
	document.write("<h1>Задача №6</h1>");
	if(students.length >= 3) {
		document.write(" Это большой массив, в котором как минимум 3 элемента.");
	}
	else {
		document.write("Это маленький массив, в котором менее 3-х элементов.");
	}

// Задача №7
	var students = ["Дмитрий", "Алексей", "Петр", "Виктор"];
	document.write("<h1>Задача №7</h1>");
	if(students.length == 4 && students[students.length - 1] == "Виктор") {
	    document.write("Этот массив мне подходит. <br>");
	}
	else {
	    document.write("массив вам не подходит. <br>");
	}

// Задача №8
	a = 1;
	b = 8;
	result = (a + b < 4) ? 'Мало.' : 'Много.';
	document.write("<h1>Задача №8</h1>");
	document.write(result);

// Задача №9
var message;

var login = prompt("Login",'');
message = (login == 'Вася') ? message = 'Привет' :
(login == 'Директор') ? message = 'Здравствуйте' :
(login =='') ? message = 'Нет логина' :
message = '';

alert(message);
document.write ("<h1>Задача №9</h1> <p>Представлено через &laquo;alert&raquo; в первую очередь.</p>");

	// Задача №10
	var value = prompt('Каково "официальное" название JavaScript?', '');

	if (value == 'ECMAScript') {
		alert('Верно!');
	} else {
		alert('Не знаете? "ECMAScript"!');
	}
	document.write ("<h1>Задача №10</h1> <p>Представлено вторым через &laquo;alert&raquo;.</p><br><br><br>");
