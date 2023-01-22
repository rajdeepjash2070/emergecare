const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const Hospital = require("../models/hospitalmodel");

router.post("/", upload.single("image"), async (req, res) => {
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Create new hospital
    let hospital = new Hospital({
      name: req.body.name,
      address:req.body.address,
      description: req.body.description,
      phnumber: req.body.phnumber,
      weblink:req.body.weblink,
      specialist:req.body.specialist,

      state:req.body.state,
      district:req.body.district,
      near:req.body.near,
      pin:req.body.pin,
      email:req.body.email,
      oxygen:req.body.oxygen,
      pathologylab:req.body.pathologylab,
      bloodbank:req.body.bloodbank,
      plasmabank:req.body.plasmabank,
      ambulance:req.body.ambulance,
      doctor:req.body.doctor,
      covidbeds:req.body.covidbeds,
      denguebeds:req.body.denguebeds,
      malariabeds:req.body.malariabeds,
      icu:req.body.icu,
      ccu:req.body.ccu,
      generalbeds:req.body.generalbeds,
      covidoxygen:req.body.covidoxygen,
      pregnantbeds:req.body.pregnantbeds,
      burnbeds:req.body.burnbeds,
      cabins:req.body.cabins,
      avatar: result.secure_url,
      cloudinary_id: result.public_id,
      longi:req.body.longi,
      lati:req.body.lati,
    });
    // Save hospital
    await hospital.save();
    res.json(hospital);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    let hospital = await Hospital.find();
    res.json(hospital);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    // Find hospital by id
    let hospital = await Hospital.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(hospital.cloudinary_id);
    // Delete hospital from db
    await hospital.remove();
    res.json(hospital);
  } catch (err) {
    console.log(err);
  }
});
//Everything i have to change from there so i am commenting it out


/*
router.post("/:id",async (req, res) => {
  try {
    let hospital = await hospital.findById(req.params.id);
    // Delete image from cloudinary
    
  

    const newUser = {
      usersid:req.body.userid,
      name: req.body.name,
      email:req.body.email,
      phnumber:req.body.ctnumber,
      address:req.body.address,
      age:req.body.age,
      gender:req.body.gender,
     
    height:req.body.height,
    weight:req.body.weight,
    state:req.body.state,
    district:req.body.district,
    pin:req.body.pin,
    bp:req.body.bp,
    sugerlevel:req.body.sugerlevel,
    timeslot:req.body.timeslot,
    payment:req.body.payment,
      comment:req.body.comment,
      
  }

console.log(req.body.name)
    hospital.patientarr.push(newUser);
    await hospital.save();
    res.status(200).json({
      success: true,
      message: "Review added successfully.",
      hospital,
      newUser
      
  });
  } catch (err) {
    console.log(err);
  }

  
});

router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    let hospital = await hospital.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(hospital.cloudinary_id);
    // Upload image to cloudinary
    let result;
    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path);
    }


    const data = {
      name: req.body.name || hospital.name,
      address:req.body.address || hospital.address,
      description: req.body.description || hospital.description,
      phnumber: req.body.phnumber || hospital.phnumber,
      fees:req.body.fees || hospital.fees,
      time:req.body.time || hospital.time,
      weblink:req.body.weblink || hospital.weblink,
      specialist:req.body.specialist || hospital.specialist,
      edu:req.body.edu || hospital.edu,
      state:req.body.state || hospital.state,
      district:req.body.district || hospital.district,
      postoff:req.body.postoff || hospital.postoff,
      near:req.body.near || hospital.near,
      pin:req.body.pin || hospital.pin,
      ageduration:req.body.ageduration || hospital.ageduration,
      others:req.body.others || hospital.others,
      experience:req.body.experience || dhospital.experience,
      hospitals:req.body.hospitals || hospital.hospitals,
      email:req.body.email || hospital.email,
      avatar: result?.secure_url || hospital.avatar,
      cloudinary_id: result?.public_id || hospital.cloudinary_id,
      longi:req.body.longi || hospital.longi,
      lati:req.body.lati || hospital.lati,
    };
    hospital = await hospital.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(hospital);
  } catch (err) {
    console.log(err);
  }
});

*/

