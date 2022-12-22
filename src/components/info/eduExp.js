const EduExp = (props) => {
  return (
      <div>
          <h1 className="title">Add Education</h1>
          <div>      
              <input className="input" onChange={props.change} id="degree" type="text" placeholder="Degree"/>
          </div>
          <div>      
              <input className="input" onChange={props.change} id="universityname" type="text" placeholder="University"/>
          </div>
          <div>      
              <input className="input" onChange={props.change} id="edu-city" type="text" placeholder="City"/>
          </div>
          <div>      
              <input className="input" onChange={props.change} id="subject" type="text" placeholder="Subject"/>
          </div>
          <div>      
              <input className="input" onChange={props.change} id="edu-from" type="text" placeholder="From"/>
          </div>
          <div>      
              <input className="input" onChange={props.change} id="edu-to" type="text" placeholder="To"/>
          </div>
      </div>
  );
};

export { EduExp }; 