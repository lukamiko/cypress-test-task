import '@testing-library/cypress/add-commands'
import { iframe } from './commands/iframe'

// @ts-ignore
Cypress.Commands.add('iframe', iframe)