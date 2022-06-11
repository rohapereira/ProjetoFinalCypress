class ProductsPage{
    //Elementos
    lblProducts = '.title';
    txtUsername = '[data-test="username"]';
    txtPassword = '[data-test="password"]';
    btnLogin = '[data-test="login-button"]';
    btnAddToCart = '[data-test="add-to-cart-sauce-labs-backpack"]';
    btnCart = '.shopping_cart_badge';

    //Ações
    verifyProducts(should){
        cy.get(this.lblProducts).should(should);
    }

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

    verifyCartFull(should){
        cy.get(this.btnCart).should(should);
    }

    //Funcionalidades
    verifyIfExistProducts(){
        this.verifyProducts("be.exist");
    }

    addProductToCart(username,password){
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLogin();
        this.clickAddToCart();
    }

    verifyIfCartIsFull(){
        this.verifyCartFull("be.exist");
    }

}

export default ProductsPage;