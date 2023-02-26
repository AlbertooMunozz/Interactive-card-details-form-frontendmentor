import React from 'react'
import { useProvider } from '../../App/Store'
import { handleBorderError } from '../../helpers/handleCardForm'

const CardHolderName = () => {

    const {state, dispatch} = useProvider()

    const {cardHolderName, error} = state

    const handleInput = e => dispatch({type: 'CARD_HOLDER_NAME', value: e.target.value})

    React.useEffect(()=>{
      handleBorderError('form-holderName', 'holder_name')
    })


  return (
    <div className="form-holderName">
      <p>CARDHOLDER NAME</p>
        <input 
            type="text"
            name='holder_name'
            placeholder='e.g. Jane Apleseed'
            value={cardHolderName}
            onChange={handleInput}
        />
          
    {
      error
       &&
       <div className="error">
        {cardHolderName.length < 2
          ? <p>*Complete the Card Name</p>
          : ''
        }
       </div>
    }

    </div>
  )
}


export default CardHolderName