import React from 'react'
import { BackBtn } from 'components';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import data from '../../data/3000.json'
import { useLocation } from 'react-router-dom'

const columns = [
    {
        title: 'Stt',
        dataIndex: 'stt',
        width: 150,
    },
    {
        title: 'Word',
        dataIndex: 'word',
        width: 150,
    },
    {
        title: 'Type',
        dataIndex: 'type',
        width: 150,
    },
    {
        title: 'Pronounce',
        dataIndex: 'pronounce',
        width: 150,
    },
    {
        title: 'Meaning',
        dataIndex: 'meaning',
        width: 400,
    },
];

class EVocabulary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataView: []
        }
        // this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        this.setState({ dataView: data.slice(0, 30) })
        var timer = null;
        if (this.props.location.pathname === '/english/vocabulary') {
            window.addEventListener('scroll', (event) => {
                if (timer !== null) {
                    clearTimeout(timer);
                }
                timer = setTimeout(() => {
                    return this.handleScroll(event)
                }, 100);
            }, true);
        }

    }

    componentWillUnmount() {
        console.log('asbdhj')
        const s = this
        window.removeEventListener('scroll', null, true);
        console.log('concac dai 18cm')
    };

    handleScroll = (event) => {
        console.log(typeof event)

        const tableOffsetLeft = document.getElementsByClassName('table-wrapper')[0].offsetLeft
        const tableOffsetTop = document.getElementsByClassName('table-wrapper')[0].offsetTop
        const itemTable = document.elementFromPoint(tableOffsetLeft, tableOffsetTop + 56)
        const pointElement = Number(itemTable.innerHTML)
        const heightOfItem = itemTable.offsetHeight
        if (pointElement > 10) {
            this.setState({ dataView: data.slice(pointElement - 9, pointElement + 20) })
            if (tableOffsetTop > 300) {
                return event.srcElement.scrollTop = tableOffsetTop + (heightOfItem * 2)
            }
            if (tableOffsetTop < 100) {
                return event.srcElement.scrollTop = tableOffsetTop + ((heightOfItem * 7) - 20)
            }
            event.srcElement.scrollTop = tableOffsetTop + (heightOfItem * 5)
        }
    };
    render() {
        return (
            <div >
                <BackBtn path="/english" ></BackBtn>
                <h1 style={{
                    "color": "#fff",
                    "marginBottom": "30px",
                    "fontWeight": 700
                }}>3000 Vocabulary</h1>
                <div className="table-wrapper" style={{
                    "width": "95%",
                    "margin": "auto"
                }}>
                    <Table columns={columns} position='sticky' dataSource={this.state.dataView} scroll={{ y: 600 }} pagination={false} rowKey="stt" />,
                </div>
            </div>
        )
    }
}

export default EVocabulary;