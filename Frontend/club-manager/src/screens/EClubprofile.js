import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";


function Clubprofile({ club }) {
  const [name, setName] = useState(club?.name)
  const [description, setDescription] = useState(club?.description)
  const [collegename, setCollegeName] = useState(club?.collegename)
  const [president, setPresident] = useState(club?.president)
  const [vicepresident, setVicePresident] = useState(club?.vicepresident)
  const [secretary, setSecretary] = useState(club?.secretary)
  const [treasurer, setTreasurer] = useState(club?.treasurer)

  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div className="container mx-auto px-4">
      <form>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <div className="flex items-center justify-center mb-4">
              {/* Club Logo */}
              <div className="w-[250px] h-[250px]">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
                {selectedImage && <img src={selectedImage} alt="Selected" />}
              </div>
            </div>
            <div className="mb-4">
              {/* Club Name */}
              <span className="border border-black p-1 flex ">
                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Club Name" className="w-full" />
              </span>
              {/* Club Description */}
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="mt-2 w-[100%] h-[100px] border border-black"
                placeholder="Club description..."
              ></textarea>
            </div>
            <div className="mb-4">
              {/* College Name */}
              <input
                value={collegename}
                onChange={e => setCollegeName(e.target.value)}
                placeholder="College name"
                className="border border-black w-full"
              />
            </div>

            <div className="mb-4">
              {/* Meeting Schedule */}
              <p className="text-gray-600">
                Meeting schedule: days, times, locations
              </p>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-8">
            <div className="mb-4">
              {/* Club Officers */}
              <h2 className="text-xl font-bold mb-2">Club Officers</h2>
              <ul className="list-disc pl-6 grid  gap-2 ">
                <li>
                  President:
                  <span>
                    <input
                      value={president}
                      className="border border-black w-[80%]"
                      placeholder="President name.."
                      onChange={e => setPresident(e.target.value)}
                    />
                  </span>{" "}
                </li>
                <li>
                  Vice President:
                  <span>
                    <input
                      value={vicepresident}
                      className="border border-black w-[80%]"
                      placeholder="Vice President name.."
                      onChange={e => setVicePresident(e.target.value)}
                    />
                  </span>{" "}
                </li>
                <li>
                  Secretary:
                  <span>
                    <input
                      value={secretary}
                      className="border border-black w-[80%]"
                      placeholder="Secretary name.."
                      onChange={e => setSecretary(e.target.value)}
                    />
                  </span>{" "}
                </li>
                <li>
                  Treasurer:
                  <span>
                    <input
                      value={treasurer}
                      className="border border-black w-[80%]"
                      placeholder="Treasurer name.."
                      onChange={e => setTreasurer(e.target.value)}
                    />
                  </span>{" "}
                </li>
              </ul>
            </div>
            <div className="mb-4">
              {/* Club Members */}
              <h2 className="text-xl font-bold mb-2">Club Members</h2>
              <ul className="grid grid-cols-3 gap-4">
                <li>
                  <span>
                    <input
                      className="border border-black w-[80%]"
                      placeholder="Member 1"
                    />
                  </span>{" "}
                </li>
                <li>
                  <span>
                    <input
                      className="border border-black w-[80%]"
                      placeholder="Member 2"
                    />
                  </span>{" "}
                </li>
                <li>
                  <span>
                    <input
                      className="border border-black w-[80%]"
                      placeholder="Member 3"
                    />
                  </span>{" "}
                </li>
                {/* Add more members */}
              </ul>
            </div>
            <div className="mb-4">
              {/* Club Events */}
              <h2 className="text-xl font-bold mb-2">Club Events</h2>
              <div className="flex space-x-4">
                {/* Event 1 */}
                <div>
                  <div className="w-[250px] h-[250px]">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                    {selectedImage && (
                      <img src={selectedImage} alt="Selected" />
                    )}
                  </div>
                  <p>
                    <span>
                      <textarea placeholder="event details"></textarea>
                    </span>
                  </p>
                </div>
                {/* Event 2 */}
                <div>
                  <div className="w-[250px] h-[250px]">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                    {selectedImage && (
                      <img src={selectedImage} alt="Selected" />
                    )}
                  </div>
                  <p>
                    <span>
                      <textarea placeholder="event details"></textarea>
                    </span>
                  </p>
                </div>
                {/* Add more events */}
              </div>
            </div>
            <div className="mb-4">
              {/* Club Achievements */}
              <h2 className="text-xl font-bold mb-2">Club Achievements</h2>
              <textarea className="w-[500px] h-[100px] " placeholder="Club achievements, awards, or recognition details"></textarea>
            </div>
            <div className="mb-4">
              <Link to='/club-profile'>
                <button className="bg-black text-white w-[150px] p-1 rounded-md">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  club: state.club.club
})

export default connect(mapStateToProps)(Clubprofile)
