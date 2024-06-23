import React from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import '../css/markdown.css'
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/a11y-dark.css";
import rehypeRaw from "rehype-raw";

const InfoHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

const MyBtn = styled.button`
    border: none;
    background-color: white;
    cursor:pointer;
    color:grey;
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
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight, rehypeRaw]}>
                {data.content}
            </ReactMarkdown>
        </>
    )
}
