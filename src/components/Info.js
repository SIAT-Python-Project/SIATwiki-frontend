import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const InfoHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

const MyBtn = styled.button`
    border: none;
    background-color: white;
`;

export default function Info({ data }) {

    const navigate = useNavigate();



    return (
        <>
            <InfoHeader>
                <h2>{data.category}</h2>
                <MyBtn onClick={() => navigate(`/info/update/${data.id}`)}> [ 수정 ] </MyBtn>
            </InfoHeader>
            <hr />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {data.content}
            </ReactMarkdown>
        </>
    )
}
