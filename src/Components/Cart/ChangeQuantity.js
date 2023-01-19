function ChangeQuantity({ quantity, setQuantity }) {
  const addQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  return (
    <div>
      <button onClick={addQuantity}>+</button>
      <span>{quantity}</span>
      <button>-</button>
    </div>
  );
}

export default ChangeQuantity;
