const Card = ({ title, imageUrl }) => {
  return (
    <>
      <div
        className="category p-6 flex justify-start items-end grow min-w-1/4 rounded-2xl bg-cover bg-center bg-no-repea"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,1)), url(${imageUrl})`,
        }}
      >
        <div className="copy bg-white py-3 px-6 rounded-lg">
          <h2 className="font-bold text-3xl">{title}</h2>
          <p>shop now</p>
        </div>
      </div>
    </>
  );
};

export default Card;
