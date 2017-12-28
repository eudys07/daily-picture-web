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

    constructor(props) {
        super(props);

        this.state = {
            isDailyPictureUploaded: false,
            pictureToUpload: {
                file: null,
                caption: ''
            },
            uploadedDailyPicture: {},
            uploadingPicture: false
        }
    }

    componentDidMount() {
        this.props.dispatch(pictureActions.loadDailyPictures());
    }

    onPictureSelected = (picture) => {
        this.setState({pictureToUpload: {file: picture}})
    };

    onCaptionInputChangeHandler = (evt) => {
        this.setState({
           pictureToUpload: {
               caption: evt.target.value
           }
        });
    };

    onSubmit = (evt) => {
        debugger;
        evt.preventDefault();

        this.props.dispatch(pictureActions.uploadDailyPicture(this.state.pictureToUpload))
            .then(picture => {
                this.props.dispatch(pictureActions.loadDailyPictures());
            });
    };

    render() {
        return (
            <div>
                <PictureCarouselSection>
                    <PictureCarousel pictures={this.props.pictures}/>
                </PictureCarouselSection>

                <UploadPictureSection>
                    <PictureForm picture={this.state.pictureToUpload}
                                 onSubmit={this.onSubmit}
                                 onPictureSelected={this.onPictureSelected}
                                 onCaptionInputChangeHandler={this.onCaptionInputChangeHandler}/>
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