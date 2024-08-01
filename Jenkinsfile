pipeline{
    agent{
        node{
            label 'master'
        }
    }
    tools{
        nodejs 'node'
    }
    stages{
        
        
        stage("build"){
            steps{
                sh'''
                 cd Portfolio
                 npm install
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
                    cd Portfolio
                    sudo cp -r dist/* /var/www/html/
                '''
            }
        }
    }
}