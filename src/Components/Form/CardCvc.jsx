import React from 'react'
import { useProvider } from '../../App/Store'
import { handleBorderError } from '../../helpers/handleCardForm'

export const CardCvc = () => {

    const {state, dispatch} = useProvider()

    const {cvc, error} = state

    const handleInput = e => dispatch({type: 'CVC', value: e.target.value})

    React.useEffect(() => {
      handleBorderError('form-cvc', 'cvc');
    })

  return (
    <div className="form-cvc">
      <p>CVC</p>
        <input 
            type="text" 
            name='cvc'
            placeholder='eg. 123'
            value={cvc}
            onChange={handleInput}
        />

        {error 
          &&
          <div className='error' style={{fontSize:'10px'}}>
            {cvc.length !== 3
             ? <p>*Complete the CVC</p>
             : ''
            }
          </div>  
        }
    </div>
  )
}

export default CardCvc
