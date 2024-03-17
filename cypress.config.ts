import { defineConfig } from "cypress"
import * as fs from "fs"

export default defineConfig({
    viewportWidth: 1201,
    viewportHeight: 800,
    chromeWebSecurity: false,
    watchForFileChanges: false,
    screenshotOnRunFailure: true,
    video: true,
    videoCompression: true,
    e2e: {
        baseUrl: "http://www.nobl9.com",
        setupNodeEvents(on) {
            on(
                "after:spec",
                (spec: Cypress.Spec, results: CypressCommandLine.RunResult) => {
                    if (results && results.video) {
                        const failures = results.tests.some((test) =>
                            test.attempts.some((attempt) => attempt.state === "failed")
                        )
                        if (!failures) {
                            fs.unlinkSync(results.video)
                        }
                    }
                }
            )
        },
    },
})
