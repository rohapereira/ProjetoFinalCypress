import LoginPage from '../../Pages/login_page';
import ProductsPage from '../../Pages/products_page';

var loginPage = new LoginPage();
var productsPage = new ProductsPage();

describe("Funcionalidade de Login",()=>{
    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/");
    })

    it("Login com sucesso!",()=>{
        loginPage.realizeLogin("standard_user","secret_sauce")

        productsPage.verifyIfExistProducts();
    })

    it("Login com falha",()=>{
        loginPage.realizeLogin("standard_user","123teste");
        
        loginPage.assertErrorContains("Username and password do not match");
    });
})