pipeline {
    agent any

    stages {
        stage('Git Clone') {
            steps {
                checkout scm
            }
        }

        stage('Docker build') {
            steps {
                script {
                    sh """
                        docker build -t ${env.JOB_NAME}:${env.BUILD_ID} .
                    """
                }

            }
        }

        stage ('Deploy') {
            steps {
                script {
                    def CONTAINER_ID = sh(script: "docker ps -a | grep -0e ${env.JOB_NAME} | cut -c1-10", returnStdout: true).trim();
                    if (CONTAINER_ID) {
                        sh """
                            docker rm -f ${CONTAINER_ID}
                        """
                    }
                    sh "docker run -d -p 7000:3000 ${env.JOB_NAME}-${env.PROFILE} ${env.JOB_NAME}:${env.BUILD_ID}"
                }
            }
        }
    }
}