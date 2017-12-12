import React from 'react';
import {connect} from "react-redux";
import PictureCarousel from "../../picture/components/PictureCarousel";
import * as pictureActions from '../../picture/actions';

class HomePage extends React.Component {

    componentDidMount() {
        this.props.dispatch(pictureActions.loadDailyPictures());
    }

    render() {
        return (
            <div>
                <PictureCarousel pictures={this.props.pictures}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        pictures: state.picture.dailyPictures
    }
}

export default connect(mapStateToProps)(HomePage);