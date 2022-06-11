class CartPage{
    //Elementos
    txtUsername = '[data-test="username"]';
    txtPassword = '[data-test="password"]';
    btnLogin = '[data-test="login-button"]';
    btnAddToCart = '[data-test="add-to-cart-sauce-labs-backpack"]';
    btnCart = '.shopping_cart_badge';
    btnCheckout = '[data-test="checkout"]';

    //Ações
    typeUsername(username){
        cy.get(this.txtUsername).type(username);
    }

    typePassword(password){
        cy.get(this.txtPassword).type(password);
    }

    clickLogin(){
        cy.get(this.btnLogin).click();
    }

    clickAddToCart(){
        cy.get(this.btnAddToCart).click();
    }

    clickCart(){
        cy.get(this.btnCart).click();
    }

    clickCheckout(){
        cy.get(this.btnCheckout).click();
    }

    //Funcionalidades
    addProducts(username,password){
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLogin();
        this.clickAddToCart();
        this.clickCart();
        this.clickCheckout();
    }

}

export default CartPage;