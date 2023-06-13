/// <reference types="Cypress"/>

describe('Place order for Pomegranate', ()=>{


    it('Search for Pomegranate  and place order',()=>{

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get("input[placeholder*='Search']").type('t');
        cy.get(".products").as('productsList');
        cy.get('@productsList').find('.product').each(($el,index,$list)=>{
          
         
            if($el.find('h4').text().includes('Pomegranate'))
            {
                cy.wrap($el).find('button').click();
            }
        })

        cy.get("a[class='cart-icon']").click();
        cy.wait(2000)
        cy.get("div[class*='preview'] button").click();
        cy.wait(2000)
        cy.get("div[class='products']").find('button').each(($el1,index,$list)=>
        {
            if($el1.text().includes('Place Order'))
            {
                cy.wrap($el1).click();
            }
          
        })
        cy.get("div[class*='products'] label").should('have.text','Choose Country');


    });

});
