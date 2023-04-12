/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão que acessa a página de login do site
    clicarBotaoPaginaLogin() {
        cy.contains(loginElements.itemMenuEducacao()).click()
    }

    // Clica no botão de realizar login
    clicarBotaoRealizarLogin() {
        cy.get(loginElements.botaoRealizarLogin()).click()
    }

    // Informa email no input do email
    informarEmail(email) {
        cy.get(loginElements.inputEmail()).type(email)
    }

    // Informa senha no input da senha
    informarSenha(senha) {
        cy.get(loginElements.inputSenha()).type(senha)
    }

    // Verifica se o botão tem o texto "Esqueceu sua senha?"
    visualizarBotaoRecuperarSenha() {
        cy.url().should('eq', 'https://portaldaeducacao.sescrio.org.br/')
        //cy.contains(loginElements.itemMenuEducacao()).should('contain', 'Esqueceu sua senha?')
    }

    // Visualizar mensagem de erro "Usuário ou senha inválidos."
    visualizarErroLogin() {
        cy.get(loginElements.mensagemErro()).should('contain', 'Usuário ou senha inválidos.')
    }
    
}

export default LoginPage;
