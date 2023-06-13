class HomePage{


    getEditBox()
    {
        return cy.get("input[name='name']:nth-child(1)");
    }


    getTwowayBindingBox()
    {
        return cy.get("h4 input[name]");
    }

    getGender()
    {
        return  cy.get("#exampleFormControlSelect1");
    }

    getShopTab()
    {
        return   cy.get("a[href*='shop']");
    }


}


export default HomePage;