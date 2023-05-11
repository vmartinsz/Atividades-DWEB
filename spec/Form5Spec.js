describe('Form 5', () => {

  describe('Formulário', () => {
    beforeEach(() => this.form = document.querySelector('#form5'))
    it('deve existir',() => expect(this.form).withContext('Não remova o form nem altere seu ID').toBeTruthy())
    it('deve validar', () => expect(this.form.novalidate).withContext('Sempre deixe o HTML5 fazer sua validação').toBeFalsy())
    it('deve usar o método HTTP correto', () => expect(this.form.method.toUpperCase()).withContext('O Método GET é utilizado por padrão, mas o ideal é usar sempre o POST').toBe('POST'))
  })
  describe('Produto', () => {
    beforeEach(() => this.input = document.querySelector('#form5 select[name="produto"]'))
    it('deve existir', () => expect(this.input).withContext('Certifique-se que existe um campo com nome "produto"').toBeTruthy())
    it('deve ser do tipo correto', () => expect(this.input.tagName).withContext('Existe um campo específico para uma caixa de seleção').toBe('SELECT'))
    it('deve ser obrigatório', () => expect(this.input.required).withContext('Existe uma propriedade que marca campos como preenchimento obrigatório').toBeTruthy())
    it('devem estar com as opções corretas', () => {
      let ops = this.input.querySelectorAll('option')
      expect(ops[0].innerText).withContext('A primeira opção deve ter o texto vazio').toBe('')
      expect(ops[1].innerText).withContext('A segunda opção deve ter o texto especificado').toBe('Pizza')
      expect(ops[2].innerText).withContext('A terceira opção deve ter o texto especificado').toBe('Yakissoba')
      expect(ops[3].innerText).withContext('A quarta opção deve ter o texto especificado').toBe('Feijoada')
    })
  })
  describe('Quantidade', () => {
    beforeEach(() => this.input = document.querySelector('#form5 input[name="quantidade"]'))
    it('deve existir', () => expect(this.input).withContext('Certifique-se que existe um campo com nome "quantidade"').toBeTruthy())
    it('deve ser do tipo correto', () => expect(this.input.type).withContext('Exsite um tipo de campo para coletar números').toBe('number'))
    it('deve ser obrigatório', () => expect(this.input.required).withContext('Existe uma propriedade que marca campos como preenchimento obrigatório').toBeTruthy())
    it('deve um valor máximo de 8', () => expect(this.input.max).withContext('Existe uma propriedade que marca o valor máximo que o campo permite').toBe('8'))
    it('deve um valor mínimo de 8', () => expect(this.input.min).withContext('Existe uma propriedade que marca o valor mínimo que o campo permite').toBe('1'))
    it('deve um valor padrão de 1', () => expect(this.input.value).withContext('Existe uma propriedade que marca o valor padrão de um campo').toBe('1'))
    it('deve possuir um label correto', () => expect(document.querySelector('#form5 label[for="'+this.input.id+'"]')).withContext('Labels devem estar corretamente conectados aos respectivos campos').toBeTruthy())
  })
  describe('Observações', () => {
    beforeEach(() => this.input = document.querySelector('#form5 textarea[name="observacoes"]'))
    it('deve existir', () => expect(this.input).withContext('Certifique-se que existe um campo com nome "observacoes"').toBeTruthy())
    it('deve ser do tipo correto', () => expect(this.input.tagName).withContext('Existe um campo específico para textos de várias linhas').toBe('TEXTAREA'))
    it('deve ser opcional', () => expect(this.input.required).withContext('Basta não marcá-la como obrigatória').toBeFalsy())
    it('deve possuir um texto padrão', () => expect(this.input.value).withContext('Existe uma propriedade que coloca nos camps um valor padrão').toBe('Por favor, escreva aqui suas observações!'))
    it('deve possuir um label correto', () => expect(document.querySelector('#form5 label[for="'+this.input.id+'"]')).withContext('Labels devem estar corretamente conectados aos respectivos campos').toBeTruthy())
  })
  describe('Botão de Envio', () => {
    beforeEach(() => this.input = document.querySelector('#form5 input[type="submit"], #form5 button[type="submit"], #form5 button:not([type])'))
    it('deve existir', () => expect(this.input).withContext('Certifique-se que existe um botão de submissão de dados').toBeTruthy())
    it('deve estar com o texto correto', () => expect(this.input.tagName == "INPUT" ? this.input.value : this.input.innerText).withContext('Dependendo da tag, a maneira de por um texto no botão é diferente').toBe('Pedir'))
  })
});
