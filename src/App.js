import './App.css';
import React,{useState} from 'react';
function App() {
  const [likes,setLikes]=useState(100);
  const [dislikes,setDislikes]=useState(25);
  const [liked,setLiked]=useState(false);
  const [disliked,setDisliked]=useState(false);
  const like=()=>{
    if(!liked){
      setLikes(likes+1);
      if(disliked)dislike();
    }
    else{
      setLikes(likes-1);
    }
    setLiked(!liked);

  }
  const dislike=()=>{
    if(!disliked){
      setDislikes(dislikes+1);
      if(liked) like();
    }
    else{
      setDislikes(dislikes-1);
    }
    setDisliked(!disliked);
  }
  return (
    <div className="App">
     <button className={liked?"like-button liked":"like-button"} onClick={like}>
       likes|
      <span className="likes-counter">{likes}</span>
      </button>
     <button className={disliked?"dislike-button disliked":"dislike-button"} onClick={dislike}>
       dislikes|
      <span className="dislikes-counter">{dislikes}</span>
     </button>
    </div>
  );
}

export default App;
