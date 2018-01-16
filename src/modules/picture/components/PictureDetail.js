import React from 'react';
import styled from 'styled-components';
import ResponsiveImage from "./ResponsiveImage";

const DailyPicttureSection = styled.div`
    border-top: 0;
    border-right: 1px;
    border-left: 1px;
    border-bottom: 1px;
    border-color: rgba(0, 0, 0, 0.3);
    border-style: solid;
    padding-bottom: 10px;
    width: 700px;
    margin: 0 auto;
`;

const PictureDetail = ({picture}) => {
    return (
        <DailyPicttureSection className="">
            <ResponsiveImage imageUrl={`${process.env.API_URL}/${picture.path_url}`}/>
            <p>
                {picture.caption}
            </p>
        </DailyPicttureSection>
    )
};

export default PictureDetail;

