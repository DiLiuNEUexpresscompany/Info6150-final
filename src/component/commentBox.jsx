import { StarIcon } from '@heroicons/react/20/solid'
import WriteComment from './writeComment'
import '../css/main.css'

const reviews = {
  average: 3,
  totalCount: 1945,
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>It's magical to see how a group of guests comes together over the course of our trip. I can always tell when that's happening because suddenly the enthusiasm is palpable.</p>
      `,
      author: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CommentBox() {
  return (
    <div className="bg-white">
    <h1 className="text-3xl font-bold tracking-tight text-black lg:text-6xl text-center py-5 capitalTitle">Comments</h1>
      <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-5 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-10">
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 title">Customer Reviews</h2>

          <div className="mt-3 flex items-center">
            <div>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                      'h-5 w-5 flex-shrink-0'
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{reviews.average} out of 5 stars</p>
            </div>
            <p className="ml-2 text-sm text-gray-900 paragraph">Based on {reviews.totalCount} reviews</p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Review data</h3>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-medium text-gray-900 paragraph">Share your thoughts</h3>
            <p className="mt-1 text-base text-gray-600 paragraph">
              If you’ve used this product, share your thoughts with other customers
            </p>
            <br />
            <WriteComment />

          </div>
        </div>

        <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
          <h3 className="sr-only">Recent reviews</h3>

          <div className="flow-root">
            <div className="-my-12 divide-y divide-gray-200">
              {reviews.featured.map((review) => (
                <div key={review.id} className="py-12">
                  <div className="flex items-center">
                    <img src={review.avatarSrc} alt={`${review.author}.`} className="h-12 w-12 rounded-full" />
                    <div className="ml-4">
                      <h4 className="text-sm font-bold text-gray-900 title">{review.author}</h4>
                      <div className="mt-1 flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                              'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">{review.rating} out of 5 stars</p>
                    </div>
                  </div>

                  <div
                    className="mt-4 space-y-6 text-lg italic text-gray-600 paragraph"
                    dangerouslySetInnerHTML={{ __html: review.content }}
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
   
  )
}
