import { handleInputNumber, handleInputText } from "../helpers/handleCardForm";

export const initialState = {
    cardHolderName : '',
    cardNumber : '', 
    expMM : '',
    expYY : '',
    cvc : '',
    error: undefined,
}

export const reducer = (state, action) => {
    const {type, value} = action
    const {cardHolderName, cardNumber, expMM, expYY, cvc} = state

    switch (type) {

        case 'CARD_HOLDER_NAME':
            return {...state, 
                cardHolderName: handleInputText(cardHolderName, value)
            }

        case 'CARD_NUMBER': 
            return {...state,
                cardNumber: handleInputNumber(cardNumber, value, 20)
            }

        case 'EXP_MM' :
            return {...state,
                expMM: handleInputNumber(expMM, value, 3)
            }

        case 'EXP_YY' :
            return {...state,
                expYY: handleInputNumber(expYY, value, 3)
            }

        case 'CVC' : 
            return { ...state,
                cvc: handleInputNumber(cvc, value, 4)
            }

        case 'WRONG' : 
            return { ...state,
                error: true
            }

        case 'RESTART' : 
            return {
                cardHolderName : '',
                cardNumber : '', 
                expMM : '',
                expYY : '',
                cvc : '',
                error: undefined,
            }
        
        default:
            return {...state}
    }
}