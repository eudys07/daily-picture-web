import React from "react";
import NoPictureUploaded from "./NoPictureUploaded";
import styled from 'styled-components';

const UploadPictureSection = styled.div`
    cursor: pointer;
    display: ${props => props.visible ? 'block' : 'none'}
`;

const SelectedPictureSection = styled.div`
    display: ${props => props.visible ? 'block' : 'none'};
`;

const TextareaSection = styled.div`
    width: 700px;
    margin: 0 auto;
`;

class PictureForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visibleSelectPicture: true,
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
        if(!this.state.visibleSelectPicture)
            return;

        this.setState({
            visibleSelectPicture: false,
            selectedPictureUrl: URL.createObjectURL(evt.target.files[0])
        })
    };

    resetForm = () => {
        this.setState({
            visibleSelectPicture: true,
            selectedPictureUrl: ''
        });
    };

    render() {
        return (
            <form>
                <UploadPictureSection visible={this.state.visibleSelectPicture}>
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
                
                <SelectedPictureSection className="center" visible={!this.state.visibleSelectPicture}>
                    <img className="responsive-img" src={this.state.selectedPictureUrl} width="700"/>

                    <br/>
                    <br/>

                    <div className="row">
                        <div className="col s12">
                            <div className="row">
                                <TextareaSection className="input-field">
                                    <textarea
                                        id="caption"
                                        placeholder="Enter caption here..."
                                        className="materialize-textarea"
                                        data-length="120"/>
                                    <br/>
                                    <label htmlFor="caption">Caption</label>
                                </TextareaSection>
                            </div>

                            <button onClick={this.resetForm} className="btn waves-effect waves-light white black-text" type="button" name="action">Cancel
                                <i className="material-icons right">send</i>
                            </button>
                            <span> </span>
                            <button className="btn waves-effect waves-light blue" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </SelectedPictureSection>
            </form>
        )
    }
}

export default PictureForm;