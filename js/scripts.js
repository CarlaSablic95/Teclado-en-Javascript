// Display
document.write('<div class="container-display">' + '<input type="text" id="display">' + '</div> <br>');

 // Creo un array para la primera fila de letras y las recorro mediante un array
 var fila_1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];

for(var i=0; i < fila_1.length; i++ ){
	document.write('<div class="container-letras">' + '<input class="letra" type="button" ' + 'value= ' + fila_1[i] + ' onclick= "mostrarLetra(this.value)"/>' + '</div>');
}

 var fila_2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ'];

for(var i=0; i < fila_2.length; i++ ){
  	document.write('<div class="container-letras">' + '<input class="letra" type="button" ' + 'value= ' + fila_2[i] + ' onclick= "mostrarLetra(this.value)"/>' + '</div>');
  }


 var fila_3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
 for(var i=0; i < fila_3.length; i++ ){
	document.write('<div class="container-letras">' + '<input class="letra" type="button" ' + 'value= ' + fila_3[i] + ' onclick= "mostrarLetra(this.value)"/>' + '</div>');
 }


// Botón Borrar 

document.write('<div class="container-letras">' + '<input type="button" value="Borrar" onclick= "borrar()">' + '</div>');

// Botón Backspace
document.write('<div class="container-letras">' + '<input type="button"' + 'value="⟵"' + 'onclick= "retroceso()" >' + '</div>');

// Botón Barra espaciadora
document.write('<div class="container-letras">' + '<input type="button"' + 'value=""' + 'onclick= "espacio()" >' + '</div>');


// Mostrar cada letra en el display
function mostrarLetra(letra) {
	document.getElementById('display').value += letra;
}

function retroceso() {
	var cadenaLetras = document.getElementById('display').value;
	document.getElementById('display').value = cadenaLetras.slice(0, cadenaLetras.length - 1);
}

// Espaciar letras

function espacio() {
	document.getElementById('display').value += " ";
}

// Borrar el display

function borrar() {
	document.getElementById('display').value = " ";
}
