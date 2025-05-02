pipeline {
    agent any
    tools { nodejs "NODEJS" }
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Deliver') {
            steps {
                // No chmod equivalent needed on Windows, unless using Git Bash or similar
                bat 'jenkins\\scripts\\deliver.bat'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                bat 'jenkins\\scripts\\kill.bat'
            }
        }
    }
}
