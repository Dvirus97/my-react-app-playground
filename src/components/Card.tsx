import profileImage from "../assets/profile.png";

export function Card() {
  return (
    <>
      <div className="card">
        {/* <img src="https://via.placeholder.com/150" alt="profile picture" /> */}
        {/* <img src="../assets/profile.png" alt="profile picture" /> */}
        <img className="card-image" src={profileImage} alt="profile picture" />
        <h2 className="card-title">Dvir Cohen</h2>
        <p className="card-text">I Am Program developer and I like coding</p>
      </div>
    </>
  );
}
