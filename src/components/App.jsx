import React from "react";
import emojipedia from "../emojipedia.js";
function Dictionarycontent(props){
  return (

<div className="term">
          <dt>
            <span className="emoji" role="img" aria-label={props.name}>
              {props.emoji}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>
            {props.info}
          </dd>
        </div>

  );
}
function CreateDictionary(emojipedia){
 return (
  <Dictionarycontent aria={emojipedia.name} emoji={emojipedia.emoji} info={emojipedia.info}/>
   
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary"> 
      {emojipedia.map(CreateDictionary)};
      </dl> </div>
  );
}

export default App;
