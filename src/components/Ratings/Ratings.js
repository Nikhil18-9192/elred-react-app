import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "./Rating.scss"
import Globalcontext from "../Context/Createcontext"


function Ratings() {
 
  const {dispatch} = useContext(Globalcontext);
  const [ethicalRating, setEthicalRating] = useState([]);
  const [virtualRating, setVirtualRating] = useState([]);
  const fetchRatings = async () => {
    const ethical = await axios.get(
      "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/RatingsEthicalCodeResponse.json"
    );
    const virtual = await axios.get(
      "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/RatingsVirtuallyMetResponse.json"
    );

    setEthicalRating(ethical.data.result);
    setVirtualRating(virtual.data.result);
    dispatch({ type: "ADD_ETHICAL", payload: ethical.data.result });
    dispatch({ type: "ADD_VIRTUAL", payload: virtual.data.result });
  };
 
  useEffect(() => {
    fetchRatings();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div className="rating_container">
    <div className="rating">
      <h2>Ratings</h2>
      <div className="rating_item" >
        <p className="rating_count">{ethicalRating.length}</p>
        <p className="text">Says has ethical code of cunduct and is safe to do business with</p>
      </div>
      <div className="rating_item" >
        <p className="rating_count">{virtualRating.length}</p>
        <p className="text">Have Meet To reel life/Video call</p>
      </div>
    </div>
    
  </div>;
}

export default Ratings;
