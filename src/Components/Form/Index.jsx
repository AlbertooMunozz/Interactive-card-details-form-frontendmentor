import React from 'react';
import { useSubmit } from '../../helpers/handleCardForm';
import CardCvc from './CardCvc';
import CardExpiration from './CardExpiration';
import CardHolderName from './CardHolderName';
import CardNumber from './CardNumber';
import CompleteForm from './CompleteForm';
import SubmitForm from './SubmitForm';

const FormContainer = () => {
    
    const [complete, setComplete, submitForm] = useSubmit();

    if(complete)
        return <CompleteForm restart={setComplete}/>

    return (
        <div className="container-form">

            <form className='card-form' onSubmit={submitForm}>
                <CardHolderName/>
                <CardNumber/>        
                <div className="container-form-information">
                    <CardExpiration/>
                    <CardCvc/>
                </div>
                <SubmitForm/>
            </form>
        </div>
    )
}

export default FormContainer