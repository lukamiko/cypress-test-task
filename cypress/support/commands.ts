import "@testing-library/cypress/add-commands"
import { iframe } from "./commands/iframe"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
Cypress.Commands.add("iframe", iframe)
