const Item = ({ title, imgURL }) => {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">{title}</p>
      </header>

      <div className="card-image">
        <figure className="image is-square">
          <img src={imgURL} alt="Item" />
        </figure>
      </div>
    </div>
  );
};

export default Item;
