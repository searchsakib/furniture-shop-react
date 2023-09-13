const Card = () => {
  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img src="https://i.ibb.co/FK52dyd/prod6.png" alt="car!" />
        </figure>
        <div className="card-body">
          <div className="flex  items-center ">
            <h2 className="card-title text-warning">Modern Sofa</h2>
            <p className="text-right font-semibold text-warning">
              Price: <span>799.99</span>${' '}
            </p>
          </div>

          <p className="text-center text-white">
            A sleek and comfortable modern sofa for your living room.
          </p>
          <p className="text-center   ">Category: Living Room</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary mt-4">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
