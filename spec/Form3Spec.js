describe('Form 3', () => {

  describe('Formulário', () => {
    beforeEach(() => this.form = document.querySelector('#form3'))
    it('deve existir',() => expect(this.form).withContext('Não remova o form nem altere seu ID').toBeTruthy())
    it('deve validar', () => expect(this.form.novalidate).withContext('Sempre deixe o HTML5 fazer sua validação').toBeFalsy())
    it('deve usar o método HTTP correto', () => expect(this.form.method.toUpperCase()).withContext('O Método GET é utilizado por padrão, mas o ideal é usar sempre o POST').toBe('POST'))
  })

  describe('Nome Completo', () => {
    beforeEach(() => this.input = document.querySelector('#form3 input[name="nome-completo"]'))
    it('deve existir', () => expect(this.input).withContext('Certifique-se que existe um campo com nome "nome-completo"').toBeTruthy())
    it('deve ser do tipo correto', () => expect(this.input.type).withContext('Use o tipo mais comum de campo').toBe('text'))
    it('deve ser obrigatório', () => expect(this.input.required).withContext('Existe uma propriedade que marca campos como preenchimento obrigatório').toBeTruthy())
    it('deve permitir um máximo de 120 caracteres', () => expect(this.input.maxLength).withContext('Existe uma propriedade que marca o máximo de caracteres que o campo permite').toBe(120))
    it('deve possuir um label correto', () => expect(document.querySelector('#form3 label[for="'+this.input.id+'"]')).withContext('Labels devem estar corretamente conectados aos respectivos campos').toBeTruthy())
  })
  describe('Nascimento', () => {
    beforeEach(() => this.input = document.querySelector('#form3 input[name="nascimento"]'))
    it('deve existir', () => expect(this.input).withContext('Certifique-se que existe um campo com nome "nascimento"').toBeTruthy())
    it('deve ser do tipo correto', () => expect(this.input.type).withContext('Existe um campo específico para coleta de datas (sem horas)').toBe('date'))
    it('deve ser obrigatório', () => expect(this.input.required).withContext('Existe uma propriedade que marca campos como preenchimento obrigatório').toBeTruthy())
    it('deve possuir um label correto', () => expect(document.querySelector('#form3 label[for="'+this.input.id+'"]')).withContext('Labels devem estar corretamente conectados aos respectivos campos').toBeTruthy())
  })
  describe('Perfil Github', () => {
    beforeEach(() => this.input = document.querySelector('#form3 input[name="github"]'))
    it('deve existir', () => expect(this.input).withContext('Certifique-se que existe um campo com nome "github"').toBeTruthy())
    it('deve ser do tipo correto', () => expect(this.input.type).withContext('Existe um tipo de campo específico para endereços de sites').toBe('url'))
    it('deve ser opcional', () => expect(this.input.required).withContext('Basta nã marcar como obrigatório').toBeFalsy())
    it('deve possuir um label correto', () => expect(document.querySelector('#form3 label[for="'+this.input.id+'"]')).withContext('Labels devem estar corretamente conectados aos respectivos campos').toBeTruthy())
  })
  describe('Sexo', () => {
    beforeEach(() => this.inputs = document.querySelectorAll('#form3 input[name="sexo"]'))
    it('devem existir duas opções', () => expect(this.inputs.length).withContext('Certifique-se que existem duas opções com nome "sexo"').toBe(2))
    it('devem ser do tipo correto', () => {
      expect(this.inputs[0].type).withContext('A primeira opção deve ser de seleção única').toBe('radio')
      expect(this.inputs[1].type).withContext('A segunda opção deve ser de seleção única').toBe('radio')
    })
    it('devem ser obrigatórios', () => {
      expect(this.inputs[0].required).withContext('A primeira opção deve estar marcada como obrigatória').toBeTruthy()
      expect(this.inputs[1].required).withContext('A segunda opção deve estar marcada como obrigatória').toBeTruthy()
    })
    it('devem possuir os labels corretos', () => {
      expect(document.querySelector('#form3 label[for="'+this.inputs[0].id+'"]').innerText).withContext('O label do primerio campo deve estar como especificado').toBe('Masculino')
      expect(document.querySelector('#form3 label[for="'+this.inputs[1].id+'"]').innerText).withContext('O label do segundo campo deve estar como especificado').toBe('Feminino')
    })
    it('devem ter os valores corretos', () => {
      expect(this.inputs[0].value).withContext('O valor da primeira opção deve estar como especificada').toBe('M')
      expect(this.inputs[1].value).withContext('o valor da segunda opção deve estar como especificada').toBe('F')
    })
  })
  describe('Botão de Envio', () => {
    beforeEach(() => this.input = document.querySelector('#form3 input[type="submit"], #form3 button[type="submit"], #form3 button:not([type])'))
    it('deve existir', () => expect(this.input).withContext('Certifique-se que existe um botão de submissão de dados').toBeTruthy())
    it('deve estar com o texto correto', () => expect(this.input.tagName == "INPUT" ? this.input.value : this.input.innerText).withContext('Dependendo da tag, a maneira de por um texto no botão é diferente').toBe('Salvar'))

  })
});
