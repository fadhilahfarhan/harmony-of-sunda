import React from 'react';
import { Container, Col, Button } from 'react-bootstrap';
import './Player.css';
import musicImage from '../../assets/images/main/musicimg.jpg'

const Player = () => {
    return (
        <>
        <Container>
            <h1 className='text-center mt-3 mb-3'>Lagu Tradisional Sunda</h1>
            <Col className='mt-3 mb-3'>
                <div className='player'>
                    <div className='imgbox'>
                        <img src={musicImage} alt='poster lagu'></img>
                    </div>
                    <div className='card-content text-center'>
                        <h3 className='card-title'>Song Title</h3>
                        <audio src='' type="audio/mp3" controls></audio>
                        <Button variant='primary' className='more-button'>More</Button>
                    </div>
                </div>
            </Col>
        </Container>
        </>
    )

}

export default Player;