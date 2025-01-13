import '/src/style.css';

const myH1 = document.querySelector('h1');

console.log(myH1);

myH1.textContent = 'Hahaha';
myH1.classList.toggle('super-class');

myH1.innerHTML = `<span> Je suis un element en inner</span><br><br><span>Moi aussi</span>`;

myH1.addEventListener('click', function (event) {
	if (myH1.style.backgroundColor === 'blue') {
		myH1.style.backgroundColor = 'red';
	} else {
		myH1.style.backgroundColor = 'blue';
	}
});

// selectionner le paragraphe
// ajouter un évènement qui active du code quand on survol l'élement
// Faire devenir plus gros le paragraphe

// Etape 1 : selectionner les élements a manipuler.
const paragraph = document.querySelector('.paragraph');

console.log(paragraph);

// Etape 2 : mettre en place un écouteur d'évènements
paragraph.addEventListener('mouseover', () => {
	// Etape 3 : Modifier l'élement ou son comportement
	paragraph.style.fontSize = '20px';
});

paragraph.addEventListener('mouseout', () => {
	paragraph.style.fontSize = '16px';
});

// --------------

// Etape 1 - Selection
const myForm = document.querySelector('#todoForm');
const myInput = document.querySelector('#todo');
const allTodos = document.querySelector('.all-todos');

//Etape 2 - Paramétrage d'event

myForm.addEventListener('submit', (event) => {
	//Etape 3 - Modification
	// Empecher le comportement par défaut du navigateur :
	// envoyer le formulaire par rechargement de page
	event.preventDefault();

	// Creation d'un élement
	const newTodo = document.createElement('p');
	// Attribution d'un texte
	newTodo.innerText = myInput.value;

	const span = document.createElement('span');
	span.textContent = 'X';
	span.classList.add('suppr');
	span.addEventListener('click', () => {
		console.log(`Supprimer `);
	});

	newTodo.appendChild(span);

	// Ajoute de l'élement aux enfants de allTodos
	allTodos.appendChild(newTodo);

	// Vide la valeur de l'input
	myInput.value = '';
});
