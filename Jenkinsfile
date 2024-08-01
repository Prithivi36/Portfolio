pipeline{
    agent{
        node{
            label 'master'
        }
    }
    
    stages{
        stage("Configure Git Safe Directory") {
            steps {
                sh 'git config --global --add safe.directory /home/ubuntu/Portfolio'
            }
        }
        stage("git"){
            steps{
                sh'''
                    cd /home/ubuntu/Portfolio
                    git pull origin main
                '''
            }
        }
        stage("build"){
            steps{
                sh'''
                 cd /home/ubuntu/Portfolio/Portfolio
                 npm run build
                '''
            }
        }
        stage("clean"){
            steps{
                sh'''
                    cd /var/www/
                    sudo rm -rf html
                    mkdir html
                '''
            }
        }
        stage("deploy"){
            steps{
                sh'''
                    cd /home/ubuntu/Portfolio/Portfolio
                    sudo cp -r dist/* /var/www/html/
                '''
            }
        }
    }
}