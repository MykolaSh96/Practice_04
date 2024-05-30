class GitHubHomePage {
  
  getLogo(){
   return cy.get('.octicon-mark-github')
  }
  getHeaders(){
   return cy.get('.HeaderMenu-item>button, .HeaderMenu-item>a')
  }
  getSearchInput(){
   return cy.get('.header-search-button > .flex-1')
  }
  getSignIn(){
   return  cy.get('.HeaderMenu-link--sign-in ')
  }
  getSignUp(){
   return  cy.get('.HeaderMenu-link--sign-up ')
  }


  clickSignIn(){
    this.getSignIn().click()
  }
  
  }
  
  export default GitHubHomePage