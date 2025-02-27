const FirstNameForm = ({ onChange }) => {
    return (
      <div>
        <label>First Name: </label>
        <input type="text" onChange={(e) => onChange("nameInfo", e.target.value)} />
      </div>
    );
  };
  
  export default FirstNameForm;
  