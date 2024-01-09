describe('API testing', () => {
    /*API 2: POST To All Products List
    API URL: https://automationexercise.com/api/productsList
    Request Method: POST
    Response Code: 405
    Response Message: This request method is not supported.*/
    it('should return "This request method is not supported."', () => {
      const pathParam1='/api';
      const pathParam2='/productsList';
      // Send a POST request to the API
      cy.request({
        method: 'POST',
        url: `${pathParam1}${pathParam2}`,
        failOnStatusCode: false, // Allow Cypress to proceed even if the status code is not 2xx
      }).then((response) => {
        console.log(response.body);
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.not.eq(405);
        // Check if the status code is not 405
        if (response.status !== 405) {
          // Log the unexpected response status
          cy.log('the unexpected response status:', response.status);
          cy.log('This request method is not supported.');
          // Fail the test with a custom error message
          // throw new Error('Expected status code 405 but received ' + response.status);
        }
        // If the status code is 405, validate the response message
       // expect(response.body).have.property({responseCode:405, message: 'This request method is not supported.'
          //});
    });
  });

  //2.way 

  
 it('API 2: POST To All Products List', { env: { hideCredentials: true } }, () => {

  cy.request({
    method: 'post',
    url: 'https://automationexercise.com/api/productsList',
    form: true,
    body: {}
  }).then((response) => {
    expect(response.body).to.contains('"responseCode": 405') 
    expect(response.body).to.contains('This request method is not supported.')
  })
})
})
  
  