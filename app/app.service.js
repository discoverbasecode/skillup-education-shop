const express = require( 'express' );
const expressLayouts = require( 'express-ejs-layouts' );
const chalk = require( 'chalk' );
const bodyParser = require( 'body-parser' );

const app = express();
const serverPort = 9900;

module.exports = class ApplicationService {
        constructor () {
                this.configApplicationService();
                this.configServer();
                this.configRoutes();
                this.configMongoDB();
        }
        configServer () {
                app.listen( serverPort , ( err ) => {
                        if ( err ) console.log( chalk.red( err.message ) );
                        console.log( chalk.bgYellowBright( `SERVER IS RUNNING AT PORT ${ serverPort }` ) );
                        console.log( chalk.bgBlueBright( `http://localhost:${ serverPort }` ) );
                } );
        }
        configApplicationService () {}
        configRoutes () {}
        configMongoDB () {}
};
