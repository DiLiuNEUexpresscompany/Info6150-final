import { RecommendedProduct1 } from "./recommendedProduct1";
import recommendedIceland from '../img/Reykjavic-architecture-in-Iceland.jpg'
import { RecommendedProduct2 } from "./recommendedProduct2";
import recommendedHongkong from '../img/hongkong3.webp'
import recommendedTokyo from '../img/tokyo2.jpg'
import recommendedItaly from '../img/italy-rome.jpg'

export function RecommendedProduct() {
  const place = ["iceland", "hongkong", "tokyo", "italy"];
  const imageSrc = [recommendedIceland, recommendedHongkong, recommendedTokyo, recommendedItaly];
  const discountRate = [35, 25, 15, 10];
  const endDate = ["December 31, 2023", "November 15, 2023", "December 23, 2023", "November 24, 2023"];
  const description = [
    "Iceland boasts magnificent volcanoes and glaciers, making it one of the youngest countries on Earth. You can explore volcanic craters, such as the breathtaking Reykjanes Volcano, or visit impressive glaciers like Vatnajökull. Additionally, Iceland is a prime location for witnessing the Northern Lights, offering a spectacular display of this natural phenomenon during winter nights.",
    "In Hong Kong, visitors can admire the stunning skyline where towering skyscrapers harmonize with majestic mountains. Take a stroll along busy streets to feel the pulse of the city, or take a cable car up Victoria Peak for a panoramic view of the entire city. Hong Kong is a shopper's paradise with fashionable shopping malls, boutique shops, and traditional street markets.",
    "Tokyo is a vibrant and modern city, known for its high technology, shopping, and cuisine culture. Visitors can explore historic landmarks and museums to experience traditional Japanese culture or indulge in shopping and culinary delights in the bustling commercial districts. Moreover, Tokyo has many parks and gardens for relaxation and strolling.",
    "Italy is a Mediterranean country full of culture and history, with some of the world's most famous art, architecture, and cultural heritage. Visitors can explore historic landmarks such as Rome, Venice, and Florence or indulge in delicious Italian cuisine and wine. Additionally, Italy has many beaches and mountains for relaxation and vacation."
  ];
  const startIndex = 1;

  return (
    <>
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <RecommendedProduct1
          place={place[0]}
          imageSrc={imageSrc[0]}
          discountRate={discountRate[0]}
          endDate={endDate[0]}
          description={description[0]}
        />
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {place.slice(startIndex).map((place, index) => (
            <RecommendedProduct2
              key={place}
              place={place}
              imageSrc={imageSrc[index + startIndex]}
              discountRate={discountRate[index + startIndex]}
              endDate={endDate[index + startIndex]}
              description={description[index + startIndex]}
            />
          ))}
        </div>
      </div>
    </>
  );
}
