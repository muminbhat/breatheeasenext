
const FeedBack = () => {
  return (
    <section id="get-in-touch" className="get-in-touch-section text-center py-12 flex flex-col items-center border border-1 border-gray-200">
      <div className="max-w-4xl w-full mx-auto flex justify-between items-center flex-wrap">
        <div className="flex-1 mr-4 text-left">
          <img src="/map.png" alt="Location Map" className="max-w-full h-auto rounded-xl" />
          <a href="https://maps.app.goo.gl/1ccHjBsHAKFhbBZA9" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 mt-2 no-underline">
            <img src="/map-icon.png" alt="Map Icon" className="mr-1 w-4 h-4" />Open in Google Maps
          </a>
        </div>
        <div className="flex-1 text-left">
          <div className="mt-4 relative right-[-74px]">
            <p>Dr. Tarun Sharma would love your feedback.</p>
            <p>Post a review to our profile.</p>
            <a href="https://g.page/r/Cb9owB_EBbf7EBI/review" target="_blank" rel="noopener noreferrer" className="text-blue-500">Write a Review</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedBack;
