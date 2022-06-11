class ItemPage{
    //Seletores ou Elementos
    txtUsername = '[data-test="username"]';
    txtPassword = '[data-test="password"]';
    btnLogin = '[data-test="login-button"]';
    btnItem = '#item_4_title_link > .inventory_item_name';
    lblImage = '.inventory_details_img';

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

    clickItem(){
        cy.get(this.btnItem).click();
    }

    verifyImageProduct(should){
        cy.get(this.lblImage).should(should);
    }

    //Funcionalidades
    realizeLoginAndClickItem(username,password){
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLogin();
        this.clickItem();
    }

    verifyIfExistImageProduct(){
        this.verifyImageProduct("be.exist");
    }

}

export default ItemPage;