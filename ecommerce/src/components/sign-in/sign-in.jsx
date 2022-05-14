import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import { auth } from '../../firebase/index';
import Layout from '../shared/layout';

import '../sign-up/sign-up.styles.scss';

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};

function SignIn() {
  const [error, setError] = useState(null);
  const history = useHistory();

  const initialValues = {
    email: '',
    password: '',
  };

  const signInHandler = async (values, { setSubmitting }) => {
    const { email, password } = values;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setSubmitting(false);
      history.push('/');
    } catch (error) {
      console.log(error);
      setSubmitting(false);
      setError(error);
    }
  };

  return (
    <Layout>
      <h1>Sign In</h1>
      <div className="form-container">
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={signInHandler}
        >
          {({ values, errors, handleChange, handleSubmit, isSubmitting }) => {
            const { email } = errors;

            return (
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    placeholder="Email"
                    className={'nomad-input ' + (email ? 'error' : '')}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    placeholder="Password"
                    className={'nomad-input password'}
                  />
                </div>
                <div className="submit-btn">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button is-black nomad-btn submit"
                  >
                    Sign In
                  </button>
                </div>
                <div className="error-message">
                  {error && <p>{error.message}</p>}
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </Layout>
  );
}

export default SignIn;
