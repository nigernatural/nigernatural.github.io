function result(){
	var visible = document.getElementById('ist');
	var itog = document.getElementById('istina');
	var arr = ["Конечно", "Вне сомнений", "Определенно", "И не только", "А ещё он пердит"];

	var otvet = Math.floor(Math.random()*arr.length);
	visible.style.display = 'block';
	itog.innerHTML= arr[otvet];
}