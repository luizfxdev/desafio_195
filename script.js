// Função para verificar se um número é primo
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

// Função para calcular a soma dos números primos até p
function calculatePrimeSum(p) {
  let sum = 0;
  let primes = [];

  for (let i = 2; i <= p; i++) {
    if (isPrime(i)) {
      sum += i;
      primes.push(i);
    }
  }

  return {
    sum: sum,
    primes: primes
  };
}

// Função para formatar o cálculo para exibição
function formatCalculation(p, primes, sum) {
  if (primes.length === 0) {
    return 'Não há números primos no intervalo informado.';
  }

  let calculation = `Números primos até ${p}: ${primes.join(', ')}\n`;
  calculation += `Soma: ${primes.join(' + ')} = ${sum}`;

  return calculation;
}

// Manipulação do DOM
document.addEventListener('DOMContentLoaded', function () {
  const solveBtn = document.getElementById('solveBtn');
  const resetBtn = document.getElementById('resetBtn');
  const inputNumber = document.getElementById('inputNumber');
  const resultOutput = document.getElementById('resultOutput');
  const calculationOutput = document.getElementById('calculationOutput');

  // Evento para o botão DESVENDAR
  solveBtn.addEventListener('click', function () {
    const p = parseInt(inputNumber.value);

    // Validação da entrada
    if (isNaN(p) || p < 1 || p > 100) {
      resultOutput.textContent = 'Por favor, insira um número entre 1 e 100.';
      calculationOutput.textContent = '';
      return;
    }

    // Cálculo dos números primos
    const { sum, primes } = calculatePrimeSum(p);
    const calculation = formatCalculation(p, primes, sum);

    // Exibição dos resultados
    resultOutput.textContent = `Soma dos primos até ${p}: ${sum}`;
    calculationOutput.textContent = calculation;
  });

  // Evento para o botão RETORNAR
  resetBtn.addEventListener('click', function () {
    inputNumber.value = '';
    resultOutput.textContent = '';
    calculationOutput.textContent = '';
  });
});
