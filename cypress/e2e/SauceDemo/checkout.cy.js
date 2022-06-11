import CartPage from "../../Pages/cart_page";
import CheckoutPage from "../../Pages/checkout_page";

var cartPage = new CartPage();
var checkoutPage = new CheckoutPage();

describe("Funcionalidade de compra de produto",()=>{
    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/");
    })

    it("Comprando um produto",()=>{
        cartPage.addProducts("standard_user","secret_sauce");

        checkoutPage.addYourInformation("Rodrigo","Pereira","14810100");

        checkoutPage.verifyIfExistCheckoutComplete();
    })

})