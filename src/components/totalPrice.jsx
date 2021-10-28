function TotalPrice({ totalFruits }) {
  return (
    <div>
      <p>
        Total de frutas:
        {totalFruits.reduce((valorTotal, valor) => {
          return valor.price + valorTotal;
        }, 0)}
      </p>
    </div>
  );
}

export default TotalPrice;
