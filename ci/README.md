# Sphere CI Pipeline - [ci.sphere.sh](https://ci.sphere.sh)

Sphere uses [concourse ci](https://concourse-ci.org/) for integration and release of the Sphere platform.

## Setup
You will need to install Fly, which is concourse's CLI tool for managing pipelines. https://concourse-ci.org/fly.html

You'll then be asked to login:

`fly login -t sphere -c https://ci.sphere.sh`

### Creating a pipeline

Pipelines are defined using YAML. You can read more about the formatting and possible values on concourse's website: https://concourse-ci.org/pipelines.html

`fly -t sphere set-pipeline --pipeline sphere-pipeline-production --config pipeline.yaml --load-vars-from credentials.yaml`

`credentials.yaml` will need to be populated and you can find the required values within `credentials.yaml.example`

### Running a pipeline

Once you have created a pipeline, it will need to be unpaused, this can be done in the UI found at: [ci.sphere.sh](https://ci.sphere.sh) or using a fly command

 `fly -t sphere unpause-pipeline -p sphere-pipeline-production`