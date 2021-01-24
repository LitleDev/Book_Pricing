import React, { Component } from 'react';
import axios from 'axios';
import {
    Row,
    Navbar,
    Nav,
    NavItem,
    NavLink,
    Col,
    CardBody,
    CardSubtitle,
    CardText,
    NavbarText,
    Input,Card,CardImg,CardTitle,Button
  } from 'reactstrap';

class Search extends Component {
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

    onchange(event) {
        this.setState({ search : event.target.value });
    }
    render() {
        let filterdedBooks = this.props.book;
        // let filterdedBooks = this.props.book.filter( 
        //     (book) => {
        //         return book.title.indexOf(this.state.search) !== -1;
        //     }
        // );

        return (
            <div>
                <Navbar color="light" light expand="md">
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                        <NavLink>Search</NavLink>
                        </NavItem>
                        <Input label= "Book Search" icon ="search" onChange={this.onchange.bind(this) }/>
                    </Nav>
                    <NavbarText>Sortable list</NavbarText>
                </Navbar>

                <hr/>

                { filterdedBooks.map(book =>
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
                                        <CardText>{book.average_rating}</CardText>
                                        <CardText>Price - {book.price} /=</CardText>
                                        <Button>Buy</Button>
                                    </CardBody>
                            </Card>
                        </Col>
                    </Row>)
                }                    
            </div>
        );
    }
}

export default Search;  