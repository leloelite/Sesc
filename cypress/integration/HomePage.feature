Feature: Home Page do Sesc

    Background: Acessar o site do Sesc
        Given acesso o site Sesc

    @testeum
    Scenario: Visualizar opção de ir ao Portal da Educação
        When acesso a pagina de Educacao
        Then devo ser redirecionado para o portal da educação

