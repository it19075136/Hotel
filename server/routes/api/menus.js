const express = require('express');

const router = express.Router();

// menu Model
const Menu = require('../../models/Menu');

// @route Get api/menus
// @desc get all menus
// @access public
router.get('/', (req,res) => {
    Menu.find()
    .sort({id: 1})
    .then((menus => res.json(menus)))
});

// @route Create api/menus
// @desc create a menu
// @access public
router.post('/', (req,res) => {
   const newMenu = new Menu({
    name: req.body.name,
    price: req.body.price,
    items: req.body.items
   })
   newMenu.save().then((menu)=>{
      res.json(menu)
   })
   .catch((err)=>{
      res.json({success: false, error: err})
   });
})

// @route Delete api/menus
// @desc delete a menu
// @access public
router.delete('/:id', (req,res) => {
   Menu.findById(req.params.id)
   .then(menu =>
     menu.remove().then(()=>res.json({success: true}))
   )
   .catch(err => res.status(404).json({ success: false}));
})

module.exports = router;