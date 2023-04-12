/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

And("informo {} incorreto", (email) => {
    loginPage.informarEmail(email);
})

And("informo {} incorreta", (senha) => {
    loginPage.informarSenha(senha);
})

Given("acesso o site Sesc", () => {
    loginPage.acessarSite();
})

When("acesso a pagina de Educacao", () => {
    loginPage.clicarBotaoPaginaLogin();
})

When("clico no botão de realizar login", () => {
    loginPage.clicarBotaoRealizarLogin();
})

Then("devo ser redirecionado para o portal da educação", () => {
    loginPage.visualizarBotaoRecuperarSenha();
})

Then("devo visualizar mensagem de erro", () => {
    loginPage.visualizarErroLogin();
})