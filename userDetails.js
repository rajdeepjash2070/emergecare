const mongoose = require("mongoose");

const symptomsSchema = new mongoose.Schema(
  {
    symptom1:{type:String},
    symptom2:{type:String},
    symptom3:{type:String},
    symptom4:{type:String},
    symptom5:{type:String},
    symptom6:{type:String},
    symptom7:{type:String},
    symptom8:{type:String},
    symptom9:{type:String},
    symptom10:{type:String},
    symptom11:{type:String},
    symptom12:{type:String},
    symptom13:{type:String},
    symptom14:{type:String},
    symptom15:{type:String},
    symptom16:{type:String},
    symptom17:{type:String},
    symptom18:{type:String},
    symptom19:{type:String},
    symptom20:{type:String},
  }
);
const diseaseSchema = new mongoose.Schema(
  {
    disease1:{type:String},
    disease2:{type:String},
    disease3:{type:String},
    disease4:{type:String},
    disease5:{type:String},
    disease6:{type:String},
    disease7:{type:String},
    disease8:{type:String},
    disease9:{type:String},
    disease10:{type:String},
  }
);
const refferedtestSchema = new mongoose.Schema(
  {
    test1:{type:String},
    test2:{type:String},
    test3:{type:String},
    test4:{type:String},
    test5:{type:String},
    test6:{type:String},
    test7:{type:String},
    test8:{type:String},
    test9:{type:String},
    test10:{type:String},
    test11:{type:String},
    test12:{type:String},
    test13:{type:String},
    test14:{type:String},
    test15:{type:String},
    test16:{type:String},
    test17:{type:String},
    test18:{type:String},
    test19:{type:String},
    test20:{type:String},
  }
);
const appointmentSchema= new mongoose.Schema(
  {
    doctername:{type:String},
    time:{type:String},
    appointmentdate:{type:String},
    fees:{type:String},
    address:{type:String},
    contactnumber:{type:String},
    symptoms1:{type:String},
    symptoms2:{type:String},
    symptoms3:{type:String},
    symptoms4:{type:String},
    symptoms5:{type:String},
  }
);
const bedsSchema=new mongoose.Schema(
  {
    hospitalname:{type:String},
    date:{type:String}, 
    charge:{type:String},
    address:{type:String},
    contactnumber:{type:String},
    bedtype:{type:String},
  }
);
const UserSchema = new mongoose.Schema(
  {
    userid:{type:String},
    name: { type: String },
    age:{type:String},
    address:{type:String},
    email:{type:String},
    phnumber:{type:String},
    gender:{type:String},
    bedsarr:[bedsSchema],
    appointment:[appointmentSchema],
    symptoms:[symptomsSchema],
    disease:[diseaseSchema],
    height:{type:String},
    weight:{type:String},
    state:{type:String},
    district:{type:String},
    pin:{type:String},
    prescriptionavatar:{type:String},
    prescriptioncloudinary_id:{type:String},
    medicine:{type:String},
    bp:{type:String},
    sugerlevel:{type:String},
    refferedhospitals:{type:String},
    refferedtest:[refferedtestSchema],
    comment: { type: String },
    rating: { type: Number },
    password: {type:String},
   
  },
);

module.exports =  mongoose.model('User', UserSchema)


