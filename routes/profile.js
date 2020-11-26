const express = require("express");
const router = express.Router();
const uploadCloud = require("../configs/cloudinary-setup");
const User = require("../models/User");
const CustomCard = require("../models/CustomCard")

const withAuth = require("../helpers/middleware");




router.post("/addCard",withAuth, async (req, res, next) => {
 //Cogemos el email y el password
  
  const{image, name, author}=req.body;
   
  try {

        const newCard= await CustomCard.create({image, name, author});
        // const allCardsFromUser =await CustomCard.find({author:author})
       console.log(newCard)

       await User.findOneAndUpdate(req.userID, {$push:{cards:newCard._id }},{new: true})
       let populated=await User.findById(author).populate('cards');       
       

        res.status(200).json(newCard);
        return;
      
      }catch (error) {
      //Le decimos que siga
    next(error);
  }
});

router.post("/upload", withAuth, uploadCloud.single("image"), (req, res, next) =>{
  if(!req.file) {
      next(new Error("No file uploaded!"))
      return;
  }
  res.json({ secure_url: req.file.secure_url})
});

router.get("/cardList/:id",withAuth, async (req, res, next)=>{

  try {
 
    let user=await User.findById(req.params.id).populate('cards')

    // console.log(user)
    let cartas=user.cards

    res.status(200).json(cartas);

  } catch (error) {
    next(error);
  }

})

router.post("/addPhoto/:id",withAuth, async (req, res, next) =>{
  try{ const userID = req.params._id
  const {image, author} = req.body
  
  await User.findByIdAndUpdate(author,{image: image},{new:true})
  res.status(200).json(image)
} catch (error){
  console.log(error)
}
})

router.post("/editCard/:id",withAuth, async (req, res, next)=>{
  
  try {
    const cardId = req.params.id;
    
    const { name, image} = req.body;

    
     
    const editCard = await CustomCard.findByIdAndUpdate(cardId, {image: image, name:name},{new: true});
    
    // AQUÍ TENDRÍAMOS QUE POPULAR LAS CARTAS DE CADA USER
    let userid=editCard.author
    const thisUser = await (await User.findById(userid)).populate('cards')

    res.status(200).json(editCard);
    return;

   
  } catch (error) {
   next(error);
  }
});

router.delete('/deleteCard/:userid/:_id', withAuth, async(req, res, next)=>{
    
  try {

      
      const cardID = req.params._id;
      const userID = req.params.userid;      
      
      const thisUser= await User.findById(userID);
      
      let arr=thisUser.cards;
      let position=arr.indexOf(cardID);
      arr.splice(position,1);  
     
    
      await User.findOneAndUpdate(userID, {cards: arr},{new: true}).populate('cards');
      
      await CustomCard.findByIdAndRemove(cardID);

      
      res.status(200).json({ message: "Card erased successfully.", deleteCard });
  } catch (error) {
      console.log(error); 
  }
  
});



module.exports = router;