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
    // tools { nodejs "NodeJS" }
    
    stages {
        stage('Deploy LP3 Application') {
            steps {
                script {
                    Integer port = 8000
                    String directory = "/var/www/jcb.cipherville.com"
                    String staging_env = "sample_env"

                    echo "port is ${port}"
                    echo "directory is ${directory}"
                    echo "staging_env is ${staging_env}"

                    echo currentBuild.result
                }
            }
        }
    } 
}
