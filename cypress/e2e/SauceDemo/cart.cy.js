import ProductsPage from '../../Pages/products_page';

var productsPage = new ProductsPage();

describe("Funcionalidade de carrinho",()=>{
    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/");
    })

    it("Produto adicionado no carrinho",()=>{
        productsPage.addProductToCart("standard_user","secret_sauce")

        productsPage.verifyIfCartIsFull();
    })

})