const GenInfo = (props) => {
  return (
      <div>
          <h1>Personal Information</h1>
          <div>      
              <input className="input" onChange={props.change} id="name" type="text" placeholder="Name"/>
          </div>
          <div>      
              <input className="input" onChange={props.change} id="email" type="text" placeholder="Email"/>
          </div>
          <div>      
              <input className="input" onChange={props.change} id="phoneNO" type="text" placeholder="Phone Number"/>
          </div>
          <div>      
              <input className="input" onChange={props.change} id="desc" type="text" placeholder="About"/>
          </div>
      </div>
  );
};

export { GenInfo }; 