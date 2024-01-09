//const { method } = require("bluebird");


/*API 2: POST To All Products List
API URL: https://automationexercise.com/api/productsList
Request Method: POST
Response Code: 405
Response Message: This request method is not supported.*/


    it.skip('should return "This request method is not supported."', () => {
      const apiUrl = 'https://automationexercise.com/api/productsList';
  
      // Send a POST request to the API
      cy.request({
        method: 'POST',
        url: apiUrl,
        failOnStatusCode: false, // Allow Cypress to proceed even if the status code is not 2xx
      }).then((response) => {
        // Check if the status code is not 405
        if (response.status !== 405) {
          // Log the unexpected response status
          cy.log('Unexpected response status:', response.status);
          // Fail the test with a custom error message
          throw new Error('Expected status code 405 but received ' + response.status);
        }
  
        // If the status code is 405, validate the response message
        expect(response.body).to.have.property('message', 'This request method is not supported.');
    });});






      /*API 3: Get All Brands List
API URL: https://automationexercise.com/api/brandsList
Request Method: GET
Response Code: 200
Response JSON: All brands list */



    it.skip('should retrieve the list of brands', () => {
      cy.request('https://automationexercise.com/api/brandsList')
        .then((response) => {
          // Validate the response status code
          expect(response.status).to.eq(200);
  
          const brands = response.body.brands;
  
          // Check if brands is defined and not empty
          if (brands && brands.length > 0) {
            brands.forEach((brand) => {
              // Log brand information
              cy.log('Brand ID: ' + brand.id + ', Name: ' + brand.brand);
  
              // Add your assertions or further testing logic here
              // For example, assuming each brand has an "id" and "brand" property:
              expect(brand).to.have.property('id').to.be.a('number');
              expect(brand).to.have.property('brand').to.be.a('string');
            });
          } else {
            // Fail the test if the brand list is empty
            throw new Error('Brand list is empty');
          }
        });
    });


  /*
  API 4: PUT To All Brands List
  API URL: https://automationexercise.com/api/brandsList
Request Method: PUT
Response Code: 405
Response Message: This request method is not supported. */
        it('should retrieve the list of brands', () => {
          cy.request({
            method: 'PUT',
            url: 'https://automationexercise.com/api/brandsList',
            failOnStatusCode: false
          }).then((response) => {
            if (response.status === 200) {
              cy.log('Brand list retrieved successfully');
              // Add your assertions or further testing logic here
            } else {
              throw new Error('Failed to retrieve brand list');
            }
          });
        });
 
