function FruitList({ namelist }) {
  return (
    <div>
      <ul>
        {namelist.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
