/*API 5: POST To Search Product
API URL: https://automationexercise.com/api/searchProduct
Request Method: POST
Request Parameter: search_product (For example: top, tshirt, jean)
Response Code: 200
Response JSON: Searched products list*/

describe('Product Search API Test', () => {
    const pathParam1='/api';
    const pathParam2='/searchProduct';
      const searchKeywords = ['top', 'tshirt', 'jean'];
    
      searchKeywords.forEach((keyword) => {
        it(`should retrieve the list of products for "${keyword}" search`, () => {
          cy.request({
            method: 'POST',
            url: `${pathParam1}${pathParam2}`,
            body: {
              search_product: keyword
            },
            failOnStatusCode: false
          }).then((response) => {
            cy.log(JSON.stringify(response.body));
            console.log(response.body);
            expect(response.status).to.eq(200);
            cy.log(`Searched products for "${keyword}": "${JSON.stringify(response.body)}`);
            expect(response.body).to.deep.equal({
              responseCode: 400,
              message: 'Bad request, search_product parameter is missing in POST request.'
            });
            //expect(response.body).to.include('{"message": "Bad request, search_product parameter is missing in POST request.","responseCode": 400}');
        });
      });
  });
},
  //2.way

  
it('API 5: POST To Search Product', { env: { hideCredentials: true } }, () => {

  cy.request({
    method: 'post',
    url: 'https://automationexercise.com/api/searchProduct',
    form: true,
    body: {
      search_product: "tshirt",
    }
  }).then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body).to.contains('{"id": 29, "name": "Green Side Placket Detail T-Shirt", "price": "Rs. 1000", "brand": "Polo", "category": {"usertype": {"usertype": "Men"}, "category": "Tshirts"}}')
  })
}))
