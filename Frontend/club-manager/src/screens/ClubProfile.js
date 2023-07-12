import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getClub } from '../store/actions/club'
import { BiSolidPencil } from "react-icons/bi";

import car_club from '../assets/images/car-club.jpg'

function ClubProfile({ club, user, getClub }) {
  useEffect(() => {
    getClub(user?._id)
  }, [user])

  return (
    <div className=" mx-auto px-14 my-5">
      <button className="absolute top-32 bg-black hover:bg-[#01616c] text-white w-[10%] h-[40px] rounded-md p-2">
        <Link className="flex" to="/edit-club">
          <BiSolidPencil style={{ fontSize: 23, marginRight: 9 }} />
          Edit Club
        </Link>
      </button>
      {/* Club Logo */}
      <div className='flex justify-between items-center'  >
        <img src={require("../assets/images/club_logo.png")} alt="Logo" className='w-52 h-52 ml-52 rounded-xl ' />
        <img src={car_club} alt="Club Logo" className='w-[42%] h-80 rounded-2xl ' />
      </div>
      <div className="flex justify-center space-x-60 mt-10">
        <div className="flex flex-col items-center text-center w-[30rem]">
          <div className="mb-4">
            {/* Club Name */}
            <h1 className="text-3xl underline font-bold">{club?.name}</h1>
            {/* Club Description */}
            <p className="text-gray-600 mt-7">{club?.description}</p>
          </div>
          <div className="mb-4 flex">
            {/* College Name */}
            <p>College name :</p>
            <p className="text-gray-600 ml-3">{club?.collegename}</p>
          </div>
          <div className="mb-4">
            {/* Club Contact Information */}
            <p className="text-gray-700 font-bold text-lg">Contact details: </p>
            <p className="text-gray-600">email : {club?.contactemail}</p>
            <p className="text-gray-600">phone : {club?.contactmobile}</p>
            <p className="text-gray-600">social media handles :</p>
          </div>
        </div>
        <div className="w-[30rem]">
          <div className="mb-4">
            {/* Club Officers */}
            <h2 className="text-xl font-bold mb-2">Club Officers</h2>
            <ul className="list-disc pl-6">
              <li>President: {club?.president}</li>
              <li>Vice President: {club?.vicepresident}</li>
              <li>Secretary: {club?.secretary}</li>
              <li>Treasurer: {club?.treasurer}</li>
            </ul>
          </div>
          <div className="mb-4">
            {/* Club Members */}
            <h2 className="text-xl font-bold">Club Members</h2>
            <ul className="flex flex-wrap w-96">
              {club?.members.map((member) => (
                <li key={member} className='bg-blue-500 mt-3 mr-5 text-white p-1 px-2 rounded-xl' >{member}</li>
              ))}
              {/* Add more members */}
            </ul>
          </div>
          <div className="mb-4">
            {/* Club Achievements */}
            <h2 className="text-xl font-bold mb-2">Club Achievements</h2>
            <p>Club achievements, awards, or recognition details</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  club: state.club.club,
  user: state.auth.user
})

export default connect(mapStateToProps, { getClub })(ClubProfile)