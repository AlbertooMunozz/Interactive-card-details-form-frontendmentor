import React from 'react';
import { useProvider } from '../../App/Store';
import check from '../../Assets/Icons/icon-complete.svg'

const CompleteForm = ({restart}) => {

    const {dispatch} = useProvider();

        const handleRestart = () => {
            dispatch({type: 'RESTART'});
            restart(false)
        }
    return (
        <div className="container-form">
            <div className="complete-form">
                <div className="complete-img">
                    <img src={check} alt="complete check" title='complete' />
                </div>

                <div className="complete-title">
                    <h2>THANK YOU</h2>
                </div>

                <div className="complete-message">
                    <p>We've added your card details</p>
                </div>

                <div className="complete-button">
                    <button onClick={handleRestart}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default CompleteForm