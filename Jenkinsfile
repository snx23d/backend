pipeline {
    agent any

    stages {
        stage('Building backend application') {
            steps {
                echo '*** Build backend application ***'
                nodejs('Node-18.16.0') {
                    sh 'npm install --omit=dev'
                    
                }
                
            }
        }
        
        stage('Build tests') {
            steps {
                echo '*** Building tests ***'
                sh 'git submodule update --init --recursive'
                
                dir("backend_tests_js") {
                    nodejs('Node-18.16.0') {
                        sh 'npm install --omit=dev'
                    }
                }
            }
        }
        
        stage('Execute tests') {
            steps {
                echo '*** Executing tests ***'
                nodejs('Node-18.16.0') {
                    //start a background process
                    // https://devops.stackexchange.com/questions/1473/running-a-background-process-in-pipeline-job
                    withEnv(['JENKINS_NODE_COOKIE=dontkill']) {
                        sh 'nohup npm run app &'
                    }
                    sh 'sleep 10'
                }
                dir("backend_tests_js") {
                    nodejs('Node-18.16.0') {
                        sh 'npm run testLinux'
                    }
                }
                
            }
        }
    }
}