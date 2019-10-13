import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getPopular from '../../state/popular/operations';

import Spinner from '../components/spinner';
import ErrorIndicator from '../components/error-indicator';
import Entity from '../components/entity';

const EntriesList = ({ entries = [], type }) => {

    let elements = entries.filter((item) => item.programType === type);
    elements = elements.splice(0, 22);

    const reactElements = elements.map((item, i) => {
        return <Entity key={i} img={item['images']} label={ item.title } />;
    });

    return reactElements;
};

const ItemsPage = ({ entries, getPopular, loading, error, type }) => {

    useEffect(() => {
       getPopular('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
    }, []);

    if (loading) {
        return <Spinner/>;
    }

    if (error) {
        return <ErrorIndicator/>;
    }

    return  <EntriesList entries={ entries } type={ type } />;
};

const mapStateToProps = ({ popularState: { entries, loading, error } }) => {
    return { entries, loading, error }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPopular: getPopular(),
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage);