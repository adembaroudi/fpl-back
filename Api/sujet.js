
const passport  = require ('passport');
const Sujet = require('./../Models/sujetSchema');
const User = require('./../Models/UserSchema');
var express = require("express");
const router = express.Router();
router.post(
    "/add/:id",
    passport.authenticate("bearer", { session: false }),
    async (req, res) => {
      const user = await User.findById(req.user.user);
      const sujet = new Sujet(req.body);
  
      await sujet.save();
  
      await Sujet.findByIdAndUpdate(sujet._id, { user: user._id });
  
      res.send(sujet);
    }
  );
  router.get(
    "/all",
    passport.authenticate("bearer", { session: false }),
    async (req, res) => {
      const sujets = await sujet.find();
  
      res.send(sujets);
    }
  );
  router.get(
    "/getone/:id",
    passport.authenticate("bearer", { session: false }),
    async (req, res) => {
      const Sujet = await sujet.findById(req.params.id);
  
      if (!Sujet)
        return res.status(400).json({ message: " Subject does not exist" });
  
      res.send(Sujet);
    }
  );
  router.put(
    "/edit/:id",
    passport.authenticate("bearer", { session: false }),
    async (req, res) => {
      const user = User.findById(req.user.user);
      const Sujet = sujet.findById(req.params.id);
      if (Sujet.user !== user._id)
        return res.status(401).json({ message: "Unauthorized" });
      const titre = req.body.titre;
      const description = req.body.description;
  
      if (!titre || !description)
        return res
          .status(400)
          .json({ message: " title or description are required" });
  
      await sujet.findByIdAndUpdate(req.params.id, {
        titre: titre,
        description: description,
      });
  
      res.send({ message: "subject updated" });
    }
  );
  router.delete(
    "/delete/:id",
    passport.authenticate("bearer", { session: false }),
    async (req, res) => {
      await sujet.findByIdAndDelete(req.params.id);
  
      res.send({ message: "Subject deleted" });
    }
  );

module.exports = router;
