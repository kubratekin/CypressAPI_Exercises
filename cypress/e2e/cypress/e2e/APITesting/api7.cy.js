 /*API 7: POST To Verify Login with valid details
API URL: https://automationexercise.com/api/verifyLogin
Request Method: POST
Request Parameters: email, password
Response Code: 200
Response Message: User exists! */
describe('Login API Test', () => {
    const testCases = [
      { email: 'user1@example.com', password: 'pass123', expectedResponse: { code: 200, message: 'User exists!' } },
      { email: 'user2@example.com', password: 'pass456', expectedResponse: { code: 200, message: 'User exists!' } },
      // Add more test cases as needed
    ];
   testCases.forEach((testCase, index) => {
      it.skip(`should verify login for test case ${index + 1}`, () => {
        cy.request({
          method: 'POST',
          url: 'https://automationexercise.com/api/verifyLogin',
          body: {
            email: testCase.email,
            password: testCase.password
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(testCase.expectedResponse.code);
          if (response.status === 200) {
            expect(response.body.message).to.eq(testCase.expectedResponse.message);
          } 
          // Add your assertions or further testing logic here
        });
      });
    });
  });

  
 
  //2.way

it('API 07: POST To Verify Login with valid details', { env: { hideCredentials: true } }, () => {

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
    method: 'post',
    url: 'https://automationexercise.com/api/verifyLogin',
    form: true,
    body: {
      email: "jamesbond007@gmail.com",
      password: "jamessenha007",
    }
  }).then((response) => {
    expect(response.status).to.eq(200) 
    expect(response.body).to.contains('User exists!')
})

  cy.request({
    method: 'delete',
    url: 'https://automationexercise.com/api/deleteAccount',
    form: true,
    body: {
      email: "jamesbond007@gmail.com",
      password: "jamessenha007",
    
    }
  })  
})
