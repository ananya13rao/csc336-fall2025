import { useState,useEffect} from "react"; 

function RandomDog() {
    const [dogUrl, setDogUrl] = useState[""]; 

    function fetchDog() {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            setDogUrl(data.message);
      });
  }

    useEffect(() => {
        fetchDog(); 
    }, []); 


    return (
        <div>
            <h1> random dog </h1>
            <button onClick={fetchDog}>new dog </button>

            {dogUrl && (
                <div>
                    <img
                        src={dogUrl}
                        style={{width: "100px", marginTop: "20px"}}/>
                </div>    
            )}
        </div>
    );







}