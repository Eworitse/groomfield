import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import soundMind from '../images/sound-mind.jpg';
import excellence from '../images/excellence.jpg';
import skills from '../images/skills.jpg';
import community from '../images/community.jpg';

const Wrap = styled.div`
background-color: #EEE;
margin-top: 60px;
padding: 0px;
position: relative;
`;

const ReasonContainer = styled(Container)`
display: flex;
padding: 40px 0px;
flex-direction: column;
justify-content: center;
position: relative;
`;

const Title = styled.h1`
font-size: 2em;
font-weight: bold;
text-decoration: center;
padding: 0px;
margin: 0px auto;
font-family: 'Roboto Slab', serif;
`;

const Subtitle = styled.p`
font-size: 1em;
font-weight: bold;
font-family: 'Roboto Slab', serif;
text-decoration: center;
color: #555;
padding: 0px;
margin: 0px auto;
`;

const Boxes = styled.div`
margin-top: 40px;
display: flex;
position: relative;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`;

const ReasonBox = styled.div`
width: 200px;
margin: 10px;
`;

const ImageBox = styled.div`
width: 200px;
height: 100px;
position: relative;
overflow: hidden;
`;

const ReasonText = styled.div`
padding: 20px;
width: 200px;
height: 200px;
background-color: white;
text-align: center;
`;

const Text = styled.p`
font-size: ${props => props.subtext === "true" ? "0.9em" : "1em"};
color: ${props => props.subtext === "true" ? "#777" : "black"};
`;

const ActionButton = styled.a`
padding: 10px 15px;
margin: 10px auto;
font-size: 2em;
background-color: rgb(222, 4, 114);
color: white;
font-family: 'Roboto Slab', serif;

&:hover{
    background-color: rgb(246, 28, 140);
    text-decoration: none;
    color: white;
}
`;

export default function Reasons(props) {
    return(
        <Wrap>
            <ReasonContainer>
                <Title>HERE IS WHY</Title>
                <Subtitle>You Can Trust Us</Subtitle>
                <Boxes>
                    <ReasonBox>
                        <ImageBox><img src={excellence} alt="academics" /></ImageBox>
                        <ReasonText>
                            <Text>Academic Excellence</Text>
                            <Text subtext="true">We equip our learners with all they need to excel in their studies</Text>
                        </ReasonText>
                    </ReasonBox>
                    <ReasonBox>
                        <ImageBox><img src={soundMind} alt="academics" /></ImageBox>
                        <ReasonText>
                            <Text>Groom Sound Mind</Text>
                            <Text subtext="true">At Groomfield, we believe education is not complete unless the child can think logically</Text>
                        </ReasonText>
                    </ReasonBox>
                    <ReasonBox>
                        <ImageBox><img src={skills} alt="build skills" /></ImageBox>
                        <ReasonText>
                            <Text>Build Lifelong Skills</Text>
                            <Text subtext="true">We build skills that are needed beyond the classroom</Text>
                        </ReasonText>
                    </ReasonBox>
                    <ReasonBox>
                        <ImageBox><img src={community} alt="be a part of a wonderful community" /></ImageBox>
                        <ReasonText>
                            <Text>community & Collaboration</Text>
                            <Text subtext="true">Groomfield is a wonderful community of refined people</Text>
                        </ReasonText>
                    </ReasonBox>
                </Boxes>
                <ActionButton href="/">Join Us</ActionButton>
            </ReasonContainer>
        </Wrap>
    );
}