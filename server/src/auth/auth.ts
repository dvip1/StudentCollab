const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');
import { Request, Response } from 'express'; 

const router = require('express').Router()
const jwtCheck = auth({
    audience: process.env.AUDIENCE,
    issuerBaseURL: process.env.ISSUERBASEURL,
    tokenSigningAlg: 'RS256'
  });
router.get('/public', (req: Request, res: Response)=> {
    res.json({
        "message": "it's working",
    })
})

module.exports = router;