/*API 13: PUT METHOD To Update User Account
API URL: https://automationexercise.com/api/updateAccount
Request Method: PUT
Request Parameters: name, email, password, title (for example: Mr, Mrs, Miss), birth_date, birth_month, birth_year, firstname, lastname, company, address1, address2, country, zipcode, state, city, mobile_number
Response Code: 200
Response Message: User updated! */

describe('Update Account API Test', () => {
    it('should update the user account', () => {
      // API URL
      const apiUrl = 'https://automationexercise.com/api/updateAccount';
  
      // Request parameters
      const requestBody = {
        name: 'Ayse', // Replace with the updated name
        email: 'john.doe@gmail.com', // Replace with the actual email
        password: 'newpassword123', // Replace with the new password
        title: 'Mr',
        birth_date: '01',
        birth_month: '01',
        birth_year: '1990',
        firstname: 'John',
        lastname: 'Doe',
        company: 'cypress', // Replace with the updated company name
        address1: '456 Main Street', // Replace with the updated address
        address2: 'Apt 8C', // Replace with the updated address
        country: 'United States',
        zipcode: '54321', // Replace with the updated ZIP code
        state: 'New York', // Replace with the updated state
        city: 'New York City', // Replace with the updated city
        mobile_number: '9876543210', // Replace with the updated mobile number
      };
  
      // Send a PUT request to the API
      cy.request({
        method: 'PUT',
        url: apiUrl,
        body: requestBody,
        failOnStatusCode: false, // Allow Cypress to proceed even if the status code is not 2xx
      }).then((response) => {
        // Validate the response status code
        expect(response.status).to.eq(200);
  
        // Validate the response message
        expect(response.body).to.have.property('message', 'User updated!');
  
        // Add more assertions or testing logic as needed
      });
    });
  });
  