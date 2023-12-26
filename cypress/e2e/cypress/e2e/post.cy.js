/*API 5: POST To Search Product
API URL: https://automationexercise.com/api/searchProduct
Request Method: POST
Request Parameter: search_product (For example: top, tshirt, jean)
Response Code: 200
Response JSON: Searched products list*/

describe('Product Search API Test', () => {
    const searchKeywords = ['top', 'tshirt', 'jean'];
  
    searchKeywords.forEach((keyword) => {
      it.skip(`should retrieve the list of products for "${keyword}" search`, () => {
        cy.request({
          method: 'POST',
          url: 'https://automationexercise.com/api/searchProduct',
          body: {
            search_product: keyword
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(200);
          cy.log(`Searched products for "${keyword}": ${JSON.stringify(response.body)}`);
          // Add your assertions or further testing logic here
        });
      });
    });
});
/*
API 6: POST To Search Product without search_product parameter
API URL: https://automationexercise.com/api/searchProduct
Request Method: POST
Response Code: 400
Response Message: Bad request, search_product parameter is missing in POST request. */

describe('API Test', () => {
    it.skip('should handle missing search_product parameter in POST request', () => {
      // API details
      const apiUrl = 'https://automationexercise.com/api/searchProduct';
      const requestData = {}; // You can customize the request payload here if needed
  
      // Send a POST request to the API
      cy.request({
        method: 'POST',
        url: apiUrl,
        failOnStatusCode: false, // Allow Cypress to proceed even if the status code is not 2xx
        headers: {
          'Content-Type': 'application/json', // Set content type to JSON
        },
        body: requestData,
      }).then((response) => {
        // Check if the status code is 400
        if (response.status === 400) {
          // Validate the response message
          expect(response.body).to.have.property('message', 'Bad request, search_product parameter is missing in POST request.');
  
          // Add more assertions or testing logic as needed
        } else {
          // Fail the test with a custom error message
          throw new Error('Expected status code 400 but received ' + response.status);
        }
      });
    });
  });

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
          } else {
            throw new Error('Expected status code 200 but received ' + response.status);
        }
          // Add your assertions or further testing logic here
        });
      });
    });
  });

  /*API 8: POST To Verify Login without email parameter
  API URL: https://automationexercise.com/api/verifyLogin
Request Method: POST
Request Parameter: password
Response Code: 400
Response Message: Bad request, email or password parameter is missing in POST request. */

describe('Login API Test', () => {
    it.skip('should handle missing email or password parameter', () => {
      cy.request({
        method: 'POST',
        url: 'https://automationexercise.com/api/verifyLogin',
        body: { password: 'testPassword' }, // Only including password parameter to trigger the 400 response
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(400);
        if (response.status !== 400) {
            expect(response.body.message).to.have.property('message', 'Bad Request response due to missing email or password parameter');
          } else {
            throw new Error('Expected status code 400 but received ' + response.status);
        }
        cy.log('Received 400 Bad Request response due to missing email or password parameter');
        // Add your assertions or further testing logic here
      });
    });
  });
  /*API 10: POST To Verify Login with invalid details
API URL: https://automationexercise.com/api/verifyLogin
Request Method: POST
Request Parameters: email, password (invalid values)
Response Code: 404
Response Message: User not found! */

describe('Verify Login API Test with Invalid Details', () => {
    const testCases = [
      { email: 'invalid1@example.com', password: 'invalidPass1', expectedResponse: { code: 404, message: 'User not found!' } },
      { email: 'invalid2@example.com', password: 'invalidPass2', expectedResponse: { code: 404, message: 'User not found!' } },

    ];
    testCases.forEach((testCase, index) => {
      it.skip(`should verify login with invalid details - Test Case ${index + 1}`, () => {
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
          if (response.status === 404) {
            expect(response.body.message).to.eq(testCase.expectedResponse.message);
          } else {
            throw new Error(`Expected status code 404 but received ${response.status}`);
          }
          // Add your assertions or further testing logic here
        });
      });
    });
  });

  /*API 11: POST To Create/Register User Account
API URL: https://automationexercise.com/api/createAccount
Request Method: POST
Request Parameters: name, email, password, title (for example: Mr, Mrs, Miss), birth_date, birth_month, birth_year, firstname, lastname, company, address1, address2, country, zipcode, state, city, mobile_number
Response Code: 201
Response Message: User created! */

describe('Create Account API Test', () => {
    it('should create a new user account', () => {
      const apiUrl = 'https://automationexercise.com/api/createAccount';
  
      const requestBody = {
        name: 'Ali Doe',
        email: 'john.doe@example.com',
        password: 'password123',
        title: 'Mr',
        birth_date: '01',
        birth_month: '01',
        birth_year: '1990',
        firstname: 'John',
        lastname: 'Doe',
        company: 'Example Company',
        address1: '123 Main Street',
        address2: 'Apt 4B',
        country: 'United States',
        zipcode: '12345',
        state: 'California',
        city: 'San Francisco',
        mobile_number: '1234567890'
      };
  
    
      cy.request({
        method: 'POST',
        url: apiUrl,
        body: requestBody,
        failOnStatusCode: false, // Allow Cypress to proceed even if the status code is not 2xx
      }).then((response) => {
        
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('message', 'User created!');
  
      });
    });
  });
  
  

  
  
  
  
  
  
  
  




  
  