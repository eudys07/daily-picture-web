import React from 'react';
import picture from '../../../../assets/images/no_picture_uploaded.jpg';
import styled from 'styled-components';

const Title = styled.h4`
    color: #a7a7a7;
`;

const NoPictureUploaded = ({className, title, onClick}) => {
    return (
        <div className={className} onClick={onClick}>
            <Title >{title}</Title >
            <img src={picture} alt="" width="450" className="responsive-img"/>
        </div>
    )
};

export default NoPictureUploaded;