/* API 12: DELETE METHOD To Delete User Account
API URL: https://automationexercise.com/api/deleteAccount
Request Method: DELETE
Request Parameters: email, password
Response Code: 200
Response Message: Account deleted!*/


describe('Delete Account API Test', () => {
 
it('API 12: DELETE METHOD To Delete User Account', { env: { hideCredentials: true } }, () => {
      
  cy.request({
    method: 'post',
    url: 'https://automationexercise.com/api/createAccount',
    form: true,
    body: {
      name: "James Bond",
      email: "jamesbond007@gmail.com",
      password: "jamessenha007",
      title: "Mrs.",
      birth_date: "21",
      birth_month: "3",
      birth_year: "2002",
      firstname: "James",
      lastname: "Bond",
      company: "JBC",
      address1: "250 5th Ave, New York, NY 10118, USA.",
      address2: "175 5th Ave, New York, NY 10118, USA.",
      country: "United States",
      zipcode: "359041",
      state: "New York",
      city: "Oswego",
      mobile_number: "+12642312313"
    }
  })
  
  cy.request({
    method: 'delete',
    url: 'https://automationexercise.com/api/deleteAccount',
    form: true,
    body: {
      email: "jamesbond007@gmail.com",
      password: "jamessenha007",
    }
  }).then((response) => {
    expect(response.status).to.eq(200) 
    expect(response.body).to.contains('Account deleted!')
  })
})});
