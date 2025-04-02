import React, { useState ,useEffect } from "react";

const Contador = () => { 
    const [count, setCount] = useState(0);
    const [reloj, setReloj] = useState ( 
        [ "0", "0", "0", "0" ]
     );

    useEffect(() => {
        const intervalo = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => clearInterval(intervalo); 
    }, []); 


    useEffect (() => {
        const relojFormat = String(count).padStart(4, "0").split ("")
        setReloj(relojFormat)
    },[ count ]
    );


    return (
        <div className="bigCounter">
           <div className="reloj">
           <i class="fa-solid fa-clock fa-xl"></i>
            </div> 
           <div className="segundos">
           <p>{reloj[0]}</p> </div>
           <div className="minutos">
           <p>{reloj[1]}</p> </div>
           <div className="horas">
           <p>{reloj[2]}</p> </div>
           <div className="horas">
           <p>{reloj[3]}</p> </div>
            
            
    
        </div>
    );
};

export default Contador;



