
    /*
  API 4: PUT To All Brands List
  API URL: https://automationexercise.com/api/brandsList
Request Method: PUT
Response Code: 405
Response Message: This request method is not supported. */
describe('API 4 testing', () => {
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

  
  /*
  API 4: PUT To All Brands List
  API URL: https://automationexercise.com/api/brandsList
Request Method: PUT
Response Code: 405
Response Message: This request method is not supported. */
it('should retrieve the list of brands', () => {
        
    const pathParam1='/api';
    const pathParam2='/brandsList';
  cy.request({
    method: 'PUT',
    url: `${pathParam1}${pathParam2}`,
    failOnStatusCode: false
  }).then((response) => {
    cy.log(JSON.stringify(response.body));
    console.log(response.body);
    // Check if the status code is 405
expect(response.status).to.eq(200);  
expect(response.body)
.to.include('{"responseCode": 405, "message": "This request method is not supported."}');  

    
});
})

//3.way


it('API 4: PUT To All Brands List', { env: { hideCredentials: true } }, () => {

  cy.request({
    method: 'put',
    url: 'https://automationexercise.com/api/brandsList',
    form: true,
  }).then((response) => {
    expect(response.body).to.contains('"responseCode": 405') 
    expect(response.body).to.contains('This request method is not supported.')
  })
})
})
    