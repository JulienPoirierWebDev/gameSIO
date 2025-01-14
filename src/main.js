import '/src/style.css';

function h1Feature() {
	const myH1 = document.querySelector('h1');

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
}
function paragraphFeature() {
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
}
function todoFeature() {
	// Etape 1 - Selection
	const myForm = document.querySelector('#todoForm');
	const myInput = document.querySelector('#todo');
	const allTodos = document.querySelector('.all-todos');
	const modifierContainer = document.querySelector('#modifier-container');

	const inputMod = document.querySelector('#mod');
	const submitMod = document.querySelector('#submit-modif');

	//Etape 2 - Paramétrage d'event

	myForm.addEventListener('submit', (event) => {
		//Etape 3 - Modification
		// Empecher le comportement par défaut du navigateur :
		// envoyer le formulaire par rechargement de page
		event.preventDefault();

		// Creation d'un élement
		const newTodo = document.createElement('p');

		// Récupération de la valeur de l'input
		const inputValue = myInput.value;

		const array = inputValue.split('');

		// Attribution d'un texte
		newTodo.innerText = inputValue;

		const span = document.createElement('span');
		span.textContent = 'X';
		span.classList.add('suppr');
		span.addEventListener('click', () => {
			newTodo.remove();
		});

		const span2 = document.createElement('span');
		span2.textContent = 'Modifier';
		span2.classList.add('mod');

		span2.addEventListener('click', () => {
			modifierContainer.classList.toggle('hidden');

			const todosArray = allTodos.children;

			let actualTodo;

			for (const todo of todosArray) {
				let value = todo.innerText.split('ModifierX').join('');

				if (value !== inputValue) {
					todo.classList.toggle('hidden');
				} else {
					actualTodo = todo;
				}
			}

			inputMod.value = inputValue;

			submitMod.addEventListener('click', () => {
				actualTodo.innerText = inputMod.value;

				for (const todo of todosArray) {
					todo.classList.remove('hidden');

					// Ici on atteint une limite : la structure HTML ne permet pas simplement de modifier la valeur de la todo
					// En effet, cela oblige a supprimer les span : il faudrait plutôt avoir 3 elements par todo : la todo elle meme, le bouton supp et le bouton mod
					// On pourrait utiliser les data set pour changer plus facilement les élements sans supprimer les boutons mod et supp
				}
			});
		});

		console.log(myInput.value);

		newTodo.appendChild(span2);

		newTodo.appendChild(span);

		// Ajoute de l'élement aux enfants de allTodos
		allTodos.appendChild(newTodo);

		// Vide la valeur de l'input
		myInput.value = '';
	});
}

function memory() {
	const cardsFlipped = [null, null];

	const uniqueCards = [
		{ content: 'A', href: '' },
		{ content: 'B', href: '' },
		{ content: 'C', href: '' },
		{ content: 'D', href: '' },
		{ content: 'E', href: '' },
		{ content: 'F', href: '' },
		{ content: 'G', href: '' },
	];

	function createDeck(cards) {
		// initialiser le deck vide
		const deck = [];
		let actualId = 1;

		// Pour chaque carte du paquet de cartes uniques, on exécute ce code
		for (const card of cards) {
			// créer la première carte d'un type
			const cardPair1 = {
				content: card.content,
				href: card.href,
				id: actualId,
				matched: false,
			};

			// augmenter l'id de 1 pour que la paire est un id différent
			actualId++;

			// créer la 2e carte d'un type
			const cardPair2 = {
				content: card.content,
				href: card.href,
				id: actualId,
				matched: false,
			};

			// id + 1
			actualId++;

			// on ajoute les 2 cartes au deck
			deck.push(cardPair1);
			deck.push(cardPair2);
		}
		return deck;
	}

	const newDeck = createDeck(uniqueCards);
	console.log(newDeck);

	const deck = [
		{ content: 'A', href: '', id: 1, matched: false },
		{ content: 'A', href: '', id: 2, matched: false },
		{ content: 'B', href: '', id: 3, matched: false },
		{ content: 'B', href: '', id: 4, matched: false },
		{ content: 'C', href: '', id: 5, matched: false },
		{ content: 'C', href: '', id: 6, matched: false },
	];

	// Mettre en place le plateau de jeu
	// 1 - Créer les cartes
	// 2 - ???
	// 3 - Placer les cartes dans le jeu
	// -----------------------------------------------------------------
	// ETAPE DU JEU
	// 1- Utilisateur clique sur un carte
	// 2 - Retenir la carte
	// 3 - Retourner la carte
	// 4 - Actualiser le nombre de coup de jeu
	// 5 - Utilisateur clique sur la 2e carte
	// 6 - Retenir la carte
	// 7 - Retourner la 2e carte
	// 8 - On actualise le nombre de coups de jeu
	// 9 - Vérification des cartes
	// 9 - A : Ce sont les mêmes : les cartes se vérouillent et deviennent vertes
	// 9 - B : Ce ne sont pas les mêmes : les cartes vibres (animation d'échec) et se retournent
}

memory();
