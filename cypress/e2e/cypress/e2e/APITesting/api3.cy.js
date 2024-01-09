describe('API 3 testing', () => {
//1.way 
/*API 3: Get All Brands List
API URL: https://automationexercise.com/api/brandsList
Request Method: GET
Response Code: 200
Response JSON: All brands list */

it('should retrieve the list of brands', () => {
    const pathParam1='/api';
    const pathParam2='/brandsList';
    // Send a get request to the API
    cy.request({
      method: 'GET',
      url: `${pathParam1}${pathParam2}`,
      failOnStatusCode: false, // Allow Cypress to proceed even if the status code is not 2xx
/**
     * Validates the response status code and body contents
     * @param {Object} response - The response object to validate. 
     * @returns {void}
     * @description
     - Logs the response body to the command log
    - Validates the response status code is 200
    - Validates the response body contains 'brands'
    */
    }).then((response) => {
        // Validate the response status code
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.eq(200);
        expect(response.body).to.contains('brands')
      })
      })
    })

      //.2.way 

      
it('API 3: Get All Brands List', { env: { hideCredentials: true } }, () => {

  cy.request({
    method: 'get',
    url: 'https://automationexercise.com/api/brandsList',
    form: true,
    body: {}
  }).then((response) => {
    expect(response.status).to.eq(200) 
    expect(response.body).to.contains('brands')
  })
})
