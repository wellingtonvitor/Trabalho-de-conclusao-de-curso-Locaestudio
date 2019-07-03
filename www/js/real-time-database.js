var userList = document.getElementById('userList');
var insInput = document.getElementById('insInput');
var marcInput = document.getElementById('marcInput');
var tuInput = document.getElementById('tuInput');
var telInput = document.getElementById('telInput');

var addButton = document.getElementById('addButton');

// Ao clicar no botão
addButton.addEventListener('click', function () {
	create(insInput.value, marcInput.value, tuInput.value, telInput.value);
});

function create(ins, marc, tu, tel){
	var data = {
		ins: ins,
		marc: marc,
		tu: tu,
		tel: tel
		
	};
	
	return firebase.database().ref().child('int').push(data);
}

firebase.database().ref('int').on('value', function (snapshot) {
	userList.innerHTML = '';
	snapshot.forEach(function (item) {
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(item.val().ins + ' | ' + item.val().marc + ' | ' + item.val().tu + ' | ' + item.val().tel));
		userList.appendChild(li);
	});
});