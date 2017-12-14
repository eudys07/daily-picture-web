import React from 'react';
import styled from 'styled-components';
import {MediaBox} from "react-materialize";

const CarouselWrapper = styled.div`
    width: 100%;
    height: 130px;
    
    border: 1px;
    border-color: rgba(0, 0, 0, 0.3);
    border-style: solid;
    border-radius: 4px;
    overflow-x:scroll;
    white-space: nowrap;
    background-color: #f9f9f9;
`;

const PictureWrapper = styled.div`
    width: 100px;
    height: 100px;
    position: relative;
    top: 14px;
    display: inline-block;
    margin-left: 25px;
    margin-right: 25px;
    cursor: pointer;

    img {
        box-shadow: -0.3px -0.3px 5px rgba(0, 0, 0, 0.5);
        border-radius: 3px;
        transition: all .5s;
    }

    &:hover img{
        transform: scale(1.1, 1.1);
    }
`;

const PictureCarousel = ({pictures}) => {
    return (
        <div>
            <CarouselWrapper>
                {pictures.map((picture, idx) => (
                    <PictureWrapper key={idx}>
                        <img src={`${process.env.API_URL}/${picture.path_url}`}  width="120" height="100" />
                    </PictureWrapper>
                ))}
            </CarouselWrapper>
        </div>
    )
};

export default PictureCarousel;