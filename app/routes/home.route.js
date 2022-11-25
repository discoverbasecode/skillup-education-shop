const express = require( 'express' );
const router = express.Router();

router.get( '/' , ( req , res ) => {
        res.render( 'web/home/index' , { title: ' محسن حیدری' } );
} );

module.exports = router;