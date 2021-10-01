Installation

This is a Node.js module available through the npm registry.

Before installing, download and install Node.js. Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a package.json first with the npm init command.

Installation is done using the npm install command:

$ npm install express


Quick Start

The quickest way to get started with the app is to utilize the executable to generate an application as shown below:

Install the executable. The executable's major version will match Express's:


View the app:

$ express /tmp/foo && cd /tmp/foo
Install dependencies:

$ npm install
Start the server:

$ npm start
View the website at: http://localhost:3000

Load SQL files 

make a postgres DB called biztime

Run the following commands:

psql postgres

\c biztime

\i data.sql

Tests
To run the test suite, first install the dependencies, then run npm test:

$ npm install
$ npm test

Features

a REST-ful backend API server for a simple company/invoice tracker


