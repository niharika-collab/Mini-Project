import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container p-4 mt-3'>
            <div className='row'>
                <div className='col-8'>
                    <div className="accordion mb-3 p-4" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Account Opening
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <ul>
            <li>Resident individual</li>
            <li>Minor</li>
            <li>Non Resident Indian(NRI)</li>
            <li>Company,Partnership,HUF and LLP</li>
            <li>Glossary</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Your Zerodha Acoount
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <ul>
            <li>Resident individual</li>
            <li>Minor</li>
            <li>Non Resident Indian(NRI)</li>
            <li>Company,Partnership,HUF and LLP</li>
            <li>Glossary</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Kite
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       <ul>
            <li>Resident individual</li>
            <li>Minor</li>
            <li>Non Resident Indian(NRI)</li>
            <li>Company,Partnership,HUF and LLP</li>
            <li>Glossary</li>
        </ul>
      </div>
    </div>
  </div>
</div>
                </div>
                <div className='col-4'></div>
            </div>
        </div>
     );
}

export default CreateTicket;