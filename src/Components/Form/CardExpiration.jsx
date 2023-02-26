import React from 'react'
import { useProvider } from '../../App/Store'
import { handleBorderError } from '../../helpers/handleCardForm';

const CardExpiration = () => {

    const {state, dispatch} = useProvider();

    const {expMM, expYY, error} = state 

    const handleInput = e => dispatch({type:e.target.dataset.expiration, value: e.target.value})

    const today = new Date();

    React.useEffect(() => {
        handleBorderError('form-expiration', 'expiration_mm')
        handleBorderError('form-expiration', 'expiration_yy')

    })

const year = today.getFullYear()


  return (
    <div className="form-expiration">

        <p>EXP. DATE (MM, YY)</p>

        <div className="container-expiration-input">

            <div className="expiration-mm">
                <input 
                    type="text"
                    placeholder="MM"
                    name='expiration_mm'
                    value={expMM}
                    data-expiration="EXP_MM"
                    onChange={handleInput}
                />
            </div>

            <div className="expiration-yy">
                <div className="expiration-yy">
                    <input 
                        type="text"
                        placeholder="YY"
                        name='expiration_yy'
                        value={expYY}
                        data-expiration="EXP_YY"
                        onChange={handleInput}
                    />
                </div>
            </div>

        </div>

        {
            error 
                &&

            <div className="error" style={{display:'flex', fontSize:'10px', columnGap:'3px'}} >
                {expMM.length >= 1 
                 ? ''
                 : <p>*Complete MM Expiration</p>
                }

                {expYY.length >= 1 
                 ? ''
                 : <p>*Complete YY Expiration</p>
                }

                {expYY.length >= 1
                 ? (expYY > (year % 100) -1 
                    ? ''
                    : <p>*Wrong Format YY</p>)
                 : ''
                }

                {expMM.length >= 1
                 ? (expMM >=1 && expMM <=12 
                    ? ''
                    : <p>*Wrong Format MM</p>)
                 : ''
                }
            </div>
            
        }


    </div>
  )
}

export default CardExpiration
