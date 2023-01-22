const mongoose=require('mongoose');
const doctorSchema = new mongoose.Schema(
  {
    doctor1:{type:String},
    doctor2:{type:String},
    doctor3:{type:String},
    doctor4:{type:String},
    doctor5:{type:String},
    doctor6:{type:String},
    doctor7:{type:String},
    doctor8:{type:String},
    doctor9:{type:String},
    doctor10:{type:String},
  }
);

const reviewSchema = new mongoose.Schema(
  {
    name:{type:String},
    comment:{type:String},
    rating:{type:Number},
  }
);

const covidbedsSchema=new mongoose.Schema(
  {
    name:{type:String},
    address:{type:String},
    state:{type:String},
    district:{type:String},
    age:{type:Number},
    contactnumber:{type:Number},

  }
);

const denguebedsSchema=new mongoose.Schema(
  {
    name:{type:String},
    address:{type:String},
    state:{type:String},
    district:{type:String},
    age:{type:Number},
    contactnumber:{type:Number},

  }
);

const covidoxygenbedsSchema=new mongoose.Schema(
  {
    name:{type:String},
    address:{type:String},
    state:{type:String},
    district:{type:String},
    age:{type:Number},
    contactnumber:{type:Number},

  }
);

const malariabedsSchema=new mongoose.Schema(
  {
    name:{type:String},
    address:{type:String},
    state:{type:String},
    district:{type:String},
    age:{type:Number},
    contactnumber:{type:Number},

  }
);

const icubedsSchema=new mongoose.Schema(
  {
    name:{type:String},
    address:{type:String},
    state:{type:String},
    district:{type:String},
    age:{type:Number},
    contactnumber:{type:Number},

  }
);

const ccubedsSchema=new mongoose.Schema(
  {
    name:{type:String},
    address:{type:String},
    state:{type:String},
    district:{type:String},
    age:{type:Number},
    contactnumber:{type:Number},

  }
);

const pregnantbedsSchema=new mongoose.Schema(
  {
    name:{type:String},
    address:{type:String},
    state:{type:String},
    district:{type:String},
    age:{type:Number},
    contactnumber:{type:Number},

  }
);

const burnbedsSchema=new mongoose.Schema(
  {
    name:{type:String},
    address:{type:String},
    state:{type:String},
    district:{type:String},
    age:{type:Number},
    contactnumber:{type:Number},

  }
);

const cabinsSchema=new mongoose.Schema(
  {
    name:{type:String},
    address:{type:String},
    state:{type:String},
    district:{type:String},
    age:{type:Number},
    contactnumber:{type:Number},

  }
);

const generalbedsSchema=new mongoose.Schema(
  {
    name:{type:String},
    address:{type:String},
    state:{type:String},
    district:{type:String},
    age:{type:Number},
    contactnumber:{type:Number},
    charge:{type:String},
bedtype:{type:String},
  }
);
const hospitalSchema = new mongoose.Schema(
  {
        name: { type: String },
        address:{ type: String },
        cloudinary_id:{
          type:String,
      },
      avatar:{
        type:String,
    },
        description: { type: String },
        phnumber: { type: String },
        weblink:{ type: String },
        specialist:{ type: String },
        state:{ type: String },
        district:{ type: String },
        near:{ type: String },
        pin:{ type: String },
        email:{ type: String },
        longi:{ type: String },
        lati:{ type: String },
        oxygen:{type:String},
        bloodbank:{type:Number},
        plasmabank:{type:String},
        pathologylab:{type:String},
        ambulance:{type:Number},
        doctor:{type:Number},
        covidbeds:{type:Number},
        malariabeds:{type:Number},
        denguebeds:{type:Number},
        icu:{type:Number},
        ccu:{type:Number},
        covidoxygen:{type:Number},
        pregnantbeds:{type:Number},
        burnbeds:{type:Number},
        cabins:{type:Number},
        generalbeds:{type:Number},
        phnumber1:{type:String},
        phnumber2:{type:String},
        phnumber3:{type:String},
        phnumber4:{type:String},
        phnumber5:{type:String},
        phnumber6:{type:String},
        phnumber7:{type:String},
        phnumber8:{type:String},
        phnumber9:{type:String},
        phnumber10:{type:String},
    doctorarr: [doctorSchema],
    reviewarr: [reviewSchema],
    covidbedsarr: [covidbedsSchema],
    malariabedsarr:[malariabedsSchema],
    denguebedsarr: [denguebedsSchema],
    generalbedsarr: [generalbedsSchema],
    icubedsarr: [icubedsSchema],
    ccubedsarr: [ccubedsSchema],
    covidoxygenbedsarr: [covidoxygenbedsSchema],
    pregnantbedsarr: [pregnantbedsSchema],
    burnbedsarr: [burnbedsSchema],
    cabinsarr: [cabinsSchema],
  },
  {
    timestamps: true,
  }
);

const Hospital=mongoose.model('Hospital',hospitalSchema)

module.exports=Hospital;

