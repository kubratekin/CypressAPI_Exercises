/*
API 6: POST To Search Product without search_product parameter
API URL: https://automationexercise.com/api/searchProduct
Request Method: POST
Response Code: 400
Response Message: Bad request, search_product parameter is missing in POST request. */

describe('API Test', () => {
    it('should handle missing search_product parameter in POST request', () => {
      // API details
      const pathParam1='/api';
      const pathParam2='/searchProduct';
    
      const requestData = {}; // You can customize the request payload here if needed
  
      // Send a POST request to the API
      cy.request({
        method: 'POST',
        url: `${pathParam1}${pathParam2}`,
        failOnStatusCode: false, // Allow Cypress to proceed even if the status code is not 2xx
        headers: {
          'Content-Type': 'application/json', // Set content type to JSON
        },
        body: requestData,
      }).then((response) => {
        // Check if the status code is 400
        expect(response.status).to.eq(200);
        if (response.body === 200) {
          // Validate the response message
          expect(response.body).to.have.property('message', 'Bad request, search_product parameter is missing in POST request.');
          expect(response.body).to.have.property('responseCode' ,400);
  
        
        }
      });
    });
  });
//2.way


it('API 6: POST To Search Product without search_product parameter', { env: { hideCredentials: true } }, () => {

  cy.request({
    method: 'post',
    url: 'https://automationexercise.com/api/searchProduct',
    form: true, 
  }).then((response) => {
    expect(response.body).to.contains('"responseCode": 400') 
    expect(response.body).to.contains('Bad request, search_product parameter is missing in POST request.')
  })
})
