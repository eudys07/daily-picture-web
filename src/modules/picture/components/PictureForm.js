import React from "react";
import NoPictureUploaded from "./NoPictureUploaded";
import styled from 'styled-components';

const UploadPictureSection = styled.div`
    cursor: pointer;
    display: ${props => props.visible ? 'block' : 'none'}
`;

const SelectedPictureSection = styled.div`
    display: ${props => props.visible ? 'block' : 'none'}
`;

const TextareaSection = styled.div`
    width: 700px;
    margin: 0 auto;
`;

class PictureForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visibleUploadPicture: true,
            selectedPictureUrl: ''
        }
    }

    componentDidMount(){
        $('#caption').characterCounter();
    }

    onClickUploadPictureHandler = (e) => {
        this.fileInput.click();
    };

    onChangeInputFile = (evt) => {
        if(!this.state.visibleUploadPicture)
            return;

        this.setState({
            visibleUploadPicture: false,
            selectedPictureUrl: URL.createObjectURL(evt.target.files[0])
        })
    };

    render() {
        return (
            <form>
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
                
                <SelectedPictureSection className="center" visible={!this.state.visibleUploadPicture}>
                    <img src={this.state.selectedPictureUrl} width="700"/>

                    <br/>
                    <br/>

                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <TextareaSection className="input-field">
                                    <textarea
                                        id="caption"
                                        className="materialize-textarea"
                                        data-length="120"/>
                                    <br/>
                                    <label htmlFor="caption">Caption</label>
                                </TextareaSection>
                            </div>

                            <button className="btn waves-effect waves-light blue" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>

                            <button className="btn waves-effect waves-light blue" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </form>
                    </div>
                </SelectedPictureSection>
            </form>
        )
    }
}

export default PictureForm;