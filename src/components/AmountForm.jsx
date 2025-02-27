const AmountForm = ({ onChange }) => {
    return (
      <div>
        <label>Amount: </label>
        <input type="number" onChange={(e) => onChange("amountInfo", e.target.value)} />
      </div>
    );
  };
  
  export default AmountForm;
  