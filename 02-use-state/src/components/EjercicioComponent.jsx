import React, { useState } from 'react'
import PropTypes from "prop-types"

export const EjercicioComponent = ({currentYear}) => {

    const [year, setYear] = useState(currentYear);

    const changeYear = (e, changeVal)  => {
        var yearTemp = year  + changeVal;

        setYear(yearTemp);
    }

    const changeYeaByInput = (e, changeVal)  => {
        var yearTemp = parseInt(changeVal);

        if(Number.isInteger(yearTemp)){
          setYear(yearTemp);
        }else{
          setYear(currentYear);
        }
    }


  return (
    <div>
        
        <strong>{year}</strong>

        &nbsp;
        <button onClick={ e => changeYear(e, -1) }>Anterior</button>
        &nbsp;
        <button onClick={ e => changeYear(e, +1) }>Siguiente</button>

        &nbsp;

        <input type='text' placeholder='Escriba el año' onKeyUp={ e => changeYeaByInput(e, e.target.value)} />

    </div>
  )
}


EjercicioComponent.propTypes = {
  currentYear: PropTypes.number.isRequired
}