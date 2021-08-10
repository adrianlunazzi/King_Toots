const ItemList = () => {
  const items = [
    {
      id: 1,
      Title: "Guitarra Electrica",
      Marca: "Fender",
      Modelo: "Stratocaster",
      Precio: 25000,
    },
    {
      id: 2,
      Title: "Guitarra Electrica",
      Marca: "Fender",
      Modelo: "Telecaster",
      Precio: 35000,
    },
    {
      id: 3,
      Title: "Guitarra Electrica",
      Marca: "Gibson",
      Modelo: "Les Paul Clasic",
      Precio: 45000,
    },
    {
      id: 4,
      Title: "Guitarra Electrica",
      Marca: "Gibson",
      Modelo: "SG",
      Precio: 35000,
    },
    {
      id: 5,
      Title: "Guitarra Electrica",
      Marca: "Ibanez",
      Modelo: "GRx 70Qa",
      Precio: 50000,
    },
    {
      id: 6,
      Title: "Guitarra Electrica",
      Marca: "Jackson",
      Modelo: "Dinky JS12",
      Precio: 25000,
    },
  ];

  const getItemList = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(items);
      }, 2000);
    });
  };
  getItemList().then((items) => console.log(items));

  return <div></div>;
};

export default ItemList;
