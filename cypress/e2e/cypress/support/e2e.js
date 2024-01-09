import './commands';
import "cypress-plugin-api";
require('@cypress/xpath');

Cypress.Cookies.defaults({
  preserve: ['csrftoken', 'sessionid'],
});
