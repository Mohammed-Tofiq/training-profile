const Card = () => {
  return (
    <>
      <div className="container mt-5" >
      <h1 className="text-center" style={{color:"black"}}>Key Platform Features</h1>
      <p className="text-center">Our cutting-edge environment is optimized for development<br></br> speed, security, and responsive UI design</p>

      <div className="row" >
        <div className="col-md-4" >
          <div className="card p-3">
            <h5>Super Fast Build</h5>
            <p> Optimize compilation pipline build on top of Vite for rapid updates.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h5>Secure Routing</h5>
            <p>State-of-the-art client validation and routing safeguards</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h5>Modern Interface</h5>
            <p>Stunning interactive UI build with high-quality Bootstrap components.</p>
          </div>
        </div>
        <div className="col-md-8 mx-auto" style={{width:"80%", padding:"10px"}}>
          <div className="card p-3 " >
          <div style={{alignItems:"left"}}><button style={{font:"small-caption",backgroundColor:"lightblue", borderRadius:"10px" }}
          >Interactive Guide</button>
          </div>
          <h5>React State & Optimization Playground</h5>
            <p>Learn and practice advance React hooks including useRef, useMemo, useCallback and useReducer wiht our live feedback editor.</p>
            <button style={{color:"white",backgroundColor:"lightblue",borderRadius:"7px" ,width:"200px", alignItems:"self-end"}}>Go To Playground :-</button>
          </div>
          </div>
      </div>
    </div>
    </>
  );
};

export default Card;
