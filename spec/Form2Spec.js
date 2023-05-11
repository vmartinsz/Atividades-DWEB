describe('Form 2', () => {

  describe('Formulário', () => {
    beforeEach(() => this.form = document.querySelector('#form2'))
    it('deve existir',() => expect(this.form).withContext('Não remova o form nem altere seu ID').toBeTruthy())
    it('deve validar', () => expect(this.form.novalidate).withContext('Sempre deixe o HTML5 fazer sua validação').toBeFalsy())
    it('deve usar o método HTTP correto', () => expect(this.form.method.toUpperCase()).withContext('O Método GET é utilizado por padrão, mas o ideal é usar sempre o POST').toBe('POST'))
  })

  describe('E-Mail', () => {
    beforeEach(() => this.input = document.querySelector('#form2 input[name="email"]'))
    it('deve existir', () => expect(this.input).withContext('Certifique-se que existe um campo com nome "email"').toBeTruthy())
    it('deve ser do tipo correto', () => expect(this.input.type).withContext('Existe um campo específico para coleta de e-mails').toBe('email'))
    it('deve ser obrigatório', () => expect(this.input.required).withContext('Existe uma propriedade que marca campos como preenchimento obrigatório').toBeTruthy())
    it('deve possuir um label correto', () => expect(document.querySelector('#form2 label[for="'+this.input.id+'"]')).withContext('Labels devem estar corretamente conectados aos respectivos campos').toBeTruthy())
  })
  describe('Assunto', () => {
    beforeEach(() => this.input = document.querySelector('#form2 select[name="assunto"]'))
    it('deve existir', () => expect(this.input).withContext('Certifique-se que existe um campo com nome "assunto"').toBeTruthy())
    it('deve ser do tipo correto', () => expect(this.input.tagName).withContext('A caixa de seleção de opções é uma tag específica').toBe('SELECT'))
    it('deve ser obrigatório', () => expect(this.input.required).withContext('Existe uma propriedade que marca campos como preenchimento obrigatório').toBeTruthy())
    it('deve possuir um label correto', () => expect(document.querySelector('#form2 label[for="'+this.input.id+'"]')).withContext('Labels devem estar corretamente conectados aos respectivos campos').toBeTruthy())
    it('deve ter as opções na ordem correta', () => {
      let opcoes = this.input.querySelectorAll('option')
      expect(opcoes[0].innerText).withContext('Primeira opção deve estar vazia').toBe('')
      expect(opcoes[1].innerText).withContext('Segunda opção não deve estar vazia').toBe('Problemas')
      expect(opcoes[2].innerText).withContext('Terceira opção não deve estar vazia').toBe('Reclamação')
      expect(opcoes[3].innerText).withContext('Quarta opção não deve estar vazia').toBe('Sugestão')
    })
  })
  describe('Mensagem', () => {
    beforeEach(() => this.input = document.querySelector('#form2 textarea[name="mensagem"]'))
    it('deve existir', () => expect(this.input).withContext('Certifique-se que existe um campo com nome "mensagem"').toBeTruthy())
    it('deve ser do tipo correto', () => expect(this.input.tagName).withContext('O campo deve permitir mais de uma linha de texto').toBe('TEXTAREA'))
    it('deve ser obrigatório', () => expect(this.input.required).withContext('Existe uma propriedade que marca campos como preenchimento obrigatório').toBeTruthy())
    it('deve possuir um label correto', () => expect(document.querySelector('#form2 label[for="'+this.input.id+'"]')).withContext('Labels devem estar corretamente conectados aos respectivos campos').toBeTruthy())
  })
  describe('Tipo de Resposta', () => {
    beforeEach(() => this.inputs = document.querySelectorAll('#form2 input[name="tipo-resposta"]'))
    it('devem existir três destes campos', () => expect(this.inputs.length).withContext('Certifique-se que existem três campos com nome "tipo-resposta"').toBe(3))
    it('devem ser do tipo correto', () => {
      expect(this.inputs[0].type).withContext('O tipo da primeira opção deveria ser de múltipla escolha').toBe('checkbox')
      expect(this.inputs[1].type).withContext('O tipo da segunda opção deveria ser de múltipla escolha').toBe('checkbox')
      expect(this.inputs[2].type).withContext('O tipo da terceira opção deveria ser de múltipla escolha').toBe('checkbox')
    })
    it('devem ser opcionais', () => {
      expect(this.inputs[0].required).withContext('A primeira opção não deve ser obrigatória').toBeFalsy()
      expect(this.inputs[1].required).withContext('A segunda opção não deve ser obrigatória').toBeFalsy()
      expect(this.inputs[2].required).withContext('A terceira opção não deve ser obrigatória').toBeFalsy()
    })
    it('devem possuir os labels corretos', () => {
      expect(document.querySelector('#form2 label[for="'+this.inputs[0].id+'"]').innerText).withContext('O label da primeira opção deveria estar da maneira específicada').toBe('Telefone')
      expect(document.querySelector('#form2 label[for="'+this.inputs[1].id+'"]').innerText).withContext('O label da segunda opção deveria estar da maneira específicada').toBe('E-mail')
      expect(document.querySelector('#form2 label[for="'+this.inputs[2].id+'"]').innerText).withContext('O label da terceira opção deveria estar da maneira específicada').toBe('Correio')
    })
    it('devem possuir os valores corretos', () => {
      expect(this.inputs[0].value).withContext('O valor da primeira opção deveria estar da maneira específicada').toBe('T')
      expect(this.inputs[1].value).withContext('O valor da segunda opção deveria estar da maneira específicada').toBe('E')
      expect(this.inputs[2].value).withContext('O valor da terceira opção deveria estar da maneira específicada').toBe('C')
    })
  })
  describe('Botão de Envio', () => {
    beforeEach(() => this.input = document.querySelector('#form2 input[type="submit"], #form2 button[type="submit"], #form2 button:not([type])'))
    it('deve existir', () => expect(this.input).withContext('Certifique-se que existe um botão de submissão de dados').toBeTruthy())
    it('deve estar com o texto correto', () => expect(this.input.tagName == "INPUT" ? this.input.value : this.input.innerText).withContext('Dependendo da tag, a maneira de por um texto no botão é diferente').toBe('Enviar'))
  })
});
