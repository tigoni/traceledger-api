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
}
