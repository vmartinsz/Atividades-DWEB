describe('Form 4', () => {


  describe('Formulário', () => {
    beforeEach(() => this.form = document.querySelector('#form4'))
    it('deve existir',() => expect(this.form).withContext('Não remova o form nem altere seu ID').toBeTruthy())
    it('deve validar', () => expect(this.form.novalidate).withContext('Sempre deixe o HTML5 fazer sua validação').toBeFalsy())
    it('deve usar o método HTTP correto', () => expect(this.form.method.toUpperCase()).withContext('O Método GET é utilizado por padrão, mas o ideal é usar sempre o POST').toBe('POST'))
  })

  describe('Rua', () => {
    beforeEach(() => this.input = document.querySelector('#form4 input[name="rua"]'))
    it('deve existir', () => expect(this.input).withContext('Certifique-se que existe um campo com nome "rua"').toBeTruthy())
    it('deve ser do tipo correto', () => expect(this.input.type).withContext('Use o tipo mais comum de campo').toBe('text'))
    it('deve ser obrigatório', () => expect(this.input.required).withContext('Existe uma propriedade que marca campos como preenchimento obrigatório').toBeTruthy())
    it('deve permitir um máximo de 100 caracteres', () => expect(this.input.maxLength).withContext('Existe uma propriedade que marca o máximo de caracteres que o campo permite').toBe(100))
    it('deve possuir um label correto', () => expect(document.querySelector('#form4 label[for="'+this.input.id+'"]')).withContext('Labels devem estar corretamente conectados aos respectivos campos').toBeTruthy())
  })
  describe('Número', () => {
    beforeEach(() => this.input = document.querySelector('#form4 input[name="numero"]'))
    it('deve existir', () => expect(this.input).withContext('Certifique-se que existe um campo com nome "numero"').toBeTruthy())
    it('deve ser do tipo correto', () => expect(this.input.type).withContext('Existe um campo específico para coleta de números').toBe('number'))
    it('deve ser obrigatório', () => expect(this.input.required).withContext('Existe uma propriedade que marca campos como preenchimento obrigatório').toBeTruthy())
    it('deve possuir um label correto', () => expect(document.querySelector('#form4 label[for="'+this.input.id+'"]')).withContext('Labels devem estar corretamente conectados aos respectivos campos').toBeTruthy())
  })
  describe('Estado', () => {
    beforeEach(() => this.input = document.querySelector('#form4 select[name="estado"]'))
    it('deve existir', () => expect(this.input).withContext('Certifique-se que existe um campo com nome "estado"').toBeTruthy())
    it('deve ser do tipo correto', () => expect(this.input.tagName).withContext('Existe um campo específico para uma caixa de seleção').toBe('SELECT'))
    it('deve ser obrigatório', () => expect(this.input.required).withContext('Existe uma propriedade que marca campos como preenchimento obrigatório').toBeTruthy())
    it('devem estar com as opções corretas', () => {
      let ops = this.input.querySelectorAll('option')
      expect(ops[0].value).withContext('A primeira opção deve ter o valor vazio').toBe('')
      expect(ops[0].innerText).withContext('A primeira opção deve ter o texto vazio').toBe('')
      expect(ops[1].value).withContext('A segunda opção deve ter o valor especificado').toBe('SP')
      expect(ops[1].innerText).withContext('A segunda opção deve ter o texto especificado').toBe('São Paulo')
      expect(ops[2].value).withContext('A terceira opção deve ter o valor especificado').toBe('RJ')
      expect(ops[2].innerText).withContext('A terceira opção deve ter o texto especificado').toBe('Rio de Janeiro')
      expect(ops[3].value).withContext('A quarta opção deve ter o valor especificado').toBe('MG')
      expect(ops[3].innerText).withContext('A quarta opção deve ter o texto especificado').toBe('Minas Gerais')
    })
  })
  describe('Botão de Envio', () => {
    beforeEach(() => this.input = document.querySelector('#form4 input[type="submit"], #form4 button[type="submit"], #form4 button:not([type])'))
    it('deve existir', () => expect(this.input).withContext('Certifique-se que existe um botão de submissão de dados').toBeTruthy())
    it('deve estar com o texto correto', () => expect(this.input.tagName == "INPUT" ? this.input.value : this.input.innerText).withContext('Dependendo da tag, a maneira de por um texto no botão é diferente').toBe('Salvar'))
  })
  describe('Botão de Limpeza', () => {
    beforeEach(() => this.input = document.querySelector('#form4 input[type="reset"], #form4 button[type="reset"]'))
    it('deve existir', () => expect(this.input).withContext('Certifique-se que existe um botão de limpeza de dados').toBeTruthy())
    it('deve estar com o texto correto', () => expect(this.input.tagName == "INPUT" ? this.input.value : this.input.innerText).withContext('Dependendo da tag, a maneira de por um texto no botão é diferente').toBe('Limpar'))
  })
});
