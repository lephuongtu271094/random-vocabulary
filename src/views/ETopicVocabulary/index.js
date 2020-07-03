import React from 'react'
import { BackBtn } from 'components';
import { Button } from 'antd';
import topicVocabulary from '../../data/topic-vocabulary-select.json'
import { Link } from 'react-router-dom';

const ETopicVocabulary = () => {
    return (
        <div>
            <BackBtn path="/english" ></BackBtn>
            <div>
                {topicVocabulary.map(ele => <Link to={'/topic-vocabulary/' + ele.id}> <Button
                    style={{
                        "margin": "25px",
                        "boxShadow": "0px 0px 41px 5px rgba(0,0,0,1)",
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