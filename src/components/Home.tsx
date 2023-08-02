import React, {FC} from 'react';
import {DataOneType} from "../App";


type HomePropsType = {
   data1: DataOneType
}

export const Home: FC<HomePropsType> = (props) => {
    const {data1} = props


    return (
        <div>
        <h1>Home</h1>
            <div>{data1.image}</div>
            <div>{data1.button}</div>
        </div>
    );
};

