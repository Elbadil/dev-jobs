import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import { FaMapMarker } from "react-icons/fa";

const JobListing = ({ id, title, type, description, salary, location }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  let jobDescription = description;

  if (!showFullDescription) {
    jobDescription = jobDescription.substring(0, 100) + "...";
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{type}</div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>

        <div className="mb-3">{jobDescription + " "}</div>
        <button
          className="text-indigo-500 hover:text-indigo-600 mb-5"
          onClick={() => setShowFullDescription((prevState) => !prevState)}
        >
          {showFullDescription ? "Less" : "More"}
        </button>

        <h3 className="text-indigo-500 mb-2">{salary} / Year</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline text-lg mb-1 mr-1" />
            {location}
          </div>
          <Link
            to={`/jobs/${id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

JobListing.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default JobListing;
