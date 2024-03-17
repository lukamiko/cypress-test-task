import {MainPage} from "../pageObjects/MainPage";
import {Users} from "../support/types/Users";
import {MainMenuElement} from "../elements/MainMenuElement";
import {BlogPage} from "../pageObjects/BlogPage";
import {RequestDemoElement} from "../elements/RequestDemoElement";

describe('User is able to request demo product', () => {
  const mainPage = new MainPage()
  const blogPage = new BlogPage()
  const requestDemoModal = new RequestDemoElement()
  const mainMenu = new MainMenuElement()
  let users: Users

  beforeEach(() => {
    cy.fixture('users').then((userList: Users) => {
      users = userList
    })
  })

  it('Request demo and resign after fill form', () => {
    mainPage
        .navigate()

    mainMenu
        .openResourcesTab()
        .selectBlog()

    blogPage
        .openLatestPost()

    mainMenu
        .clickRequestDemo()

    requestDemoModal
        .fillEmail(users.regularUser.email)
        .fillFirstName(users.regularUser.firstName)
        .fillLastName(users.regularUser.lastName)
        .fillCompanyName(users.regularUser.companyName)
        .fillJobTitle(users.regularUser.jobTitle)
        .close()
  })
})