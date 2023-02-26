import React from 'react';
import { useProvider } from '../../App/Store';

const SubmitForm = () => {
    
    const {dispatch} = useProvider()
    const handleInput = e => dispatch({type: 'WRONG'})

    return (
        <div className="form-submit">
            <div className="submit-button-form">
                <button type="submit" onClick={handleInput}>
                    Confirm
                </button>
            </div>
        </div>
    )
}

export default SubmitForm