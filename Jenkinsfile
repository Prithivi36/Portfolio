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
        stage("try"){
            steps{
                sh'''
                    ls -l
                    cd /var/www/html
                    ls -l
                '''
            }
        }
    }
}