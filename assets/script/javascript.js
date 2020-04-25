//sélectionner toutes les tag Span
let listSpan = document.querySelectorAll('span');

//Ajout d'un écouteur d'événement au click sur toutes les span
for (let each of listSpan) {
  each.addEventListener('click', function () {
    let val = this.innerText; //création d'une variable pour récupérer la valeur

    //detection des cas particulier pour traitement
    console.log(val);

    if (
      (val >= 0 && val <= 9) ||
      val === '*' ||
      val === '-' ||
      val === '+' ||
      val === '/'
    ) {
      document.getElementById('zone').value += this.innerHTML;
    } else if (val === 'C') {
      document.getElementById('zone').value = '';
    } else if (val === '1/X') {
      document.getElementById('zone').value =
        1 / parseInt(document.calc.txt.value);
    } else if (val === '\u221a') {
      document.calc.txt.value = Math.sqrt(document.calc.txt.value);
    } else if (val === 'X 3') {
      document.calc.txt.value = Math.pow(document.calc.txt.value, 3);
    } else if (val === 'X 2') {
      document.calc.txt.value =
        parseInt(document.calc.txt.value) * parseInt(document.calc.txt.value);
    } else if (this.innerText === '=') {
      document.calc.txt.value = eval(calc.txt.value);
    }
  });
}

//description des cas avec code clavier et retour des valeurs
function uniKeyCode(event) {
  let valeur = event.key;
  let result = event.keyCode;

  switch (true) {
    case valeur == 0:
      document.calc.txt.value += 0;
      break;
    case valeur == 1:
      document.calc.txt.value += 1;
      break;
    case valeur == 2:
      document.calc.txt.value += 2;
      break;
    case valeur == 3:
      document.calc.txt.value += 3;
      break;
    case valeur == 4:
      document.calc.txt.value += 4;
      break;
    case valeur == 5:
      document.calc.txt.value += 5;
      break;
    case valeur == 6:
      document.calc.txt.value += 6;
      break;
    case valeur == 7:
      document.calc.txt.value += 7;
      break;
    case valeur == 8:
      document.calc.txt.value += 8;
      break;
    case valeur == 9:
      document.calc.txt.value += 9;
      break;
    case valeur == '*':
      document.calc.txt.value += '*';
      break;
    case valeur == '+':
      document.calc.txt.value += '+';
      break;
    case valeur == '-':
      document.calc.txt.value += '-';
      break;
    case valeur == '.':
      document.calc.txt.value += '.';
      break;
    case valeur == '/':
      document.calc.txt.value += '/';
      break;
    case result == 13:
      document.calc.txt.value = eval(calc.txt.value);
      break;
  }
}
