
const baseUrl = Cypress.config().baseUrl;

describe('User Routes', () => {
  it('registers a new user', () => {  
    cy.fixture('example').then((testUser) => {  
      cy.request({
        method: 'POST',
        url: `${baseUrl}/v1/api/register`, 
        body: testUser, 
      }).then((response) => {  
        expect(response.status).to.eq(201); 
        expect(response.body.message).to.eq('User registered successfully');
      });
    });
  });

  it('gets users data and the username matches test data', () => {
    cy.fixture('example').then((expectedUserData) => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/v1/api/users`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        const username = response.body[0].username;
        expect(username).to.eq(expectedUserData.username);
      });
    });
  });

  it('logs in a user', () => { 
    cy.fixture('example').then((loginData) => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/v1/api/login`, 
        body: loginData, 
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
});