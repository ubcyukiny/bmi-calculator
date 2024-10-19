import { useState } from "react";

const RecipeCard = (props) => {
  let picture = props.picture;
  let title = props.title;
  let protein = props.protein;
  let fat = props.fat;
  let carbs = props.carbs;
  let calories = props.calories;
  let tags = props.tags;

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className=" rounded-xl overflow-hidden shadow-lg h-full w-full">
      {!isImageLoaded && (
        <div className="animate-pulse bg-gray-200 h-52 w-full"></div> // Adjust height here as needed
      )}
      <img
        className={`w-full cursor-pointer hover:scale-105 duration-300 transition ease-in-out ${isImageLoaded ? "" : "hidden"}`}
        src={picture}
        alt="Recipe Picture"
        onLoad={() => setIsImageLoaded(true)}
      />
      {isImageLoaded ? (
        <div>
          <div className="px-6 py-6">
            <div className="font-thin text-xl mb-2 cursor-pointer hover:underline">
              {title}
            </div>
            <div className="text-gray-700 text-base">
              <div>
                <b>{calories}kcal</b> Calories
              </div>
              <div>
                <b>{carbs}g </b>Carbs <b>{protein}g </b>Protein <b>{fat}g </b>
                Fat
              </div>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div className="animate-pulse px-6 py-6">
          <div className="h-6 w-3/5 bg-gray-300 rounded-xl mb-4"></div>
          <div className="h-4 w-4/5 bg-gray-300 rounded-xl mb-2"></div>
          <div className="h-4 w-4/5 bg-gray-300 rounded-xl mb-8"></div>
          <div className="flex flex-row">
            <div className="h-4 bg-gray-300 rounded-full w-1/4 mr-2"></div>
            <div className="h-4 bg-gray-300 rounded-full w-1/4 mr-2"></div>
            <div className="h-4 bg-gray-300 rounded-full w-1/4 mr-2"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
