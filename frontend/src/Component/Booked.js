import React, { Component } from 'react'

class Booked extends Component {
    render() {
        return (
            <div className="book">
         <section class="breadcrumb-osahan pt-3 pb-3 bg-success position-relative text-center">
             <h1 class="text-white">Booking Submitted</h1>
             <h6 class="text-white-50">Contact Us if required</h6>
             </section>
           

             <section class="breadcrumb-osahan pt-5 pb-5  position-relative text-center">
             <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" color="green" class="bi bi-check-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
</svg>       </section>


<section class="breadcrumb-osahan pt-3 pb-3 position-relative text-center">
             <h4 class="text-black">Thank you!!!! Your Data is submitted Successfully...</h4>
             <h6 class="text-black-50">Your Booking is NOT confirmed yet... The Employee will confirm the booking.</h6>

             <h6 class="text-black-50">We hope you enjoyed the services!!!</h6>

             </section>
         


            </div>
        )
    }
}
export default Booked;
