import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'




const Beds = () => {
  const id=useParams().id;

  const [bedcharges,setbedcharges]=useState({});

  useEffect(() => {
    const fetchhospitals = async () => {
        const res = await fetch(`http://localhost:5000/hospitals/${id}`);
        const data = await res.json();
        setbedcharges(data);
        
      };
      fetchhospitals();
      
    }, []);
  console.log(bedcharges);
  return (
    <div>
<div className='row'>
<div class="card col-md-3 mt-4" >
  <div class="card-body">
    <h5 class="card-title">COVID BEDS</h5>
  
   <p className="p-4" style={{backgroundColor:"red",color:"white",width:"50%",borderRadius:"30px"}}>24 available</p>
   <p className="p-4" style={{backgroundColor:"red",color:"white",width:"50%",borderRadius:"30px"}}>Charge: {bedcharges.covidbedscharge}</p>
    <a href={`/bookbed/${id}`} class="btn btn-primary">Book this Bed</a>
  </div>
</div>
<div class="card card col-md-3 mt-4">
  <div class="card-body">
    <h5 class="card-title">ICUs</h5>
   <p className="p-4" style={{backgroundColor:"red",color:"white",width:"50%",borderRadius:"30px"}}>14 available</p>
   <p className="p-4" style={{backgroundColor:"red",color:"white",width:"50%",borderRadius:"30px"}}>Charge: {bedcharges.icucharge}</p>
    <a href={`/bookbed/${id}`} class="btn btn-primary">Book this Bed</a>
  </div>
</div>
<div class="card card col-md-3 mt-4">
  <div class="card-body">
    <h5 class="card-title">CCUs</h5>
   <p className="p-4" style={{backgroundColor:"red",color:"white",width:"50%",borderRadius:"30px"}}>12 available</p>
   <p className="p-4" style={{backgroundColor:"red",color:"white",width:"50%",borderRadius:"30px"}}>Charge: {bedcharges.ccucharge}</p>
    <a href={`/bookbed/${id}`} class="btn btn-primary">Book this Bed</a>
  </div>
</div>
<div class="card card col-md-3 mt-4">
  <div class="card-body">
    <h5 class="card-title">Dengue Beds</h5>
    <p className="p-4" style={{backgroundColor:"red",color:"white",width:"50%",borderRadius:"30px"}}>20 available</p>
    <p className="p-4" style={{backgroundColor:"red",color:"white",width:"50%",borderRadius:"30px"}}>Charge: {bedcharges.denguebedscharge}</p>
    <a href={`/bookbed/${id}`} class="btn btn-primary">Book this Bed</a>
  </div>
</div>
<div class="card card col-md-3 mt-4">
  <div class="card-body">
    <h5 class="card-title">Malaria Beds</h5>
    <p className="p-4" style={{backgroundColor:"red",color:"white",width:"50%",borderRadius:"30px"}}>12 available</p>
    <p className="p-4" style={{backgroundColor:"red",color:"white",width:"50%",borderRadius:"30px"}}>Charge: {bedcharges.malariabedscharge}</p>
    <a href={`/bookbed/${id}`} class="btn btn-primary">Book this Bed</a>
  </div>
</div>
<div class="card card col-md-3 mt-4">
  <div class="card-body">
    <h5 class="card-title">Burn Beds</h5>
   <p className="p-4" style={{backgroundColor:"red",color:"white",width:"50%",borderRadius:"30px"}}>10 available</p>
   <p className="p-4" style={{backgroundColor:"red",color:"white",width:"50%",borderRadius:"30px"}}>Charge: {bedcharges.burnbedscharge}</p>
    <a href={`/bookbed/${id}`} class="btn btn-primary">Book this Bed</a>
  </div>
</div>
<div class="card card col-md-3 mt-4">
  <div class="card-body">
    <h5 class="card-title">Cabins</h5>
   <p className="p-4" style={{backgroundColor:"red",color:"white",width:"50%",borderRadius:"30px"}}>12 available</p>
   <p className="p-4" style={{backgroundColor:"red",color:"white",width:"50%",borderRadius:"30px"}}>Charge: {bedcharges.cabinscharge}</p>
    <a href={`/bookbed/${id}`} class="btn btn-primary">Book this Bed</a>
  </div>
</div>
<div class="card card col-md-3 mt-4">
  <div class="card-body">
    <h5 class="card-title">General Beds</h5>
   <p className="p-4" style={{backgroundColor:"red",color:"white",width:"50%",borderRadius:"30px"}}>45 available</p>
   <p className="p-4" style={{backgroundColor:"red",color:"white",width:"50%",borderRadius:"30px"}}>Charge: {bedcharges.generalbedscharge}</p>
    <a href={`/bookbed/${id}`} class="btn btn-primary">Book this Bed</a>
  </div>
</div>
<div class="card card col-md-3 mt-4">
  <div class="card-body">
    <h5 class="card-title">Pathology Lab</h5>
   
    <a href={`/bookbed/${id}`} class="btn btn-primary">Available</a>
  </div>
</div>
<div class="card card col-md-3 mt-4">
  <div class="card-body">
    <h5 class="card-title">Blood Bank</h5>
   
    <a href={`/bookbed/${id}`} class="btn btn-primary">Available</a>
  </div>
</div>
</div>
    </div>
  )
}

export default Beds