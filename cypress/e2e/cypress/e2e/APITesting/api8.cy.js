describe('APi testing',() => {
  /*API 8: POST To Verify Login without email parameter
  API URL: https://automationexercise.com/api/verifyLogin
Request Method: POST
Request Parameter: password
Response Code: 400
Response Message: Bad request, email or password parameter is missing in POST request. */
it('API 08: POST To Verify Login without email parameter', { env: { hideCredentials: true } }, () => {

    cy.request({
      method: 'post',
      url: 'https://automationexercise.com/api/verifyLogin',
      form: true,
      body: {
        password: "jamessenha007",
      }  
    }).then((response) => {
      expect(response.body).to.contains('"responseCode": 400') 
      expect(response.body).to.contains('Bad request, email or password parameter is missing in POST request.')
    })
})
})




describe('Login API Test', () => {
  it('should handle missing email or password parameter', () => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/verifyLogin',
      body: { 
        password: 'testPassword',
       }, // Only including password parameter to trigger the 400 response
      failOnStatusCode: false
    }).then((response) => {
      expect(response.body.responseCode).to.eq(400);
      
      expect(response.body.message).contains('Bad request, email or password parameter is missing in POST request.');
        },
      cy.log('Received 400 Bad Request response due to missing email or password parameter'),
      // Add your assertions or further testing logic here
  )});
});
