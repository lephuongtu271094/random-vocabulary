import React from 'react'
import { BackBtn } from 'components';
import DataDetailTopicVocabulary from '../../data/data-topic-vocabulary';
import { Row, Col } from 'antd';
import './style.css';

class EDetailTopicVocabulary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataItem: [],
            title: ''
        }
    }

    componentDidMount() {
        const { match: { params: { topic } } } = this.props;
        const { vocabulary, title } = DataDetailTopicVocabulary[topic]
        this.setState({ dataItem: vocabulary, title })
    }

    useAudio = url => {
        const audio = new Audio(`${process.env.PUBLIC_URL}/sound/${url}`);
        audio.play()
    }

    render() {
        return (
            <>
                <BackBtn path="/english/topic-vocabulary" ></BackBtn>
                <div>
                    <h1>{this.state.title.toUpperCase()}</h1>

                    <Row gutter={10} style={{

                    }}>
                        {this.state.dataItem.map((item, index) =>
                            <Col className="gutter-row" key={index} span={4}>
                                <div className="box" span={4} onClick={() => this.useAudio(item.sound)}>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/${item.image.replace(/%/gi, '')}`}
                                        alt=""
                                    />
                                    <div>
                                        <h2>{item.en}</h2>
                                        <p>{item.pronounce}</p>
                                        <h3>{item.vi}</h3>
                                        <p>Ex: {item.example}</p>

                                    </div>
                                </div>
                            </Col>
                        )}
                    </Row>
                </div>
            </>
        )
    }
}

export default EDetailTopicVocabulary;