/// <reference types="cypress" />
/*
API 9: DELETE To Verify Login
API URL: https://automationexercise.com/api/verifyLogin
Request Method: DELETE
Response Code: 405
Response Message: This request method is not supported. */
describe('API Test', () => {
    it('should handle unsupported DELETE request', () => {
      // API details
      const apiUrl = 'https://automationexercise.com/api/verifyLogin';
  
      // Send a DELETE request to the API
      cy.request({
        method: 'DELETE',
        url: apiUrl,
        failOnStatusCode: false, // Allow Cypress to proceed even if the status code is not 2xx
      }).then((response) => {
        // Check if the status code is 405
        if (response.status === 405) {
          // Validate the response message
          expect(response.body).to.have.property('message', 'This request method is not supported.');
  
          // Add more assertions or testing logic as needed
        } else {
          // Fail the test with a custom error message
          throw new Error('Expected status code 405 but received ' + response.status);
        }
      });
    });
  });
 /* API 12: DELETE METHOD To Delete User Account
API URL: https://automationexercise.com/api/deleteAccount
Request Method: DELETE
Request Parameters: email, password
Response Code: 200
Response Message: Account deleted!*/


describe('Delete Account API Test', () => {
  it('should delete the user account', () => {
    // API URL
    const apiUrl = 'https://automationexercise.com/api/deleteAccount';

    // Request parameters
    const requestBody = {
      email: 'john.doe@example.com', 
      password: 'password123',
    };

    // Send a DELETE request to the API
    cy.request({
      method: 'DELETE',
      url: apiUrl,
      body: requestBody,
      failOnStatusCode: false,
    }).then((response) => {
    
      expect(response.status).to.eq(200);

      expect(response.body).to.have.property('message', 'Account deleted!');
    });
  });
});
