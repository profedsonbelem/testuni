Feature:  Roteiro
  Ao entrar no Ioni testar o clique no botao

  Scenario Outline: Testar Clique Ionic
    Given ao entrar no Ionic
    When  entrar no tab2 com nome "edson belem" o "edsonbelem@gmail.com" e a "https://randomuser.me/api/portraits/lego/1.jpg"
    Then  verificar a saida da mensagem <nome> o <email> e a <foto>

        Examples:
    | nome                 | email                      |   foto    | 
    | "edson belem"        |  "edsonbelem@gmail.com"    | "https://randomuser.me/api/portraits/lego/1.jpg"   |
 