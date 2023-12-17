import { getGreeting } from '../support/app.po';

describe('test-angular-17-ajsdnaaka', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome test-angular-17-ajsdnaaka');
  });
});
