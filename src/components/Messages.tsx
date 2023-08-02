import React, {FC} from 'react';
import {DataTwoType} from "../App";
import {message} from "antd";

type MessagesType = {
    data2: DataTwoType[]
}

export const Messages: FC<MessagesType> = (props) => {
    const {data2} = props
    return (
        <div className={"message"}>
            {data2.map( (el) => {
                return(
                   <ul key={el.id} >
                       <li>{el.name}</li>
                       <li>{el.message}</li>
                   </ul>
                )
            })}
        </div>
    );
};

