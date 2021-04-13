const Item = ({ title, imgURL }) => {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
          {title.length > 20 ? title.slice(0, 19).trim() + "..." : title}
        </p>
      </header>

      <div className="card-image">
        <figure className="image is-4by3">
          <img src={imgURL} alt="Item" />
        </figure>
      </div>
    </div>
  );
};

export default Item;
