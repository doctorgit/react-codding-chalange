import React from 'react';
import { Link } from '../../styled/Link';
import Entity from '../components/entity';

const HomePage = () => (
    <>
    <Link to={'/series'}><Entity name={('Series').toUpperCase()} label={ 'Popular Series' } /></Link>
    <Link to={'/movies'}><Entity name={('Movies').toUpperCase()} label={ 'Popular Movies' } /></Link>
    </>
);

export default HomePage;