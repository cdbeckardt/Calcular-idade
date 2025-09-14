  <script>
    const calcularBtn = document.getElementById('calcularBtn');
    const limparBtn = document.getElementById('limparBtn');
    const resultado = document.getElementById('resultado');
    const inputAno = document.getElementById('anoNascimento');

    calcularBtn.addEventListener('click', () => {
      const anoNascimento = parseInt(inputAno.value);
      const anoAtual = new Date().getFullYear();

      if (isNaN(anoNascimento)) {
        resultado.textContent = "❌ Por favor, insira um ano válido!";
        resultado.style.color = '#e74c3c';
        return;
      }

      if (anoNascimento < 1900 || anoNascimento > anoAtual) {
        resultado.textContent = "❌ Ano fora do intervalo permitido!";
        resultado.style.color = '#e74c3c';
        return;
      }

      const idade = anoAtual - anoNascimento;
      resultado.style.color = '#d97cae';
      resultado.textContent = `Sua idade é: ${idade} anos 🎉`;
    });

    limparBtn.addEventListener('click', () => {
      inputAno.value = '';
      resultado.textContent = '';
      inputAno.focus();
    });
  </script>