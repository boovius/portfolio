console.log('timer load successful');

function timer() {
  nIntervId = setInterval(sayHello(), 10000);
}

function sayHello(){
	console.log('hello');
}