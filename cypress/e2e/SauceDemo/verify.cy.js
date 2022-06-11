import LoginPage from "../../Pages/verify_page";
import ItemPage from "../../Pages/item_page";

var loginPage = new LoginPage();
var itemPage = new ItemPage();

describe("Verificando preço da vitrine com preço do produto",()=>{
    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/");
    })

    it("Realizando login no site e verificando o valor na vitrine",()=>{
        loginPage.realizeLogin("standard_user","secret_sauce");

        cy.get(':nth-child(1) > .inventory_item_description').find('.inventory_item_price').invoke('text').then((element)=>{
            cy.log(element);
        });
    });

    it("Realizando login, acessando o item e verificando o valor dele",()=>{
        itemPage.realizeLoginAndClickItem("standard_user","secret_sauce");

        cy.get('.inventory_details_desc_container').find('.inventory_details_price').invoke('text').then((element)=>{
            cy.log(element);
        });
    });
})