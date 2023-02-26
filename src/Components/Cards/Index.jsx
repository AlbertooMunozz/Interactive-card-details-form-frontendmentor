import BackCard from "./BackCard"
import FrontCard from "./FrontCard"

const CardsContainer = () => {

    return (
        <div className="container-cards">

            <div className="container-cardsBackground"/>
            <div className="container-cardsWhiteSpace"/>

            <div className="cards">

                <FrontCard/>
                <BackCard/>
            
            </div>
           
        </div>
    )
}

export default CardsContainer