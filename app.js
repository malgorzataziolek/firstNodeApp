const fs = require('fs');
const genders = ['M', 'F'];
const maleNames = ['szymon', 'piotrek', 'witek'];
const femaleNames = ['gosia', 'ania', 'zosia'];
const lastNames = ['ziolek', 'patola', 'jozefczak'];
let people = [];

function randChoice(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}
console.clear();

for (i = 0; i <= 21; i++) {
	const obj = {};
	obj.genders = randChoice(genders);
	switch (obj.genders) {
		case 'M':
			obj.maleNames = randChoice(maleNames);
			break;
		case 'F':
			obj.femaleNames = randChoice(femaleNames);
			break;
		default:
			break;
	}
	const randLastName = () =>
		lastNames[Math.floor(Math.random() * lastNames.length)];
	obj.lastNames = randLastName(lastNames);
	obj.age = Math.floor(Math.random() * 51 + 18);
	people.push(obj);
}

fs.writeFile('people.json', JSON.stringify(people), err => {
	if (err) throw err;
	console.log('The file has been saved!');
});
