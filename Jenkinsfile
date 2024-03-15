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
        stage('Deploy Sample Instance') {
            steps {
                script {
                    Integer port = 8000
                    String directory = "/var/www/jcb.cipherville.com"
                    String staging_env = "sample_env"

                    echo "port is ${port}"
                    echo "directory is ${directory}"
                    echo "staging_env is ${staging_env}"

                    withCredentials([sshUserPrivateKey(credentialsId: "id_ecdsa", keyFileVariable: 'SSH_KEY')]) {
                        def remote = [
                            name: 'ubuntu',
                            port: 22,
                            allowAnyHosts: true,
                            host: "${applicationIPAddress}",
                            user: "ubuntu",
                            identityFile: SSH_KEY
                        ]

                        echo "Fetch branch and checkout to change branch"
                        sshCommand remote: remote, command: "cd ${directory} && sudo git fetch"
                        sshCommand remote: remote, command: "cd ${directory} && sudo git checkout ${sourceBranch}"
                        sshCommand remote: remote, command: "cd ${directory} && sudo git pull origin ${sourceBranch}"

                        withCredentials([file(credentialsId: jcb_sample.env.yml, variable: 'yaml_file')]) {
                            sh 'mv \$yaml_file .'
                            sshPut remote: remote, from: "jcb_sample.env.yml", into: "/var/www/tmp_server_files/"
                        }

                        sshCommand remote: remote, command: "sudo rm -rf ${directory}/jcb_sample.env.yml"
                        sshCommand remote: remote, command: "sudo mv /var/www/tmp_server_files/jcb_sample.env.yml ${directory}/"
                    }

                    echo currentBuild.result
                }
            }
        }
    } 
}