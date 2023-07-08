import React, { useEffect } from "react";
import ProfileImage from "../assets/images/profile-icon.jpg";
import { Navigate, Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchUser } from "../store/actions/auth";

function Profile({ isAuthenticated, user, fetchUser }) {

  useEffect(() => {
    fetchUser();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Section */}
      <div className="bg-gray-200 py-8 lg:w-1/3">
        <div>
          <div className="relative w-48 mx-auto">
            <img
              src={user?.img ? URL.createObjectURL(user?.img) : ProfileImage}
              alt="dp"
              className="h-44 w-44 rounded-full mx-auto overflow-hidden object-cover"
            />
          </div>
        </div>
        <div className="mt-4 text-center">
          <h2 className="text-xl font-semibold">{user?.name || ''}</h2>
          <p className="text-gray-500">
            Role: {(user?.role[0].toUpperCase() + user?.role.substring(1)) || ''}
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-white py-8 lg:w-2/3">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <h3 className="font-semibold text-5xl">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p className="font-medium text-3xl">USN</p>
                <p>{user?.usn || ''}</p>
              </div>
              <div>
                <p className="font-medium text-3xl">College</p>
                <p>{user?.collegename || ''}</p>
              </div>
              <div>
                <p className="font-medium text-3xl">Email</p>
                <p>{user?.email || ''}</p>
              </div>
              <div>
                <p className="font-medium text-3xl">Mobile</p>
                <p>+91 {user?.mobile || ''}</p>
              </div>
              <div>
                <p className="font-medium text-3xl">Gender</p>
                <p>
                  {(user?.gender[0].toUpperCase() + user?.gender.substring(1)) || ''}
                </p>
              </div>
            </div>
            <Link to="/search">
              <div className="flex justify-end mt-[200px]">
                <button className="bg-black hover:bg-[#01616c] text-white w-[30%] h-[40px] rounded-md p-2">
                  Search Clubs
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, { fetchUser })(Profile);
