import React from "react";

import { EntityContainer, ImageContainer } from '../../../styled/Containers';
import { Label } from '../../../styled/Label';

const Entity = ({ name, label, img = {} }) => {
    let url = '';
    if (img['Poster Art'] && img['Poster Art'].url) {
        url = img['Poster Art'].url;
    }
    return (
        <EntityContainer>
            <ImageContainer url={ url }>
                { name }
            </ImageContainer>
            <Label>
                { label }
            </Label>
        </EntityContainer>
    );
};

export default Entity;
