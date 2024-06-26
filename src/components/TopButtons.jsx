import React from "react";

function TopButton({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Sydney",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Toronto",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          onClick={() => setQuery({ q: city.title })}
          className="text-white text-xl font-medium px-3 py-2 hover:bg-gray-700 transition ease-in rounded-md "
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButton;
