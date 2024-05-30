class GitHubLoginPage {

  getTitle(){
    return cy.get('h1')
    }
  getUserNameLabel(){
    return cy.get('[for="login_field"]')
    }
  getInputUserName(){
    return cy.get('#login_field')
    }
  getPasswordLabel(){
    return cy.get('[for="password"]')
    }
  getInputPassword(){
    return cy.get('#password')
    }

    getForgotPassword(){
      return cy.get('#forgot-password')
    }
    getPasskey(){
      return cy.get('.Button--link > .Button-content > .Button-label')
    }
    getCreateAccountLink(){
      return cy.get('.mt-1 > a')
    }

    getSignButton(){
      return cy.get('.position-relative > .btn')
    }
    getFooters(){
      return cy.get('.footer > ul >li')
    }

    getSignInButton(){
      return cy.get('.position-relative > .btn')
    }

    getErrorMessage(){
      return cy.get('.js-flash-alert')
    }

    clickSignInButton(){
      this.getSignInButton().click()
    }



}

export default GitHubLoginPage