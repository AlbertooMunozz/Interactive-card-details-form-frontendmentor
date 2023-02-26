import { useProvider } from '../../App/Store'

const BackCard = () => {

    const {state} = useProvider();
    const {cvc} = state

    return (
        <div className="card card-back">
            <div className="card-back-information">
                <div className="card-cvc">
                    <p>
                        {
                            cvc.length !==0 
                            ? cvc.padEnd(3, 0)
                            : '000'
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BackCard