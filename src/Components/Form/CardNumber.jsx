import React from 'react'
import { useProvider } from '../../App/Store'
import { handleBorderError} from '../../helpers/handleCardForm'

const CardNumber = () => {

    const {state, dispatch} = useProvider()

    const {cardNumber, error} = state

    const handleInput = e => dispatch({type: 'CARD_NUMBER', value: e.target.value})

    React.useEffect(()=>{
      handleBorderError('form-number', 'number')
    })


  return (

    <div className="form-number">

        <p>CARD NUMBER</p>
        
        <input 
            type="text" 
            name='number' 
            placeholder='e.g. 1234 5678 9000 000'
            value={cardNumber.length !==0 ? cardNumber.match(/.{1,4}/g).join(" ") : ''} 
            onChange={handleInput} 
        />
        
        {
          error 
          &&
          <div className="error">
            {cardNumber.length !== 16
              ? <p>*Complete the Card Number</p>
              : ''}
          </div>
        }

    </div>
  )
}

export default CardNumber
