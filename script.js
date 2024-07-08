document.getElementById('diaSelecionado').addEventListener('change', function() {
    let dia = this.value
    let mensagem = ' '
    
    switch (dia.toLowerCase()) {
        case 'segunda':
            mensagem = 'Segunda-Feira: Vamos começar a semana com energia.'
            break
        case 'terça':
            mensagem = 'Terça-Feira: continue o bom trabalho!'
            break
        case 'quarta':
            mensagem = 'Quarta-Feira: já estamos na metade do caminho'
            break
        case 'quinta':
            mensagem = 'Quinta-Feira: vespera do finde tá ai'
            break
        case 'sexta':
            mensagem = 'Sexta-Feira: sextou bebê!!!'
            break
        case 'sabado':
            mensagem = 'Sábado: dia de fazer besteira!'
            break
        case 'domingo':
            mensagem = 'Domingo: descanse, e torça para não ter coisa ruim no celular'
            break
        default:
            mensagem = 'Selecione um dia da semana'
    }

    console.log(mensagem)

    document.getElementById('texto-mensagem').innerText = mensagem
})