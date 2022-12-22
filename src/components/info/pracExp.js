const WorkExp = (props) => {
    return (
      <div>
        <h1 className="title">Experiences</h1>
       
          <div>      
              <input className="input" onChange={props.change} id="position" type="text" placeholder="Position"/>
          </div>
          <div>      
              <input className="input" onChange={props.change} id="company" type="text" placeholder="Company"/>
          </div>
          <div>      
              <input className="input" onChange={props.change} id="work-city" type="text" placeholder="City"/>
          </div>
          <div>      
              <input className="input" onChange={props.change} id="work-from" type="text" placeholder="From"/>
          </div>
          <div>      
              <input className="input" onChange={props.change} id="work-to" type="text" placeholder="To"/>
          </div>
      </div>
    );
  };
  
  export { WorkExp };