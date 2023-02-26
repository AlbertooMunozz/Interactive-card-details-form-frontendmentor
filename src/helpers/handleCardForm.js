import React from 'react';
import { useProvider } from '../App/Store';

export const handleInputText = (prev, value) => {

    if(value.length >= 30)
      return prev

    if(value.length < 30) {

    if(/[^a-zA-Z\s]/.test(value))
        return value.replace(/[^a-zA-Z\s]/g, "")
        
    else
        return value
    }

}

export const handleInputNumber = (prev, value, max) => {

    if(value.length >= max)
        return prev

    if(value.length < max) {
        if(/^[0-9]+$/.test(value))
            return value
        else 
            return value.replace(/[^0-9]/g, "");
    }

}

export const handleBorderError = (container, name) => {
    
    const containerError = document.querySelector(`.${container} .error`)

    if(containerError) {
      const pError = containerError.querySelector('p')

        if(pError) 
          document.querySelector(`.${container} input[name="${name}"]`).style.border = 'solid 1px #FF5151'

        else 
          document.querySelector(`.${container} input[name="${name}"]`).style.border = 'solid 1px #DDDCDE'
        
    }
   
}


export const useSubmit = () => {
    
   const {state} = useProvider()

   const [complete, setComplete] = React.useState(undefined)

   const {cardHolderName, cardNumber, expMM, expYY, cvc} = state

   const today = new Date();
   const year = today.getFullYear()


   const submitForm = e => {

    e.preventDefault();

        if(cardHolderName.length < 2 || /[^a-zA-Z\s]/.test(cardHolderName) )
            return setComplete(false)
            
        if(cardNumber.length !== 16 || ! /^[0-9]+$/.test(cardNumber))
            return setComplete(false)
         
        if(! /^[0-9]+$/.test(expMM) || ! /^[0-9]+$/.test(expYY) || ! /^[0-9]+$/.test(cvc) )
            return setComplete(false)
        
        if(expMM.length < 1 || expMM < 1 || expMM > 12) 
            return setComplete(false)
            
        if(expYY.length !== 2 || ! (expYY > (year % 100) -1)) 
            return setComplete(false)
           
        if(cvc.length !== 3) 
            return setComplete(false)
          
        setComplete(true)    
   }

   return [complete, setComplete, submitForm]
}