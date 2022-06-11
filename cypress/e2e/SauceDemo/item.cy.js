import ItemPage from "../../Pages/item_page";

var itemPage = new ItemPage();

describe("Funcionalidade de Login",()=>{
    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/");
    })

    it("Visualizar tela de um produto",()=>{
        itemPage.realizeLoginAndClickItem("standard_user","secret_sauce");

        itemPage.verifyIfExistImageProduct();
    })
})