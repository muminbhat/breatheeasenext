const FeedBack = () => {
    return (
      <section id="get-in-touch" className="get-in-touch-section text-center py-12 border border-1 border-gray-200">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-left">
            <img src="/map.png" alt="Location Map" className="w-full md:max-w-lg mx-auto md:mx-0 h-auto rounded-xl" />
            <a href="https://maps.app.goo.gl/1ccHjBsHAKFhbBZA9" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start text-blue-500 mt-2 no-underline">
              <img src="/map-icon.png" alt="Map Icon" className="w-4 h-4 mr-1" />Open in Google Maps
            </a>
          </div>
          <div className="md:w-1/2 text-left mt-4 md:mt-0">
            <div className="md:ml-8">
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
  