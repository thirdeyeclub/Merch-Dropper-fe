describe('My First test with cypress', function() {
    it('does not do much', function() {
        expect(true).to.equal(true)
    })
})

describe('Home Page', function() {
    it('successfully loads', function() {
        cy.visit('https://dazzling-wiles-602ca4.netlify.com/')
        cy.contains('Labs 20 Merch Dropper')
    })
})

describe('vist the app in localhost', function() {
    it('successfully loads', function() {
        cy.visit('http://localhost:3000/')
    })
})
s
describe('add item to cart', function() {
    it('successfully adds product to cart component', function() {
        cy.visit('http://localhost:3000/')
        cy.get('.cart-btn').click({ multiple: true })
    })
})