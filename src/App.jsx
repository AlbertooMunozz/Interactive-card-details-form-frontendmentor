import Provider from "./App/Store"
import FormContainer from "./Components/Form/Index"
import CardsContainer from "./Components/Cards/Index"
import './Styles/Styles.css'
import React from "react"

const App =() => {
    
    return (
     <Provider>
        <section>
            <div className="container">
                <CardsContainer/>
                <FormContainer/>
            </div>
        </section>
     </Provider>
    )
}


export default App