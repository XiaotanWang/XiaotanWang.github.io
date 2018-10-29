/* displayvalue */
function clearvalue(){
	document.getElementById("disp").value = "";
}

/*document.getElementById("clear").addEventListener("click", function() {
	document.getElementById("display").value = "";
});
/* getvalue */
function get(value) {
	document.getElementById("disp").value += value;
}

/* calculate */
function calculates() {
	var result = 0;
	result = document.getElementById("disp").value;
	document.getElementById("disp").value = "";
	document.getElementById("disp").value = eval(result);
};
