import React from 'react'
import { useProvider } from '../../App/Store'
import logo from '../../Assets/Icons/card-logo.svg'

const FrontCard = () => {

  const {state} = useProvider()  

  const {cardHolderName, cardNumber,expMM, expYY} = state

  return (
    <div className="card card-front">

      <div className="card-front-information">

        <div className="card-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="card-number">
          <p>{cardNumber.length!==0 
            ? cardNumber.padEnd(16,0).match(/.{1,4}/g).join(" ") 
            : '0000 0000 0000 0000'}
          </p>

          
        </div>

        <div className="card-holderName">
          <p>{cardHolderName.length !==0 
            ? cardHolderName 
            : 'Jane Appleseed'}
          </p>
        </div>

        <div className="card-expiration">
          <div className="expiration-mm">
            <p>{
            expMM.length !== 0
            ? expMM.padStart(2,0)
            : '00'
            }
            </p>
        </div>
 
          <span>/</span>
      
        <div className="expiration-yy">
          <p>
          {
          expYY.length !== 0
          ? expYY.padStart(2,0)
          : '00'
          }
          </p>
        </div>

        </div>
      
    </div>

    </div>
  )
}

export default FrontCard
