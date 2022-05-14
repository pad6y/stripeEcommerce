import Layout from '../components/shared/layout';

const NotFound = () => {
  const style = {
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '15rem',
  };

  return (
    <Layout>
      <p style={style}>Page Not Found!</p>
    </Layout>
  );
};

export default NotFound;
