# cypress-test-task

## About The Project
This is a sample of the Cypress framework for the Nobl9 recruitment task

https://github.com/lukamiko/cypress-test-task

## Getting Started


### Installation
#### Using local machine & yarn
* follow instruction from https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable

* then run:


    $ yarn install

#### Using Docker
* Follow instruction from https://docs.docker.com/desktop/install/


### Usage

#### from Cypress GUI
    $ yarn cy:open
* select test and run

#### from command line
    $ yarn cy:run

#### using Docker
    $ docker run -it -v $PWD:/e2e -w /e2e cypress/included:latest


## Linter

### Run ES linter once
    $ yarn lint

### Fix code using linter
    $ yarn lintFix
