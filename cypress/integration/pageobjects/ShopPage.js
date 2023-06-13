class ShopPage{


    getCheckout()
    {
        return cy.get("#navbarResponsive a");
    }

    getCheckoutConfirm()
    {
        return cy.get("button[class*='success']");
    }

    getCountry()
    {
        return cy.get("input[id='country']");
    }

    getCountrySuggestions()
    {
        return cy.get("div[class*='suggestions'] li a");
    }

    getPurchase()
    {
        return cy.get("input[value='Purchase']");
    }

    getSuccess()
    {
        return cy.get("div[class*='success'] strong");
    }

    getCheckbox()
    {
        return cy.get("#checkbox2");
    }

}


export default ShopPage;