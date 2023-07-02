import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchClubs } from '../store/actions/club';
import ClubCard from '../components/Clubs/ClubCard';

const Search = ({ clubs, fetchClubs }) => {

  useEffect(() => {
    fetchClubs()
  }, [])

  const [interest, setInterest] = useState('');
  const [recommendedClubs, setRecommendedClubs] = useState(clubs);

  useEffect(() => {
    setRecommendedClubs(clubs)
  }, [clubs])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userInterest = interest.toLowerCase()
    const searchClubs = clubs.filter((club) => club.interests.includes(userInterest))
    setRecommendedClubs(searchClubs)
  };


  return (
    <div>
      <h1>Club Recommendation</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your interests (comma-separated):
          <input type="text" value={interest} onChange={(event) => setInterest(event.target.value)} />
        </label>
        <button onSubmit={handleSubmit} type="submit">Recommend</button>
      </form>
      <h2>Recommended Clubs:</h2>
      {recommendedClubs.length > 0 && recommendedClubs.map((club) => (
        <ClubCard key={club._id} club={club} />
      )
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  clubs: state.club.clubs
})

export default connect(mapStateToProps, { fetchClubs })(Search)