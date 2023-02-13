import React from 'react';
import Footer from '../../сomponents/Footer/Footer';
import Header from '../../сomponents/Header/Header';
import Users from '../../сomponents/Main/Users';

export default function UsersPage() {
  return (
    <>
      <Header title="Users"/>
      <Users/>
      <Footer/>
    </>
  );
}
