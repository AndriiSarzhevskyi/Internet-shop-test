export const ChildComponent = ({ product }) => {
    return (
      <>
        <div key={product._id}>
          <h1>{product._id}</h1>
          <p>{product.name}</p>
          <p>{product.price}</p>
          {/* <p>{product.image}</p> */}
        </div>
      </>
    );
  };

  //Глупые и умные компоненты