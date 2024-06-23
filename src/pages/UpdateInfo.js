import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Headers from '../components/Headers';
import { useParams, useNavigate } from "react-router-dom";
import { fetchSingleInfo, updateInfo } from '../api/FetchInfo';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import '../css/markdown.css'
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/a11y-dark.css";
import rehypeRaw from "rehype-raw";

const MainPageWrapper = styled.div`
  width: 100%;
  background: #cecece;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'bmdohyeon';
  font-size: 2.5vmin;
  overflow-x:auto;
  @media screen and (max-width: 768px) {
    font-size: 4vmin;
  }
  
`;

const UpdateContainer = styled.div`
  background: white ;
  padding: 10px;
  margin: 0 auto;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.div`
  position: relative;
  background: blue;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  width:60vw;
  margin-top:30px;
  @media screen and (max-width: 768px) {
    flex-direction:column;
  }
`;

const UpdateHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

const RanderingBtn = styled.button`
    border: none;
    background-color: white;
    font-weight: bold;
    font-size: 1em;
`;

const UpdateForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const UpdateTextArea = styled.textarea`
    width: 90%;
    border: 1;
    overflow: visible;
    text-overflow: ellipsis;
    resize: none;
    background-color: rgb(245, 245, 245);
    border: 1px solid rgb(235, 235, 235);
    padding: 7px;
    font-family: 'Noto Sans KR', sans-serif;
`;

const UpdateBtn = styled.button`
    width: 40%;
    margin-top: 10px;
`;

function UpdateInfo() {
    const params = useParams();
    const [info, setInfo] = useState({ category: "", content: "" });
    const [markdwon, setMarkdwon] = useState("");
    const textarea = useRef();
    const navigate = useNavigate();


    const UpdateInfoHandler = (e) => {
        e.preventDefault();
        updateInfo(params.infoId, {
            content: textarea.current.value
        }).then((data) => {
            navigate(`/person/${data.personId}`)
        }).catch(error => alert(error.response.data.message));
    }

    useEffect(() => {
        const data = fetchSingleInfo(params.infoId);
        data.then((result) => setInfo(result));
    }, []);

    return (
        <div>
            <Headers />
            <MainPageWrapper>
                <Container>
                    <UpdateContainer>
                        <UpdateHeader>
                            <h2>
                                {info.category}
                            </h2>
                            <RanderingBtn onClick={() => setMarkdwon(textarea.current.value)}> [ 랜더링 ] </RanderingBtn>
                        </UpdateHeader>
                        <UpdateForm onSubmit={UpdateInfoHandler}>
                            <UpdateTextArea ref={textarea} cols={135} rows={25} defaultValue={info.content}></UpdateTextArea>
                            <UpdateBtn type='submit'>수정</UpdateBtn>
                        </UpdateForm>

                        <hr />
                        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight, rehypeRaw]}>
                            {markdwon}
                        </ReactMarkdown>
                    </UpdateContainer>
                </Container>
            </MainPageWrapper>
        </div>
    );
}

export default UpdateInfo;
