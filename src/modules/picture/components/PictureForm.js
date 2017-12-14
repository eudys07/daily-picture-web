import React from "react";
import NoPictureUploaded from "./NoPictureUploaded";
import styled from 'styled-components';

const UploadPictureSection = styled.div`
    cursor: pointer;
    visibility: ${props => props.visible ? 'visible' : 'hidden'}
`;

class PictureForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visibleUploadPicture: true
        }
    }

    onClickUploadPictureHandler = (e) => {
        this.fileInput.click();
    };

    onChangeInputFile = () => {
        if(!this.state.visibleUploadPicture)
            return;

        this.setState({
            visibleUploadPicture: false
        })
    };

    render() {
        return (
            <form action="">
                <UploadPictureSection visible={this.state.visibleUploadPicture}>
                    <NoPictureUploaded className="center" onClick={this.onClickUploadPictureHandler}
                                       title="Click here to upload your daily picture !"/>

                    <div className="hide">
                        <input type="file"
                               onChange={this.onChangeInputFile}
                               ref={(input) => {
                                   this.fileInput = input;
                               }}/>
                    </div>

                </UploadPictureSection>
            </form>
        )
    }
}

export default PictureForm;