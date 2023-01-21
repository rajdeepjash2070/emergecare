const router = require("express").Router();
const User=require("../userDetails");

router.post("/register", async (req, res) => {
    try {
      // Upload image to cloudinary
      
  
      // Create new user
      let user = new User({
    name:req.body.name,
    age:req.body.age,
    address:req.body.address,
    bp:req.body.bp,
    email:req.body.email,
    sugerlevel:req.body.sugerlevel,
    password: req.body.password,
    longi:req.body.longi,
      lati:req.body.lati,
      });
      // Save user
      await user.save();
      res.json(user);
    } catch (err) {
      console.log(err);
    }
  });
  
  router.get("/", async (req, res) => {
    try {
      let user = await User.find();
      res.json(user);
    } catch (err) {
      console.log(err);
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      // Find user by id
      let user = await User.findById(req.params.id);
      res.json(user);
    } catch (err) {
      console.log(err);
    }
  });


  
  router.post("/:id",async (req, res) => {
    try {
      let user = await User.findById(req.params.id);
      console.log(req.params.id);
      // Delete image from cloudinary
      
    /* const{id,
      fname,lname,email,age,gender,symptoms1,symptoms2,symptoms3,symptoms4,symptoms5,symptoms6,symptoms7,symptoms8,symptoms9,symptoms10,
      symptoms11,symptoms12,symptoms13,symptoms14,symptoms15,symptoms16,symptoms17,symptoms18,symptoms19,symptoms20,
      height,ctnumber,
      address,
      weight,
      state,
      district,
      pin,
      bp,
      sugerlevel,
      timeslot,
      payment,
      refferedhospitals,comment,
      password}=req.body;*/
  
      const newAppointment = {
        doctername:req.body.doctername,
         time:req.body.time,
         appointmentdate:req.body.appointmentdate,
         fees:req.body.fees,
         address:req.body.address,
         contactnumber:req.body.ctnumber,
         symptoms1:req.body.symptoms1,
         symptoms2:req.body.symptoms2,
         symptoms3:req.body.symptoms3,
         symptoms4:req.body.symptoms4,
         symptoms5:req.body.symptoms5,
    }
  
  console.log(req.body.doctername)
      user.appointment.push(newAppointment);
      await user.save();
      res.status(200).json({
        success: true,
        message: "Appointment added successfully.",
        user,
        newAppointment
        
    });
    } catch (err) {
      console.log(err);
    }
  
    
  });
  

  module.exports = router;