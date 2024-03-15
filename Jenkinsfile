void setBuildStatus(String message, String state) {
  step([
      $class: "GitHubCommitStatusSetter",
      reposSource: [$class: "ManuallyEnteredRepositorySource", url: "https://github.com/Bugz296/Login-and-Registration-using-Express.git"],
      contextSource: [$class: "ManuallyEnteredCommitContextSource", context: "ci/jenkins/build-status"],
      errorHandlers: [[$class: "ChangingBuildStatusErrorHandler", result: "UNSTABLE"]],
      statusResultSource: [ $class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]] ]
  ]);
} 

applicationIPAddress= "52.74.59.195"
sourceBranch = ghprbSourceBranch
targetBranch = ghprbTargetBranch

pipeline {
    agent any
    //// tools { nodejs "NodeJS" }
    
    stages {
        stage('Deploy Simple Application') {
            steps {
                script {
                    Integer port = 8000
                    String directory = "/var/www/jcb.cipherville.com"
                    String staging_env = "sample_env"

                    echo "port is ${port}"
                    echo "directory is ${directory}"
                    echo "staging_env is ${staging_env}"


                    withCredentials([sshUserPrivateKey(credentialsId: "ssh-ecdsa", keyFileVariable: 'SSH_KEY')]) {
                        def remote = [
                            name: 'ubuntu',
                            port: 22,
                            allowAnyHosts: true,
                            host: "${applicationIPAddress}",
                            user: "ubuntu",
                            identityFile: SSH_KEY
                        ]

                        echo "Fetch branch and checkout to change branch"
                        sshCommand remote: remote, command: "cd ${cd_directory} && sudo git fetch"
                        sshCommand remote: remote, command: "cd ${cd_directory} && sudo git checkout ${sourceBranch}"
                        sshCommand remote: remote, command: "cd ${cd_directory} && sudo git pull origin ${sourceBranch}
                    }
                  echo currentBuild.result
            }
        }
    } 
}
