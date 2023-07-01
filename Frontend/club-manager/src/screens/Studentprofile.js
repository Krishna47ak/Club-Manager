import React from "react";
import simg from "../assets/images/img-7.jpg"; //for image
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

function Studentprofile({ isAuthenticated }) {

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" />
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Section */}
      <div className="bg-gray-200 py-8 lg:w-1/3">
        <div className="mx-auto h-24 w-24 rounded-full overflow-hidden">
          <img
            src={simg}
            alt="Profile Picture"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-4 text-center">
          <h2 className="text-xl font-semibold">Shashi</h2>
          <p className="text-gray-500">Role: Student</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-white py-8 lg:w-2/3">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <h3 className="font-semibold text-5xl">
              Personal Information
            </h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p className="font-medium text-3xl">USN</p>
                <p>ABCD12345678</p>
              </div>
              <div>
                <p className="font-medium text-3xl">College</p>
                <p>XYZ College</p>
              </div>
              <div>
                <p className="font-medium text-3xl">Email</p>
                <p>xyz.abc@example.com</p>
              </div>
              <div>
                <p className="font-medium text-3xl">Mobile</p>
                <p>+1 234 567 8901</p>
              </div>
              <div>
                <p className="font-medium text-3xl">Gender</p>
                <p>Male</p>
              </div>
            </div>
            <div className="flex justify-end mt-[200px]">
              <button className="bg-black text-white w-[30%] h-[40px] rounded-md p-2">
                Search Clubs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapStateToProps)(Studentprofile)
