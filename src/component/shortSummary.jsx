import '../css/main.css';

export const ShortSummary = (props) => {
  return (
    <>
      <div className="mx-auto max-w-xl px-4 py-5 sm:px-6  lg:grid lg:max-w-4xl  lg:gap-x-8 lg:px-8">
        <blockquote className="text-2xl italic text-gray-900 title dark:text-white">
          <p>{props.summary}</p>
        </blockquote>
      </div>
    </>
  );
};
