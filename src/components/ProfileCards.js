import { useState } from "react";
// el State se utiliza para cuando quiero mdificar algo que ve el usuario en pantalla

function ProfileCard({titulo,arroba,img}){

    function handleClickSuma(){
        setCount( count + 1)
    }

    function handleClickResta(){

        if(count > 0){
            setCount( count - 1)
        }
    }

    const [count, setCount] = useState(0);
    console.log(count);

    return (

        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                <img src={img} alt="imagen"/> 
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <h3 className="title">{titulo}</h3>
                    <p className="subtitle">{arroba}</p>

                    <div className="columns">

                        <div className="column">
                            <button onClick={handleClickResta} className="button is-success is-fullwidth">-</button>
                        </div>


                        <div>
                        <p>Unidades: {count}</p>
                        </div>

                        
                        <div className="column">
                            <button  onClick={handleClickSuma} className="button is-success is-fullwidth">+</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfileCard;