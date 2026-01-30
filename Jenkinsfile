pipeline {
    agent none

    stages {

        stage('Provision EC2') {
            agent { label 'built-in' }
            steps {
                dir('/home/jenkins/tf-ec2') {
                    sh 'terraform apply -auto-approve'
                }
            }
        }

        stage('Wait for Node') {
            agent { label 'built-in' }
            steps {
                timeout(time: 10, unit: 'MINUTES') {
                    waitUntil {
                        script {
                            def node = Jenkins.instance.getNode('docker-builder')
                            node.toComputer()?.isOnline() == true
                        }
                    }
                }
            }
        }

        stage('Clone Repository') {
            agent { label 'docker-builder' }
            steps {
                git branch: 'main',
                    url: 'https://github.com/Geesara-Abenayaka/E-Learning-Marketplace'
            }
        }

        stage('Build FrontEnd') {
            agent { label 'docker-builder' }
            steps {
                sh 'docker build -t geesara/frontend:$BUILD_NUMBER frontend/'
            }
        }

        stage('Build BackEnd') {
            agent { label 'docker-builder' }
            steps {
                sh 'docker build -t geesara/backend:$BUILD_NUMBER backend/'
            }
        }

        stage('Docker Login') {
            agent { label 'docker-builder' }
            steps {
                withCredentials([string(credentialsId: 'dockerhubpassword', variable: 'dockerhubpass')]) {
                    sh 'docker login -u geesara -p $dockerhubpass'
                }
            }
        }

        stage('Push FrontEnd Image') {
            agent { label 'docker-builder' }
            steps {
                sh 'docker push geesara/frontend:$BUILD_NUMBER'
            }
        }

        stage('Push BackEnd Image') {
            agent { label 'docker-builder' }
            steps {
                sh 'docker push geesara/backend:$BUILD_NUMBER'
            }
        }

        stage('Docker Logout') {
            agent { label 'docker-builder' }
            steps {
                sh 'docker logout'
            }
        }

        stage('Destroy EC2') {
            agent { label 'built-in' }
            steps {
                dir('/home/jenkins/tf-ec2') {
                    sh 'terraform destroy -auto-approve'
                }
            }
        }

        stage('Deploy Containers') {
            agent { label 'built-in' }
            steps {
                sh '''
                  /home/jenkins/ansible/venv/bin/ansible-playbook \
                  -i /home/jenkins/ansible/inventory \
                  /home/jenkins/ansible/redeploy.yml
                '''
            }
        }

    }
}



// pipeline {
//     agent any

//     stages {
//         stage('SCM Checkout') {
//             steps {
//                 retry(3) {
//                     git branch: 'main', url: 'https://github.com/Geesara-Abenayaka/E-Learning-Marketplace'
//                 }
//             }
//         }

//         stage('Build Docker Images') {
//             steps {
//                 sh 'docker build -t geesara/backend:$BUILD_NUMBER backend/'
//                 sh 'docker build -t geesara/frontend:$BUILD_NUMBER frontend/'
//             }
//         }
//         stage('Login to Docker Hub') {
//             steps {
//                 withCredentials([string(credentialsId: 'dockerhubpassword', variable: 'dockerhubpass')]) {
//                     sh 'docker login -u geesara -p $dockerhubpass'
//                     }
//             }
//         }
//         stage('Push Images'){
//             steps {
//                 sh 'docker push geesara/backend:$BUILD_NUMBER'
//                 sh 'docker push geesara/frontend:$BUILD_NUMBER'
//             }
//         }
//     }
//     post {
//         always{
//             sh 'docker logout'
//         }
//     }
// }
