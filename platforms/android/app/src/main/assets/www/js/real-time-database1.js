var userList = document.getElementById('userList');
var nomeInput = document.getElementById('nomeInput');
var endInput  = document.getElementById('endInput');
var telInput  = document.getElementById('telInput');
var cnpjInput  = document.getElementById('cnpjInput');

var addButton = document.getElementById('addButton');

// Ao clicar no botão
addButton.addEventListener('click', function () {
	create(nomeInput.value, endInput.value, telInput.value, cnpjInput.value);
});

function create(nome, end, tel, cnpj){
	var data = {
		nome: nome,
		end: end,
		tel: tel,
		cnpj: cnpj
		
	};
	
	return firebase.database().ref().child('est').push(data);
}

firebase.database().ref('est').on('value', function (snapshot) {
	userList.innerHTML = '';
	snapshot.forEach(function (item) {
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(item.val().nome + ' | ' + item.val().end + ' | ' + item.val().tel + ' | ' + item.val().cnpj));
		userList.appendChild(li);
	});
});