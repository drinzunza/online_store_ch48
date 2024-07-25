import './home.css';
import banner from '../assets/top-banner.jpg';

function Home() {
  return (
    <div className="home page">
      {/* image in public folder */}
      <img className="img-1" src="/images/wrap1.jpg" alt="" />

      <div className="info">
        <h2>OrganiKa store</h2>
        <h5>Fresh food, 1-click away!</h5>
      </div>
    </div>
  );
}

export default Home;
