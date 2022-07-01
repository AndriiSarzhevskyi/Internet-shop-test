import { useEffect, useState} from "react";

export const StarRating = ({rating}) => {


   

    const[stars, setStars] = useState([]);
 
    useEffect(()=>{
       setStars(Array.from({length: 5}));
    
    },[])

    return (
        <div class = "rating-result">
        {stars.map((s, index) => {
            let style = "";
            console.log()
            if (index < rating) {
                console.log("Aaaa");
                style="active";
            }
            return (
            <span className={style}  key={index}>{s}
                {/* onClick={()=>handleChange(index)}>{s} */}
            </span>
            )
        })}
        {}
        </div>
    )
    }
