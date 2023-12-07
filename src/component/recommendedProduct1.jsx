import Discount from "./discount";
import '../css/main.css';

export function RecommendedProduct1({ place, imageSrc, discountRate, endDate, description }) {
  return (
    <>
      <a
        rel="noopener noreferrer"
        href={`${place}.html`}
        target="_blank"
        className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
      >
        <img
          src={imageSrc}
          alt={place}
          className="object-cover w-full h-64 rounded-lg sm:h-96 lg:col-span-7 dark:bg-gray-500"
        />
        <div className="p-6 space-y-2 lg:col-span-5">
          <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline capitalTitle">
            {place}
          </h3>
          <Discount discount={discountRate} />
          <span className="text-s dark:text-gray-400 paragraph">
            <strong> End in {endDate}</strong>
          </span>
          <p className="paragraph text-lg">
            {description}
          </p>
        </div>
      </a>
    </>
  );
}
