import { useState, useEffect } from "react";

const FruitCard = ({ fruit }) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    // Dynamically import the image
    import(`../assets/${fruit.image}.jpeg`)
      .then((image) => setImageSrc(image.default))
      .catch((err) => console.error(`Error loading image: ${err}`));
  }, [fruit.image]);

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-110
     duration-100 relative"
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={fruit.name}
          className="w-full h-64 object-cover"
        />
      ) : (
        <p>Loading...</p>
      )}
      <div className="flex flex-col items-center my-2 py-2 ">
        <p className="font-body text-slate-500">{fruit.name}</p>
        <p className="font-body text-slate-500">₹{fruit.price}</p>
      </div>
      <button className="absolute bottom-3 right-3 bg-green-500
       text-white px-4 py-2 rounded-full flex text-xs hover:bg-green-600 
       duration-110 ">
        ADD TO CART
      </button>
      <span
        className="absolute top-3 right-3 bg-sky-300 text-white
      border p-1
      border-sky-300
      rounded-lg text-sm"
      >
        1% off
      </span>
    </div>
  );
};

export default FruitCard;
