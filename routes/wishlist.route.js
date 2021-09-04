const express= require('express');
const {Wishlist} = require('../models/wishlist.model');
const router = express.Router();


router.route('/')
    .get(async(req,res)=>{
        try{
            let WishList= await Wishlist.find({})
            res.status(200).json({success:true,WishList})
        }
        catch(error){
            res.status(404).json({success:false,message: "unable to fetch Wishlist!"})
        }
    })

module.exports = router
