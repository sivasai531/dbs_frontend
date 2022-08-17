import React from 'react'

export default function SubmitComponent() {
  return (
    <center>
      <div class="card" style={{ marginTop :"190px",width:"600px"}} >
  <div class="card-header">
  Transaction Status
  </div>
  <div class="card-body">
    <h1 class="card-title" style={{color:"green"}}>successful</h1>
    

    <a href="./" class="btn btn-primary">Go to payment page</a>&nbsp;&nbsp;&nbsp;
    <a href="./details" class="btn btn-success">view details</a>
  </div>
</div>
      </center>
  )
}
