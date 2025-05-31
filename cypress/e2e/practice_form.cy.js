// cypress/e2e/practice_form.cy.js

describe('DemoQA Automation Practice Form', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill and submit the practice form and validate the submission', () => {
    cy.get('#firstName').type('YourFirstName');
    cy.get('#lastName').type('YourLastName');
    cy.get('#userEmail').type('your.email@example.com');
    cy.get('label[for="gender-radio-1"]').click();
    cy.get('#userNumber').type('1234567890');
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('1930');
    cy.get('.react-datepicker__month-select').select('1');
    cy.get('.react-datepicker__day--028:not(.react-datepicker__day--outside-month)').click();
    cy.get('#subjectsInput').type('Economics');
    cy.get('.subjects-auto-complete__menu-list .subjects-auto-complete__option').contains(/^Economics$/).click();
    cy.get('label[for="hobbies-checkbox-3"]').click();
    cy.get('input[type="file"]#uploadPicture').selectFile('cypress/fixtures/files/image.png');
    cy.get('#currentAddress').type('Connaught Lane');
    cy.get('#state').click();
    cy.get('#react-select-3-option-0').click();
    cy.get('#city').click();
    cy.get('#react-select-4-option-0').click();
    cy.get('#submit').click();

    cy.get('.modal-content').should('be.visible');
    cy.get('.modal-body table tbody tr').eq(0).find('td').eq(1).should('have.text', 'YourFirstName YourLastName');
    cy.get('.modal-body table tbody tr').eq(1).find('td').eq(1).should('have.text', 'your.email@example.com');
    cy.get('.modal-body table tbody tr').eq(2).find('td').eq(1).should('have.text', 'Male');
    cy.get('.modal-body table tbody tr').eq(3).find('td').eq(1).should('have.text', '1234567890');
    cy.get('.modal-body table tbody tr').eq(4).find('td').eq(1).should('have.text', '28 February,1930');
    cy.get('.modal-body table tbody tr').eq(5).find('td').eq(1).should('have.text', 'Economics');
    cy.get('.modal-body table tbody tr').eq(6).find('td').eq(1).should('have.text', 'Music');
    cy.get('.modal-body table tbody tr').eq(7).find('td').eq(1).should('have.text', 'image.png');
    cy.get('.modal-body table tbody tr').eq(8).find('td').eq(1).should('have.text', 'Connaught Lane');
    cy.get('.modal-body table tbody tr').eq(9).find('td').eq(1).should('have.text', 'NCR Delhi');
    cy.get('#closeLargeModal').click();
  });
});