const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Card = require("../models/Card")

const withAuth = require("../helpers/middleware");

router.get("/deck", withAuth, async (req, res, next)=>{
   
        let cardDeck=await Card.find();

        res.status(200).json(cardDeck)

});


module.exports = router;