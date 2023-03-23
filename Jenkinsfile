pipeline {

    agent any
    
    environment {
        PASS = credentials('registry-pass') 
    }

    stages {

        stage('Build') {
            steps {
                sh '''
                    echo "hola"
                '''
            }
        }
       
    }
}
