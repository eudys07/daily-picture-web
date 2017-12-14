import React from 'react';
import styled from 'styled-components';
import {connect} from "react-redux";
import PictureCarousel from "../../picture/components/PictureCarousel";
import * as pictureActions from '../../picture/actions';
import NoPictureUploaded from "../../picture/components/NoPictureUploaded";
import PictureForm from "../../picture/components/PictureForm";

const UploadPictureSection = styled.div`
    margin-top: 60px;
`;

const PictureCarouselSection = styled.div`
    margin-top: 21px;
    margin-bottom: 21px;
`;

class HomePage extends React.Component {

    componentDidMount() {
        this.props.dispatch(pictureActions.loadDailyPictures());
    }

    render() {
        return (
            <div>
                <PictureCarouselSection>
                    <PictureCarousel pictures={this.props.pictures}/>
                </PictureCarouselSection>

                <UploadPictureSection>
                    <PictureForm/>
                </UploadPictureSection>
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