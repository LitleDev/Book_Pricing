import React, { Component } from 'react';
import axios from 'axios';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Input, Row,
    Navbar,Nav,NavItem,NavLink,NavbarText
 } from 'reactstrap';

import { FaStar} from 'react-icons/fa';

class Dataload extends Component {

    state = {
        book : [],
        search: ""
    }

    componentDidMount () {
        axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json')
        .then (res => {
            const book = res.data;
            this.setState({ book });
        });
    }
    onchange = e =>{
        this.setState({ search : e.target.value});
    }
    renderbook = book => {
        const {search} = this.state;
        // let filterdedBooks = this.props.book.filter( 
        //     (book) => {
        //         return book.title.indexOf(this.state.search) !== -1;
        //     }
        // );

        if (search !== "" && book.title.indexOf(this.state.search.toLowerCase()) === -1 ){
            return null
        }
        return <div>
            { this.state.book.map(book =>
                    <Row>
                        <Col sm="3">
                            <Card>
                                <CardImg>
                                    </CardImg> 
                                    <CardBody>
                                        <CardTitle tag="h5">{book.title}</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">{book.authors}</CardSubtitle>
                                    </CardBody>
                                    <CardBody>
                                        <CardText>BookCode {book.isbn}</CardText>
                                        <CardText>Language {book.language_code}</CardText>
                                        <CardText>  
                                            {[ ... Array(5)].map((star)=> {
                                                return <FaStar size={50}
                                                        color={"#ffc107"}
                                                    />
                                            })}
                                            <CardText>
                                                {book.average_rating}
                                            </CardText>
                                            
                                        </CardText>
                                        <CardText>Price - {book.price} /=</CardText>
                                        <Button>Buy</Button>
                                    </CardBody>
                            </Card>
                        </Col>
                    </Row>)}

        </div>
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                        <NavLink>Search</NavLink>
                        </NavItem>
                        <Input label= "Book Search" icon ="search" onChange={this.onchange.bind(this) }/>
                    </Nav>
                    <NavbarText>
                        <Button>My Cart</Button>
                    </NavbarText>
                </Navbar>
                    {/* { this.state.book.map(book => 
                    <li>
                        {book.bookID,book.title}
                    </li>
                    )} */}

                    <div className="row">
                        {
                            this.renderbook()
                            }

                    </div>
                    
            </div>
        );
    }
}

export default Dataload;

