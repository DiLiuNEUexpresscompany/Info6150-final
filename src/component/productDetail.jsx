import { useState } from 'react'
import { CheckIcon, QuestionMarkCircleIcon, StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'
import '../css/main.css'
import '../css/productDetail.css'
import Discount from './discount'
const reviews = { average: 4, totalCount: 1867}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetail(props) {
    const [selectedSize, setSelectedSize] = useState(props.sizes && props.sizes.length > 0 ? props.sizes[0] : null);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-8 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:max-w-lg lg:self-end">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-2">
              {props.breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center text-sm">
                    <a href={breadcrumb.href} className="font-medium text-gray-500 hover:text-gray-900 capitalTitle">
                      {breadcrumb.name}
                    </a>
                    {breadcrumbIdx !== props.breadcrumbs.length - 1 ? (
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                      >
                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                      </svg>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-4">
            <h1 className="text-3xl capitalTitle font-bold tracking-tight text-gray-900 sm:text-4xl">{props.name}</h1>
          </div>
          <Discount discount={25}/>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex items-center">
              <p className="text-lg text-gray-900 sm:text-xl paragraph">{props.price}</p>

              <div className="ml-4 border-l border-gray-300 pl-4">
                <h2 className="sr-only paragraph">Reviews</h2>
                <div className="flex items-center">
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
                  <p className="ml-2 text-sm text-gray-700">{reviews.totalCount} reviews</p>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-6">
              <p className="text-lg text-gray-500 paragraph ">{props.description}</p>
            </div>

            <div className="mt-6 flex items-center">
              <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
              <p className="ml-2 text-base text-gray-500 paragraph">Departures available at all times</p>
            </div>
          </section>
        </div>

        {/* Product image */}
        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
            <img src={props.imageSrc} alt={props.imageAlt} className="h-full w-full object-cover object-center" />
          </div>
        </div>

        {/* Product form */}
        <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
          <section aria-labelledby="options-heading">
            <h2 id="options-heading" className="sr-only">
              Product options
            </h2>

            <form>
              <div className="sm:flex sm:justify-between">
                {/* Size selector */}
                <RadioGroup value={selectedSize} onChange={setSelectedSize}  >
                  <RadioGroup.Label className="block text-sm font-medium text-gray-700">Size</RadioGroup.Label>
                  <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2 your-radio-group-class ">
                    {props.sizes.map((size) => (
                      <RadioGroup.Option
                        as="div"
                        key={size.name}
                        value={size}
                        className={({ active }) =>
                          classNames(
                            active ? 'ring-2' : '',
                            ' block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-none'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="p" className="text-base font-medium text-gray-900">
                              {size.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description as="p" className="mt-1 text-sm text-gray-500">
                              {size.description}
                            </RadioGroup.Description>
                            <div
                              className={classNames(
                                active ? 'border' : 'border-2',
                                checked ? 'border' : 'border-transparent',
                                'pointer-events-none absolute -inset-px rounded-lg'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
              <div className="mt-4">
                <a href="#" className="group inline-flex text-sm text-gray-500 hover:text-gray-700 paragraph">
                  <span>Which package should I buy?</span>
                  <QuestionMarkCircleIcon
                    className="ml-2 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </a>
              </div>
              <div className="mt-10">
                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-md border border-transparent add_Button_bg-blue px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 capitalTitle"
                  onClick={() => { window.location.href = '/registration'; }}
                >
                  Go registration
                </button>
              </div>
              <div className="mt-6 text-center">
                <a href="#" className="group inline-flex text-base font-medium">
                  <ShieldCheckIcon
                    className="mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="text-gray-500 hover:text-gray-700">Lifetime Guarantee</span>
                </a>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}
