// import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import studioBag from '../../assets/studio-bag.png';
import './main-section.styles.scss';

function MainSection() {
  const history = useHistory();

  return (
    <div className="main-section-container">
      <div className="main-section-middle">
        <div className="ms-m-image">
          <img src={studioBag} alt="studio bag" />
        </div>
        <div className="ms-m-description">
          <h2>Design for fashion. Crafted for everyday convience.</h2>
          <p>
            We make products that effortlessly transition from day to night.
            From the board room to fitness studio, and everywhere inbetween,
            each Padby piece is thoughtfully created to be the perfect balance
            of form and function!
          </p>
          <button
            className="button is-black"
            id="shop-product"
            onClick={() => history.push('/product/1')}
          >
            STUDIO BAG
          </button>
        </div>
      </div>
    </div>
  );
}

// export default withRouter(MainSection);
export default MainSection;
