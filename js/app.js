//Count display and button variables
let counterDisplay = document.querySelector('#counter');
const buttons = document.querySelectorAll('button');
let counter = 0;
//Looped through buttons & add a click event to each.
buttons.forEach(button => {
	button.addEventListener('click', () => {
		if (button.classList.contains('nextBtn')) {
			counter++;
			counterDisplay.textContent = counter;
		} else if (button.classList.contains('prevBtn')) {
			counter--;
			counterDisplay.textContent = counter;
		}
		if (counter < 0) {
			counterDisplay.style.color = 'red';
		} else {
			counterDisplay.style.color = 'green';
		}
	})
})