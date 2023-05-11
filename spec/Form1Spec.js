describe('Form 1', () => {
  
  describe('Formulário', () => {
    beforeEach(() => this.form = document.querySelector('#form1'))

    it('deve existir',() => expect(this.form).withContext('Não remova o form nem altere seu ID').toBeTruthy())
    it('deve validar', () => expect(this.form.novalidate).withContext('Sempre deixe o HTML5 fazer sua validação').toBeFalsy())
    it('deve usar o método HTTP correto', () => expect(this.form.method.toUpperCase()).withContext('O Método GET é utilizado por padrão, mas o ideal é usar sempre o POST').toBe('POST'))
  })

  describe('E-Mail', () => {
    beforeEach(() => this.input = document.querySelector('#form1 input[name="email"]'))
    it('deve existir', () => expect(this.input).withContext('Certifique-se que existe um campo com nome "email"').toBeTruthy())
    it('deve ser do tipo correto', () => expect(this.input.type).withContext('Existe um campo específico para coleta de e-mails').toBe('email'))
    it('deve ser obrigatório', () => expect(this.input.required).withContext('Existe uma propriedade que marca campos como preenchimento obrigatório').toBeTruthy())
    it('deve possuir um label correto', () => expect(document.querySelector('#form1 label[for="'+this.input.id+'"]')).withContext('Labels devem estar corretamente conectados aos respectivos campos').toBeTruthy())
  })
  describe('Senha', () => {
    beforeEach(() => this.input = document.querySelector('#form1 input[name="senha"]'))
    it('deve existir', () => expect(this.input).withContext('Certifique-se que existe um campo com nome "senha"').toBeTruthy())
    it('deve ser do tipo correto', () => expect(this.input.type).withContext('Existe um campo específico para coleta de senhas').toBe('password'))
    it('deve ser obrigatório', () => expect(this.input.required).withContext('Existe uma propriedade que marca campos como preenchimento obrigatório').toBeTruthy())
    it('deve possuir um label correto', () => expect(document.querySelector('#form1 label[for="'+this.input.id+'"]')).withContext('Labels devem estar corretamente conectados aos respectivos campos').toBeTruthy())
  })
  describe('Lembre-se de Mim', () => {
    beforeEach(() => this.input = document.querySelector('#form1 input[name="lembrar"]'))
    it('deve existir', () => expect(this.input).withContext('Certifique-se que existe um campo com nome "lembrar"').toBeTruthy())
    it('deve ser do tipo correto', () => expect(this.input.type).withContext('Essa opão deve ser marcável e desmarcável').toBe('checkbox'))
    it('deve ser opcional', () => expect(this.input.required).withContext('Basta nã marcar como obrigatório').toBeFalsy())
    it('deve possuir um label correto', () => expect(document.querySelector('#form1 label[for="'+this.input.id+'"]')).withContext('Labels devem estar corretamente conectados aos respectivos campos').toBeTruthy())
  })
  describe('Botão de Envio', () => {
    beforeEach(() => this.input = document.querySelector('#form1 input[type="submit"], #form1 button[type="submit"], #form1 button:not([type])'))
    it('deve existir', () => expect(this.input).withContext('Certifique-se que existe um botão de submissão de dados').toBeTruthy())
    it('deve estar com o texto correto', () => expect(this.input.tagName == "INPUT" ? this.input.value : this.input.innerText).withContext('Dependendo da tag, a maneira de por um texto no botão é diferente').toBe('ENTRAR'))

  })

});
