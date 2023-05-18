# backend
simple backend for an AUT


# Running the application


    npm install --omit=dev
    npm run app

# git submodule

Submodule has been created for convenience only to work on both the application and the test suit at the same time.

In order to clone the submodule after clonning the repo, run the following:

    git submodule update --recursive --init


# Jenkins

The backend application can be tested using Jenkins pipeline. The pipeline doesn't wokr 100% correctly though,
 it launches the backend server in the background and doesn't kill it after the test suite is finished. 
Ideally pipeline should build a Docker image of the application and launch it, but I was unable to get Jenkins to talk to
the parent Docker deamon since Jenkins was run inside the docker container itself. Hence this ugly hack with nohup and sleep.

