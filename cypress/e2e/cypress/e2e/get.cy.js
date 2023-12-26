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
      it(`should get user detail for email - Test Case ${index + 1}`, () => {
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
          // Ek asertiflerinizi veya daha fazla test mantığını buraya ekleyin
        });
      });
    });
  });
  