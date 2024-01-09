/*
API 9: DELETE To Verify Login
API URL: https://automationexercise.com/api/verifyLogin
Request Method: DELETE
Response Code: 405
Response Message: This request method is not supported. */
describe('API Test', () => {
    
it('API 09: DELETE To Verify Login', { env: { hideCredentials: true } }, () => {

  cy.request({
    method: 'delete',
    url: 'https://automationexercise.com/api/verifyLogin',
    form: true,
  }).then((response) => {
    expect(response.body).to.contains('"responseCode": 405') 
    expect(response.body).to.contains('This request method is not supported.')
  })
}) })
