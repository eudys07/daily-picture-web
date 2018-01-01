import React from 'react';
import styled from 'styled-components';
import {connect} from "react-redux";
import PictureCarousel from "../../picture/components/PictureCarousel";
import * as pictureActions from '../../picture/actions';
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
            pictureToUpload: {
                file: null,
                caption: ''
            }
        }
    }

    componentDidMount() {
        this.props.dispatch(pictureActions.loadDailyPictures());
    }

    onPictureSelected = (picture) => {
        this.setState(Object.assign({}, this.state, {
            pictureToUpload: {
                ...this.state.pictureToUpload,
                file: picture
            }
        }));
    };

    onCaptionInputChangeHandler = (evt) => {
        this.setState(Object.assign({}, this.state, {
            pictureToUpload: {
                ...this.state.pictureToUpload,
                caption: evt.target.value
            }
        }));
    };

    onSubmit = (evt) => {
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
                    <PictureCarousel pictures={this.props.dailyPictures}/>
                </PictureCarouselSection>

                <UploadPictureSection>
                    <PictureForm picture={this.state.pictureToUpload}
                                 onSubmit={this.onSubmit}
                                 onPictureSelected={this.onPictureSelected}
                                 isUploadingPicture={this.props.isUploadingPicture}
                                 onCaptionInputChangeHandler={this.onCaptionInputChangeHandler}/>
                </UploadPictureSection>
                
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        ...state.picture
    }
}

export default connect(mapStateToProps)(HomePage);