function showNextSection(currentSectionId) {
    const currentSection = document.getElementById(currentSectionId);
   

    // Esconder a seção atual
    currentSection.style.display = 'none';

    // Mostrar a próxima seção com base na resposta
    if (currentSectionId === 'sectionStart') {
        
        document.getElementById('section1').style.display = 'block';
       } else if (currentSectionId === 'section1') {
            const question_group = document.getElementById('question-group').value;
         
        if (question_group === 'A') {
            document.getElementById('section2').style.display = 'block'; // Se A, mostra seção 2
        } else if (question_group === 'B') {
            document.getElementById('section3').style.display = 'block'; // Se B, mostra seção 3
        } else if (question_group === 'C') {
            document.getElementById('section4').style.display = 'block'; // Se C, mostra seção 4
        } else {
      // Quando qualquer seção A, B ou C for concluída, mostrar a seção final
      document.getElementById('sectionFinal').style.display = 'block';
    }
  }
}
function showNextSection(currentSectionId) {
    const currentSection = document.getElementById(currentSectionId);
    
    // Verificação de campos obrigatórios
    const requiredFields = currentSection.querySelectorAll('[required]');
    let allFilled = true;

    requiredFields.forEach(field => {
        if (!field.value) {
            allFilled = false;
            // Adiciona uma classe para destacar o campo vazio (opcional)
            field.classList.add('error'); // você pode definir um estilo para .error no CSS
        } else {
            field.classList.remove('error'); // remove a classe se o campo estiver preenchido
        }
    });

    // Se algum campo obrigatório não estiver preenchido, exibir um alerta e parar a execução
    if (!allFilled) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return; // Para a execução da função se os campos não estiverem preenchidos
    }

    // Esconder a seção atual
    currentSection.style.display = 'none';

    // Lógica para mostrar a próxima seção
    if (currentSectionId === 'sectionStart') {
        // Mostrar a seção 1 ao iniciar
        document.getElementById('section1').style.display = 'block';
    } else if (currentSectionId === 'section1') {
        const questionGroup = document.getElementById('question-group').value;

        // Mostrar a próxima seção com base na resposta
        if (questionGroup === 'A') {
            document.getElementById('section2').style.display = 'block'; // Se A, mostra seção 2
        } else if (questionGroup === 'B') {
            document.getElementById('section3').style.display = 'block'; // Se B, mostra seção 3
        } else if (questionGroup === 'C') {
            document.getElementById('section4').style.display = 'block'; // Se C, mostra seção 4
        }
    } else {
        // Quando qualquer seção A, B ou C for concluída, mostrar a seção final
        document.getElementById('sectionFinal').style.display = 'block';
    }
}
