Feature: Acessando a api com usuario

  Rule: Como usuario de uma interface, quero me autenticar por meio de uma requisicao



    Scenario: Acessando com usuário válido
      Given o acesso com usuario "valid"
      Then deve exibir a mensagem "Login realizado com sucesso"
