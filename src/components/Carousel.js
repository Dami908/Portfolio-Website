import React from 'react';

import Card from '../components/Card';

import devgrub from '../assets/images/blanc.png';
import youtube from '../assets/images/mypic.JPG';
import evverest from '../assets/images/Creative.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Zorod',
                    subTitle: 'Interactive top down shooter arcade themed',
                    subTitle2:'game developed for play on most web platforms',
                    imgSrc: devgrub,
                    link: 'https://simmer.io/@Dami987/zorod',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Emmanuel Ajayi',
                    subTitle: 'Linkedin Profile',
                    imgSrc: youtube,
                    link: 'https://www.linkedin.com/in/emmalare?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2Bcp0Q2eFRlOOtaNDFyg84Q%3D%3D',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Estore Web Application',
                    subTitle: 'A Demo Web Application made for online shopping.',
                    imgSrc: evverest,
                    link: 'https://github.com/Dami908/Estore-web-application',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;