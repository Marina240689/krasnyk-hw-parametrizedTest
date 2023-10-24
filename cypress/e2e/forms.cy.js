
beforeEach(() => {
  cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
  cy.get('[alt="Material Dark Theme"]').click();
  cy.get('[title="Forms"]').click();
  cy.get('[title="Form Layouts"]').click();
})

describe('Fill form without labels', () => {

  const formData = [
    {
      testData: {
        email: 'test@mail.com',
        password: 'Password1'

    },
      expectedResult: {
        email: 'test@mail.com',
        password: 'Password1'
      }},
      
  {
    testData: {
      email: 'email@mail.com',
      password: 'Password2'
    },

    expectedResult: {
      email: 'email@mail.com',
      password: 'Password2'
    }},

  {
    testData: {
      email: 'testmail@mail.com',
      password: 'Password3'
    },

    expectedResult: {
      email: 'testmail@mail.com',
      password: 'Password3'
    }}
  ];

  formData.forEach(data => {

    it(`Fill form with ${data.testData.email} `, () => {
      cy.get('[id="inputEmail1"]').type(data.testData.email);
      cy.get('[id="inputPassword2"]').type(data.testData.password);

      cy.get('[id="inputEmail1"]').should('have.value', data.expectedResult.email);

    })

  })
})


describe('Fill block form', () => {

  const blockFormData = [
    {
      testData: {
        firstName: 'David',
        lastName: 'Smith',
        email: 'test@mail.com',
        wedsite: 'david.com'
    },
      expectedResult: {
        firstName: 'David',
        lastName: 'Smith',
        email: 'test@mail.com',
        wedsite: 'david.com'
      }},
      
  {
    testData: {
        firstName: 'Tony',
        lastName: 'Brash',
        email: 'email@mail.com',
        wedsite: 'tony.com'
    },

    expectedResult: {
      firstName: 'Tony',
      lastName: 'Brash',
      email: 'email@mail.com',
      wedsite: 'tony.com'
    }},

  {
    testData: {
      firstName: 'Samantha',
      lastName: 'Test',
      email: 'testmail@mail.com',
      wedsite: 'samantha.com'
    },

    expectedResult: {
      firstName: 'Samantha',
      lastName: 'Test',
      email: 'testmail@mail.com',
      wedsite: 'samantha.com'
    }}
  ];

  blockFormData.forEach(blockForm => {
    it(`Fill form for ${blockForm.testData.firstName}`, () => {
      cy.get('[id="inputFirstName"]').type(blockForm.testData.firstName).should('have.value', blockForm.expectedResult.firstName);
      cy.get('[id="inputLastName"]').type(blockForm.testData.lastName).should('have.value', blockForm.expectedResult.lastName);
      cy.get('[id="inputEmail"]').type(blockForm.testData.email).should('have.value', blockForm.expectedResult.email);
      cy.get('[id="inputWebsite"]').type(blockForm.testData.wedsite).should('have.value', blockForm.expectedResult.wedsite);

    })


  })

})



