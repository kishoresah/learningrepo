const SubscriptionForm = ({ onChange }) => {
    return (
      <div>
        <label>Subscription: </label>
        <input type="text" onChange={(e) => onChange("subscriptionInfo", e.target.value)} />
      </div>
    );
  };
  
  export default SubscriptionForm;
  