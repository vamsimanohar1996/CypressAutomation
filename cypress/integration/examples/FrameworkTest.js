/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />

import 'cypress-iframe'
import HomePage from '../pageobjects/HomePage';
import ShopPage from '../pageobjects/ShopPage';


describe("Child Tabs/Windows test", ()=>
{


    before(()=>{
     
        cy.fixture('example').then(function(data)
        {
                this.data=data;

        })

    })


    it('Framework test-1',function()
    {

        

        const homePage = new HomePage();
        const shopPage = new ShopPage();
        cy.visit(Cypress.env('url'))
        ;

        homePage.getEditBox().type(this.data.name);
        homePage.getGender().select(this.data.gender);
        homePage.getTwowayBindingBox().should('have.value',this.data.name);
        homePage.getShopTab().click();

        this.data.products.forEach(function(product){
            cy.selectProduct(product);
        })
    
        shopPage.getCheckout().click();
        var sum=0;
       
        cy.get("tr td[class*='text']:nth-child(4) strong").each(($el2,index,$list)=>{
            var price = $el2.text().substring(3,8).trim();

            cy.log(typeof(price));
            sum = sum + parseInt(price);
           
        }).then(function(){

            
        cy.log(sum);

        })


        cy.get("td h3 strong").then(function(total){
            const totalValue = total.text().substring(2);
            cy.log(totalValue);
            expect(parseInt(totalValue)).to.be.equal(sum);

        })

        
       
        shopPage.getCheckoutConfirm().click();
        shopPage.getCountry().type(this.data.country);
      //  cy.wait(5000);
      Cypress.config('defaultCommandTimeout',10000);
        shopPage.getCountrySuggestions().each(($el,index,$list)=>
        {
              cy.log($el.text());
              if($el.text().includes('India'))
              {
                cy.wrap($el).click();
              }
        })

        shopPage.getCheckbox().click({force:true});
        shopPage.getPurchase().click();
        shopPage.getSuccess().should('have.text','Success!');
        cy.get("div[class*='alert']").then(function(alert){
            const text = alert.text();
            cy.log(text);
            expect(text.includes('delivered')).to.be.true;
        })
    
      

    });



 

});