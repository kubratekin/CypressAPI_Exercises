   /* API 1: Get All Products List
    API URL: https://automationexercise.com/api/productsList
    Request Method: GET
    Response Code: 200
    Response JSON: All products list 
     */
    describe('API Test', () => {
    it('API 1: Get All Products List', { env: { hideCredentials: true } }, () => {

    cy.request({
      method: 'GET',
      url: 'https://automationexercise.com/api/productsList',
      form: true,
      body: {}
    }).then((response) => {
      expect(response.status).to.eq(200) 
      expect(response.body).to.contains('products')
    })
})
   

   //2.way
        it('should get products list', () => {
          
          const apiUrl = 'https://automationexercise.com/api/productsList';
    
          cy.request({
           method:'GET',
           url:apiUrl})
        .then((response) => {
             
             cy.log(response.body);
             cy.log(JSON.stringify(response.body));
             expect(response.status).to.eq(200);
          });
        });
      })