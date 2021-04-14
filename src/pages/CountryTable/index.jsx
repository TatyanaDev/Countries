import React from 'react';
import styles from './countryTable.module.scss';
import SignInForm from 'components/Forms/SignInForm';


const SignInPage = props => {
  const onSubmit = values => {
    console.log(values);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>LOGIN TO YOUR ACCOUNT</h1>
      <SignInForm onSubmit={onSubmit} />
    </div>
  );
};

export default SignInPage;