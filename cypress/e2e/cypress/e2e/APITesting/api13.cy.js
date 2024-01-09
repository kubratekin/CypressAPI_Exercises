/*API 13: PUT METHOD To Update User Account
API URL: https://automationexercise.com/api/updateAccount
Request Method: PUT
Request Parameters: name, email, password, title (for example: Mr, Mrs, Miss), birth_date, birth_month, birth_year, firstname, lastname, company, address1, address2, country, zipcode, state, city, mobile_number
Response Code: 200
Response Message: User updated! */

describe('Update Account API Test', () => {

it('API 13: PUT METHOD To Update User Account', { env: { hideCredentials: true } }, () => {
      
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
    method: 'put',
    url: 'https://automationexercise.com/api/updateAccount',
    form: true,
    body: {
      name: "James Bond",
      email: "jamesbond007@gmail.com",
      password: "jamessenha007",
      title: "Mrs.",
      birth_date: "22",
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
  }).then((response) => {
    expect(response.status).to.eq(200) 
    expect(response.body).to.contains('User updated!')
  })

  cy.request({
    method: 'delete',
    url: 'https://automationexercise.com/api/deleteAccount',
    form: true,
    body: {
      name: "James Bond",
      email: "jamesbond007@gmail.com",
      password: "jamessenha007",
      title: "Mrs.",
      birth_date: "22",
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
  }).then((response) => {
    expect(response.status).to.eq(200) 
    expect(response.body).to.contains('Account deleted!')
  })
})
})
