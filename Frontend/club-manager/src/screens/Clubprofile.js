import React from 'react'
import{Link} from 'react-router-dom'
import car_club from '../assets/images/car-club.jpg'
function ClubProfile() {
  return (
    <div className="container mx-auto px-4 h-screen">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <div className="flex items-center justify-center mb-4 ">
            {/* Club Logo */}
            <img src={car_club} alt="Club Logo" className='w-[250px] h-[250px]' />
          </div>
          <div className="mb-4">
            {/* Club Name */}
            <h1 className="text-2xl font-bold">Club Name</h1>
            {/* Club Description */}
            <p className="text-gray-600">Brief overview of the club...</p>
          </div>
          <div className="mb-4">
            {/* College Name */}
            <p className="text-gray-600">College Name</p>
          </div>
          <div className="mb-4">
            {/* Club Contact Information */}
            <p className="text-gray-600">Contact details: email, phone, social media handles</p>
          </div>
          <div className="mb-4">
            {/* Meeting Schedule */}
            <p className="text-gray-600">Meeting schedule: days, times, locations</p>
          </div>
        </div>
        <div className="md:w-2/3 md:pl-8">
          <div className="mb-4">
            {/* Club Officers */}
            <h2 className="text-xl font-bold mb-2">Club Officers</h2>
            <ul className="list-disc pl-6">
              <li>President: </li>
              <li>Vice President: </li>
              <li>Secretary: </li>
              <li>Treasurer: </li>
            </ul>
          </div>
          <div className="mb-4">
            {/* Club Members */}
            <h2 className="text-xl font-bold mb-2">Club Members</h2>
            <ul className="grid grid-cols-3 gap-4">
              <li>Member 1</li>
              <li>Member 2</li>
              <li>Member 3</li>
              {/* Add more members */}
            </ul>
          </div>
          <div className="mb-4">
            {/* Club Events */}
            <h2 className="text-xl font-bold mb-2">Club Events</h2>
            <div className="flex space-x-4">
              {/* Event 1 */}
              <div>
                <img src="/path/to/event-image-1.jpg" alt="Event 1" className="w-32 h-24 object-cover" />
                <p>Event 1 details</p>
              </div>
              {/* Event 2 */}
              <div>
                <img src="/path/to/event-image-2.jpg" alt="Event 2" className="w-32 h-24 object-cover" />
                <p>Event 2 details</p>
              </div>
              {/* Add more events */}
            </div>
          </div>
          <div className="mb-4">
            {/* Club Achievements */}
            <h2 className="text-xl font-bold mb-2">Club Achievements</h2>
            <p>Club achievements, awards, or recognition details</p>
          </div>
          <div className='mt-[100px]'>
            <Link to='/eclubprofile'>
            <button className='bg-black text-white w-[25%] h-[50px] rounded-lg '>Edit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClubProfile