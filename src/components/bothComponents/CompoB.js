const CompB = ({ cendol, setCendol }) => {
    const handleClick = () => {
      setCendol(cendol + 10);
    };
  
    const btnStyle = {
      backgroundColor: "#cc9900",
      color: "white",
      padding: ".5rem 1rem",
      border: "none",
      borderRadius: ".2rem",
      cursor: "pointer",
      marginTop: "1rem",
    };
  
    return (
      <div>
        <p>Value of cendol: {cendol}</p>
        <button style={btnStyle} onClick={handleClick}>
          Click to Increase 10
        </button>
      </div>
    );
  };
  
  export default CompB;
  