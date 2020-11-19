const express = require("express");
const router = express.Router();

const User = require("../models/User");
const CustomCard = require("../models/CustomCard")

const withAuth = require("../helpers/middleware");




router.post("/addCard",withAuth, async (req, res, next) => {
 //Cogemos el email y el password
  
  const{image, name, author}=req.body;
  console.log(author)
  try {

        const newCard= await CustomCard.create({image, name, author});
        // const allCardsFromUser =await CustomCard.find({author:author})
       

       await User.findOneAndUpdate(req.userID, {$push:{cards:newCard._id }},{new: true})
       let populated=await User.findById(author).populate('cards');       
       

        res.status(200).json(newCard);
        return;
      
      }catch (error) {
      //Le decimos que siga
    next(error);
  }
});

router.get("/cardList/:id",withAuth, async (req, res, next)=>{
   console.log('se supone que es la id',req.params)
  
  const {author}=req.body
 
  
  try {
    

    console.log('se supone que es la id',req.params)
    let user=await User.findById(req.params.id).populate('cards')

    console.log(user)
    let cartas=user.cards

    console.log('tráeme cartas perraaaaaaaaaaaaaaaa',cartas)

    res.status(200).json(cartas);

  } catch (error) {
    next(error);
  }

})

router.post("/editCard/:id",withAuth, async (req, res, next)=>{
  
  
  
  try {
    const cardId = req.params._id;
    
    const { name, image} = req.body;
     
    const editCard = await CustomCard.findByIdAndUpdate(cardId, {image: image, name:name},{new: true});
  
    // AQUÍ TENDRÍAMOS QUE POPULAR LAS CARTAS DE CADA USER
    
    const thisUser = await User.findById(req.userID)

    res.status(200).json(editCard);
    return;

   
  } catch (error) {
   next(error);
  }
});

router.get('/delete/:_id', withAuth, async(req, res, next)=>{
    
  try {
      const cardId = req.params._id;
      
      //DEBERÍAMPS DESPOPULAR
      const thisUser= await CustomCard.findById(req.userID);

      //console.log('USEEEEEEEEEEEEEEEEEEEEEEER',thisUser);

      // let arr=thisUser.cards;

      // let position=arr.indexOf(bookingId);

      // if(arr.length==1){
      //         let a=await User.findOneAndUpdate(req.userID, {$set:{reservations: []}},{new: true});

      //         //console.log('USERARRAY1RESULTADO', a);
      //         await Booking.findByIdAndRemove(bookingId);
      //         res.redirect('/profile');
      //     }else{
            
      //         arr.splice(position,1);  
      //         //console.log('DEBERÍA ESTAR MODIFICADOOOOOOOOOOOOO',arr);
            
      //         await User.findOneAndUpdate(req.userID, {reservations: arr},{new: true});

      //         //console.log('TODAS LAS RESERVASSSSSSSSSSSSSSSSS',req.userID.reservations);
      //         const deleteBooking = await Booking.findByIdAndRemove(bookingId);
      //         res.redirect('/profile');
      //     }

      const deleteCard = await CustomCard.findByIdAndRemove(cardId);
      res.status(200).json({ message: "Card erased successfully.", deleteCard });
  } catch (error) {
      console.log(error); 
  }
  
});



module.exports = router;