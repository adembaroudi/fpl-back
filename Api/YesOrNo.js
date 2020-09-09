
const passport  = require ('passport');
const sujet = require('./../Models/sujetSchema');
var express = require("express");
const router = express.Router();
router.put(
    "/sondage/:id",
    passport.authenticate("bearer", { session: false }),
    async (req, res) => {
      const sondage = await sujet.findById(req.params.id);
  
      sondage.choix = req.body.choix;
      sondage.total += 1;
      if (req.body.choix === "yes") 
      sondage.oui += 1;
      else if (req.body.choix === "no") 
      sondage.non += 1;
  
      await sondage.save();
  
      res.send({ message: "you are voted" });
    }
  );
  module.exports = router;