import React from 'react'
import { BackBtn } from 'components';
import { Button } from 'antd';
import topicVocabulary from '../../data/topic-vocabulary-select.json'
import { Link } from 'react-router-dom';

const ETopicVocabulary = () => {
    return (
        <div style={{height: "100vh"}}>
            <BackBtn path="/english" ></BackBtn>
            <h1 style={{
                    "color": "#fff",
                    "margin": "30px",
                    "fontWeight": 700
                }}>3000 Topic Vocabulary</h1>
            <div style={{
                      "margin": "auto",
                      "marginTop": "50px"
                    }}>
                        
                {topicVocabulary.map((ele, index) => <Link to={'/english/topic-vocabulary/' + ele.id} key={index}> <Button
                    style={{
                        "margin": "25px",
                        // "boxShadow": "0px 0px 41px 5px rgba(0,0,0,1)",
                        boxShadow: "0px 0px 16px 0px rgb(173, 168, 168)", 
                        "fontWeight": 700
                    }}
                    type="primary"
                    shape="round"
                    size={'large'} >
                    {ele.title}
                </Button></Link>)
                }
            </div>
        </div>
    )
}

export default ETopicVocabulary;