import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import {  Radio, Rating } from "./RaitingStyles";
const Rate = (props) => {
    var valueState = 0;
   
    
    if(props["initial"] !== undefined  && props["initial"] !== null ){
        valueState = parseInt(props["initial"]);
       

    }else{
        valueState = 5
    }

    const [rate, setRate] = useState(valueState);

    

    return (
        <div>
            {
            [...Array(5)].map((item, index) => {

                const givenRating = index + 1;
                
                return (
                    <label>
                        <Radio
                            type="radio"
                            value={givenRating}
                            onClick={() => {

                                setRate(givenRating);

                                if(props["onScore"] !== undefined  ){
                                    props.onScore(givenRating);
                                }



                                
                            }}
                        />
                        <Rating>
                            <FaStar
                                color={
                                    givenRating < rate || givenRating === rate
                                        ? "rgb(244,208,63)"
                                        : "rgb(192,192,192)"
                                }
                            />
                        </Rating>
                    </label>
                );
            })}
        </div>
    );
};

export default Rate;