router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    let hospital = await Hospital.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(hospital.cloudinary_id);
    // Upload image to cloudinary
    let result;
    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path);
    }


    const data = {

      name: req.body.name || hospital.name,
      address:req.body.address || hospital.address,
      description: req.body.description || hospital.description,
      phnumber: req.body.phnumber || hospital.phnumber,
      weblink:req.body.weblink || hospital.weblink,
      specialist:req.body.specialist || hospital.specialist,
      phnumber1:req.body.phnumber1 || hospital.phnumber1,
      phnumber2:req.body.phnumber2 || hospital.phnumber2,
      phnumber3:req.body.phnumber3 || hospital.phnumber3,
      phnumber4:req.body.phnumber4 || hospital.phnumber4,
      phnumber5:req.body.phnumber5 || hospital.phnumber5,
      phnumber6:req.body.phnumber6 || hospital.phnumber6,
      phnumber7:req.body.phnumber7 || hospital.phnumber7,
      phnumber8:req.body.phnumber8 || hospital.phnumber8,
      phnumber9:req.body.phnumber9 || hospital.phnumber9,
      phnumber10:req.body.phnumber10 || hospital.phnumber10,
     
      state:req.body.state || hospital.state,
      district:req.body.district || hospital.district,
      near:req.body.near || hospital.district,
      pin:req.body.pin || hospital.pin,
      email:req.body.email || hospital.email,
      oxygen:req.body.oxygen || hospital.oxygen,
      pathologylab:req.body.pathologylab || hospital.pathologylab,
      bloodbank:req.body.bloodbank || hospital.bloodbank,
      plasmabank:req.body.plasmabank || hospital.plasmabank,
      ambulance:req.body.ambulance || hospital.ambulance,
      doctor:req.body.doctor || hospital.doctor,
      covidbeds:req.body.covidbeds || hospital.covidbeds,
      denguebeds:req.body.denguebeds || hospital.denguebeds,
      malariabeds:req.body.malariabeds || hospital.malariabeds,
      icu:req.body.icu || hospital.icu,
      ccu:req.body.ccu || hospital.ccu,
      generalbeds:req.body.generalbeds || hospital.generalbeds,
      covidoxygen:req.body.covidoxygen || hospital.covidoxygen,
      pregnantbeds:req.body.pregnantbeds || hospital.pregnantbeds,
      burnbeds:req.body.burnbeds || hospital.burnbeds,
      cabins:req.body.cabins || hospital.cabins,

    };
    hospital = await Hospital.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(hospital);
  } catch (err) {
    console.log(err);
  }
});
router.post("/:id",async (req, res) => {
  try {
    let hospital = await Hospital.findById(req.params.id);
    // Delete image from cloudinary
    
  

    const newUser = {
      
      doctor1: req.body.doctor1,
      doctor2: req.body.doctor2,
      doctor3: req.body.doctor3,
      doctor4: req.body.doctor4,
      doctor5: req.body.doctor5,
      doctor6: req.body.doctor6,
      doctor7: req.body.doctor7,
      doctor8: req.body.doctor8,
      doctor9: req.body.doctor9,
      doctor10: req.body.doctor10,
   
      
  }

console.log(req.body.doctor4)
    hospital.doctorarr.push(newUser);
    await hospital.save();
    res.status(200).json({
      success: true,
      message: "Review added successfully.",
      hospital,
      newUser
      
  });
  } catch (err) {
    console.log(err);
  }

  
});

