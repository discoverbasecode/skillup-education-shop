const express = require( 'express' );
const router = express.Router();
const homeRoute = require( './home.route' );
const registerRoute = require( './register.route' );
router.use( homeRoute );
router.use( registerRoute );


module.exports = router;