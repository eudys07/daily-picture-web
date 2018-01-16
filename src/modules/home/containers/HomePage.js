import React from 'react';
import styled from 'styled-components';
import {connect} from "react-redux";
import PictureCarousel from "../../picture/components/PictureCarousel";
import * as pictureActions from '../../picture/actions';
import PictureForm from "../../picture/components/PictureForm";
import VisibleDiv from "../../common/components/VisibleDiv";
import ResponsiveImage from "../../picture/components/ResponsiveImage";
import PictureDetail from "../../picture/components/PictureDetail";

const PictureSection = styled.div`
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
        this.props.dispatch(pictureActions.loadDailyPicture())
            .catch(err => {
                Materialize.toast(err, 4000);
            });
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
                this.props.dispatch(pictureActions.loadDailyPicture());
            });
    };

    render() {
        let DailyPicture = null;

        if (this.props.isDailyPictureUploaded) {
            DailyPicture =
                <VisibleDiv visible={this.props.isDailyPictureUploaded} className="center">
                    <PictureDetail picture={this.props.dailyPicture}/>
                </VisibleDiv>
        }

        return (
            <div>
                <PictureCarouselSection>
                    <PictureCarousel pictures={this.props.dailyPictures}/>
                </PictureCarouselSection>

                <VisibleDiv visible={this.props.isAjaxLoading} className="progress">
                    <div className="indeterminate"/>
                </VisibleDiv>

                <VisibleDiv visible={!this.props.isAjaxLoading}>
                    <PictureSection>
                        <VisibleDiv visible={!this.props.isDailyPictureUploaded}>
                            <PictureForm picture={this.state.pictureToUpload}
                                         onSubmit={this.onSubmit}
                                         onPictureSelected={this.onPictureSelected}
                                         isUploadingPicture={this.props.isAjaxLoading}
                                         onCaptionInputChangeHandler={this.onCaptionInputChangeHandler}/>
                        </VisibleDiv>

                        {DailyPicture}
                    </PictureSection>
                </VisibleDiv>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        ...state.picture,
        isAjaxLoading: state.common.isAjaxLoading
    }
}

export default connect(mapStateToProps)(HomePage);