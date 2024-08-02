import React from 'react'
import './results.css'

export default function SearchResults(props) {
  const SearchResults=props.results
  const origin=props.origin
  const destination=props.destination
  return (
    <div className='search-results'>
        {SearchResults.map((flight,index)=>(
          <div className="flight" key={index}>
            
          <div className="material-symbols-outlined">travel</div>
          <h1>{flight.partner_program}</h1>
          <div className='route'>{origin}
          <span class="material-symbols-outlined">arrow_right_alt</span>
            {destination}</div>
          <div className='date'>2024-07-09 - 2024-10-07</div>
      
          <div className="flight-price">
            <div className="price">
                <span className="cost">{flight.min_business_miles || "N/A"}</span>
                {flight.min_business_tax != null && (
                    <span className="tax">{" +$" + flight.min_business_tax}</span>
                )}
            </div>
            <span className='cost-title'>Min Business Miles</span>
          </div>
      
          <div className="flight-price">
            <div className="price">
                <span className="cost">{flight.min_economy_miles || "N/A"}</span>
                {flight.min_economy_tax != null && (
                    <span className="tax">{" +$" + flight.min_economy_tax}</span>
                )}
            </div>
            <span className='cost-title'>Min Economy Miles</span>
          </div>
      
          <div className="flight-price">
            <div className="price">
                <span className="cost">{flight.min_first_miles || "N/A"}</span>
                {flight.min_first_tax != null && (
                    <span className="tax">{" +$" + flight.min_first_tax}</span>
                )}
            </div>
            <span className='cost-title'>Min First Miles</span>
          </div>
      </div>
      
        ))}
    </div>
  )
}
