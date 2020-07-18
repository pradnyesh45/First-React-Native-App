import React, {useState} from 'react';
import {H1, Icon} from 'native-base';
import {Row} from 'react-native-easy-grid';

export default function Rating(props) {
    const [rating, setRating] = useState(props.rating)
    return (
        <Row>
            <H1>Rating: {rating}</H1>

            {rating >= 1 ? (
                <Icon type="FontAwesome" name="star" />
            ) : (
                <Icon type="FontAwesome" name="star-o" />
            )}
            {rating >= 2 ? (
                <Icon type="FontAwesome" name="star" />
            ) : (
                <Icon type="FontAwesome" name="star-o" />
            )}
            {rating >= 3 ? (
                <Icon type="FontAwesome" name="star" />
            ) : (
                <Icon type="FontAwesome" name="star-o" />
            )}
            {rating >= 4 ? (
                <Icon type="FontAwesome" name="star" />
            ) : (
                <Icon type="FontAwesome" name="star-o" />
            )}
            {rating >= 5 ? (
                <Icon type="FontAwesome" name="star" />
            ) : (
                <Icon type="FontAwesome" name="star-o" />
            )}
        </Row>      
    );
}
