import '../css/main.css'
export function Itinerary({ itineraryData, imageSrc }){
    return(
        <div className="overflow-x-auto shadow-md sm:rounded-lg py-5">
        <h1 className="text-3xl font-bold tracking-tight text-black lg:text-6xl text-center py-3 capitalTitle">
          Itinerary
        </h1>
        <div className="lg:grid lg:max-w-7xl lg:grid-cols-2 gap-4 lg:px-8 mx-auto py-5">
          <table className="text-xl text-left text-gray-500 dark:text-gray-400 paragraph">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-3xl title blue">
                  Day
                </th>
                <th scope="col" className="px-6 py-3 text-3xl title blue">
                  Tourist Route
                </th>
              </tr>
            </thead>
            <tbody>
              {itineraryData.map((item) => (
                <tr key={item.day} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 paragraph">
                  <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white paragraph font-bold">
                    {item.day}
                  </th>
                  <td className="px-6 py-4 text-black font-bold">{item.route}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
              <img src={imageSrc} alt="Itinerary" className="w-full object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
    );
}