router.put("/ambulances/:id",async (req, res, next) => {
  try {
    let hospital = await Hospital.findById(req.params.id);
    // Delete image from cloudinary
  


    const data = {

      phnumber1: req.body.phnumber1 || hospital.phnumber1,
      phnumber2: req.body.phnumber2 || hospital.phnumber2,
      phnumber3: req.body.phnumber3 || hospital.phnumber3,
      phnumber4: req.body.phnumber4 || hospital.phnumber4,
      phnumber5: req.body.phnumber5 || hospital.phnumber5,
      phnumber6: req.body.phnumber6 || hospital.phnumber6,
      phnumber7: req.body.phnumber7 || hospital.phnumber7,
      phnumber8: req.body.phnumber8 || hospital.phnumber8,
      phnumber9: req.body.phnumber9 || hospital.phnumber9,
      phnumber10: req.body.phnumber10 || hospital.phnumber10,

    };
    hospital = await Hospital.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(hospital);
  } catch (err) {
    console.log(err);
  }
});




router.post("/:id",async (req, res) => {
  try {
    let hospital = await Hospital.findById(req.params.id);
    // Delete image from cloudinary
    
  

    const newUser = {
      
      name: req.body.name,
      comment: req.body.comment,
      rating: req.body.rating,
     
      
  }

console.log(req.body.name)
    hospital.ambulancearr.push(newUser);
   
    res.status(200).json({
      success: true,
      message: "Review added successfully.",
      hospital,
      newUser
      
  });
  } catch (err) {
    console.log(err);
  }

  
});


router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    let hospital = await Hospital.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(hospital.cloudinary_id);
    // Upload image to cloudinary
    let result;
    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path);
    }


    const data = {
      name: req.body.name || hospital.name,
      address:req.body.address || hospital.address,
      description: req.body.description || hospital.description,
      phnumber: req.body.phnumber || hospital.phnumber,
      weblink:req.body.weblink || hospital.weblink,
      specialist:req.body.specialist || hospital.specialist,

      state:req.body.state || hospital.state,
      district:req.body.district || hospital.district,

      near:req.body.near || hospital.near,
      pin:req.body.pin || hospital.pin,
      oxygen:req.body.oxygen || hospital.oxygen,
      pathologylab:req.body.pathologylab || hospital.pathologylab,
      bloodbank:req.body.bloodbank || hospital.bloodbank,
      plasmabank:req.body.plasmabank || hospital.plasmabank,
      ambulance:req.body.ambulance || hospital.ambulance,
      doctor:req.body.doctor || hospital.doctor,
      covidbeds:req.body.covidbeds || hospital.covidbeds,
      denguebeds:req.body.denguebeds || hospital.denguebeds,
      malariabeds:req.body.malariabeds || hospital.malariabeds,
      icu:req.body.icu || hospital.icu,
      ccu:req.body.ccu || hospital.ccu,
      generalbeds:req.body.generalbeds || hospital.generalbeds,
      covidoxygen:req.body.covidoxygen || hospital.covidoxygen,
      pregnantbeds:req.body.pregnantbeds || hospital.pregnantbeds,
      burnbeds:req.body.burnbeds || hospital.burnbeds,
      cabins:req.body.cabins || hospital.cabins,
  
      email:req.body.email || hospital.email,
      avatar: result?.secure_url || hospital.avatar,
      cloudinary_id: result?.public_id || hospital.cloudinary_id,
      longi:req.body.longi || hospital.longi,
      lati:req.body.lati || hospital.lati,
    };
    hospital = await Hospital.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(hospital);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    // Find hospital by id
    let hospital = await Hospital.findById(req.params.id);
    res.json(hospital);
  } catch (err) {
    console.log(err);
  }
});


router.post("/beds/:id",async (req, res) => {
  try {
    let hospital = await Hospital.findById(req.params.id);
    console.log(req.body.name)

    const newUser = {
      
      name: req.body.name,
     contactnumber:req.body.contactnumber,
      address:req.body.address,
      age:req.body.age,
      charge:req.body.charge,
    state:req.body.state,
    district:req.body.district,
   bedtype:req.body.bedtype,
      
  }


    hospital.generalbedsarr.push(newUser);
    await hospital.save();
    res.status(200).json({
      success: true,
      message: "Review added successfully.",
      hospital,
      newUser
      
  });
  } catch (err) {
    console.log(err);
  }

  
});
module.exports = router;