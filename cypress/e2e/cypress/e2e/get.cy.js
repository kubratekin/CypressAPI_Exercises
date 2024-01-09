/*API 14: GET user account detail by email
API URL: https://automationexercise.com/api/getUserDetailByEmail
Request Method: GET
Request Parameters: email
Response Code: 200
Response JSON: User Detail */

describe('Get User Detail by Email API Test', () => {
    const testCases = [
      { email: 'user1@example.com', expectedResponse: { code: 200, body: 'User Detail' } },
      { email: 'user2@example.com', expectedResponse: { code: 200, body: 'User Detail' } },
    
    ];
  
    testCases.forEach((testCase, index) => {
      it(`should get user detail for email - Test Case ${index + 1}`, () => {
        cy.request({
          method: 'GET',
          url: 'https://automationexercise.com/api/getUserDetailByEmail',
          qs: {
            email: testCase.email
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(testCase.expectedResponse.code);
          if (response.status === 200) {
            expect(response.body).to.eq(testCase.expectedResponse.body);
          } else {
            throw new Error('Unexpected response')
          }
          // Ek asertiflerinizi veya daha fazla test mantığını buraya ekleyin
        });
      });
    });
  });



  describe('API Test', () => {
    /* API 1: Get All Products List
    API URL: https://automationexercise.com/api/productsList
    Request Method: GET
    Response Code: 200
    Response JSON: All products list 
     */
        it.only('should get products list', () => {
          
          const apiUrl = 'https://automationexercise.com/api/productsList';
    
          cy.request({
           method:'GET',
           url:apiUrl,})
        .then((response) => {
             
             cy.log(response.body);
             cy.log(JSON.stringify(response.body));
             expect(response.status).to.eq(200);
             // response.body.products değeri tanımlı (defined) ve boş değilse geçerli
             //if (response.body.products !== undefined) {
               // expect(response.body.products).to.not.be.empty;
             //} else {
                // Eğer products tanımlı değilse veya undefined ise bir hata mesajı yazabilirsiniz
               // cy.log('Hata: Ürünler listesi tanımlı değil veya undefined.');
             //}
          });
        });
      });