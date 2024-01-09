/*API 14: GET user account detail by email
API URL: https://automationexercise.com/api/getUserDetailByEmail
Request Method: GET
Request Parameters: email
Response Code: 200
Response JSON: User Detail */

describe('Get User Detail by Email API Test', () => {
    const testCases = [
      { email: 'user1@example.com', expectedResponse: { code: 200, body: 'User Detail' } },
      { email: 'user2@example.com', expectedResponse: { code: 200, body: 'User Detail' } },
    
    ];
  
    testCases.forEach((testCase, index) => {
      it.skip(`should get user detail for email - Test Case ${index + 1}`, () => {
        cy.request({
          method: 'GET',
          url: 'https://automationexercise.com/api/getUserDetailByEmail',
          qs: {
            email: testCase.email
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(testCase.expectedResponse.code);
          if (response.status === 200) {
            expect(response.body).to.eq(testCase.expectedResponse.body);
          } else {
            throw new Error('Unexpected response')
          }
        
        });
      });
    });
  });

  //2.way 

  
it('API 14: GET user account detail by email', { env: { hideCredentials: true } }, () => {
    
  cy.request({
  method: 'post',
  url: 'https://automationexercise.com/api/createAccount',
  form: true,
  body: {
    name: "James Bond",
    email: "jamesbond007@gmail.com",
    password: "jamessenha007",
    title: "Mrs.",
    birth_date: "21",
    birth_month: "3",
    birth_year: "2002",
    firstname: "James",
    lastname: "Bond",
    company: "JBC",
    address1: "250 5th Ave, New York, NY 10118, USA.",
    address2: "175 5th Ave, New York, NY 10118, USA.",
    country: "United States",
    zipcode: "359041",
    state: "New York",
    city: "Oswego",
    mobile_number: "+12642312313"
  }
  })

  cy.request({
    method: 'get',
    url: 'https://automationexercise.com/api/getUserDetailByEmail?email=jamesbond007@gmail.com',
    form: true,
    body: {
      email: "jamesbond007@gmail.com",
    }
  }).then((response) => {
    expect(response.status).to.eq(200) 
    expect(response.body).to.contains('"name": "James Bond"')
  })

  cy.request({
    method: 'delete',
    url: 'https://automationexercise.com/api/deleteAccount',
    form: true,
    body: {
      email: "jamesbond007@gmail.com",
      password: "jamessenha007",
    
    }
  }).then((response) => {
    expect(response.body).to.contains('Account deleted!')
  })
})



  

