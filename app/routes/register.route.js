const express = require( 'express' );
const router = express.Router();

router.get( '/register' , ( req , res ) => {
        res.render( 'web/auth/register' , { title: ' ورود به سایت ' } );
} );

module.exports = router;