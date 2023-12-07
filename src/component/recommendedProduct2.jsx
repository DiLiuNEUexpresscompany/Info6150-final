import '../css/main.css';

export function RecommendedProduct2({ place, imageSrc, discountRate, endDate, description }) {
  return (
    <a rel="noopener noreferrer" href="Hongkong.html" target="_blank" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
      <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={imageSrc} alt={place} />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline capitalTitle" >{place}</h3>
        {discountRate && (
          <div className="discountBox">
            <span className="discountLetter"><strong>{discountRate}% OFF</strong></span>
          </div>
        )}
        {endDate && (
          <span className="text-s dark:text-gray-400 paragraph"><strong> End in {endDate}</strong></span>
        )}
        <p className="paragraph text-lg">{description}</p>
      </div>
    </a>
  );
}
