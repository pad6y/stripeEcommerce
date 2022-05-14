import { useHistory } from 'react-router-dom';
import Layout from '../../../components/shared/layout';

function Cancelled() {
  const history = useHistory();
  return (
    <Layout>
      <div className="checkout">
        <h1>Payment failed</h1>
        <p>Payment was not successful</p>
        <div>
          <button
            className="button is-black nomad-btn submit"
            onClick={() => {
              history.push('/shop');
            }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Cancelled;
