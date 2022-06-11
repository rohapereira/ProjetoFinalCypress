class CheckoutPage{
    //Elementos
    txtFirstName = '[data-test="firstName"]';
    txtLastName = '[data-test="lastName"]';
    txtZipCode = '[data-test="postalCode"]';
    btnContinue = '[data-test="continue"]';
    btnFinish = '[data-test="finish"]';
    lblComplete = '.title';

    //Ações
    typeFirstName(firstname){
        cy.get(this.txtFirstName).type(firstname);
    }

    typeLastName(lastname){
        cy.get(this.txtLastName).type(lastname);
    }

    typeZipCode(zipcode){
        cy.get(this.txtZipCode).type(zipcode);
    }

    clickContinue(){
        cy.get(this.btnContinue).click();
    }

    clickFinish(){
        cy.get(this.btnFinish).click();
    }

    verifyCheckoutComplete(should){
        cy.get(this.lblComplete).should(should);
    }

    //Funcionalidades
    addYourInformation(firstName,lastName,zipcode){
        this.typeFirstName(firstName);
        this.typeLastName(lastName);
        this.typeZipCode(zipcode);
        this.clickContinue();
        this.clickFinish();
    }

    verifyIfExistCheckoutComplete(){
        this.verifyCheckoutComplete("be.exist");
    }

}

export default CheckoutPage;