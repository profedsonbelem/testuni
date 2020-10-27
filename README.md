npm i cucumber
npm i assert


cucumber (Behavior)

Dado dado ao entrar no site cotiinformatica
Quando 'metodo2'
Entao 'metodo3'



cucumber-js  ../../features/roteiro.feature





Feature: Soma de dois Numeros
  Adicionar dois numeros e calcular a Soma

  Scenario Outline: Soma dois numeros
    Given ao entrar com numeroUm <numeroUm>  e com numeroDois <numeroDois>
    When  realizar a operacao de Soma
    Then  informar e testar o valor da soma <soma>
 
    Examples:
    | numeroUm | numeroDois | soma | 
    | 10       |  20        | 30   |
    | -5       |  10        | 5    |
    |  0       | -1         | -1   |
 