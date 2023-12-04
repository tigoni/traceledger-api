job("Build and Run Tests") {
    container(displayName = "Run build/test script", image = "node:18-alpine") {
        shellScript {
            interpreter = "/bin/sh"
            content = """
                echo Install npm dependencies...
                npm ci
                echo Run build if it exists in package.json...
                npm run build --if-present
                echo Run tests...
                npm run test
                echo Completed build/test job!
            """
        }
    }

    container("amazoncorretto:17-alpine") {
    kotlinScript { api ->
        api.space().projects.automation.deployments.start(
            project = api.projectIdentifier(),
            targetIdentifier = TargetIdentifier.Key("staging"),
            version = "1.0.0",
            // automatically update deployment status based on a status of a job
            syncWithAutomationJob = true
        )
    }
}
}