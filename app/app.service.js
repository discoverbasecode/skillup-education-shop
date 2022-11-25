const express = require( 'express' );
const expressLayouts = require( 'express-ejs-layouts' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );

const chalk = require( 'chalk' );

const app = express();
const serverPort = 9900;
const mongoDB = 'mongodb://127.0.0.1/SkillUp_db';

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
        configApplicationService () {
                app.use( express.static( 'public' ) );
                app.set( 'view engine' , 'ejs' );
                app.set( 'views' , 'pages' );
                app.set( 'layout' , 'web/_Layout' );
                app.set( 'layout extractScripts' , true );
                app.set( 'layout extractStyles' , true );
                app.use( expressLayouts );
        }
        configRoutes () {app.use( require( './routes/app.route' ) ); }
        configMongoDB () {
                mongoose.connect( mongoDB , { useNewUrlParser: true , useUnifiedTopology: true } );
                const db = mongoose.connection;
                console.log( chalk.bgBlue( `MongoDB IS CONNECTED` ) );
                db.on( 'error' , console.error.bind( console , 'MongoDB connection error:' ) );
        }
};
