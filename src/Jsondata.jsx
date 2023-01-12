import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  Container  from "react-bootstrap/Container";

function Jsondata() {
    const [isOpen,setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
 
  const [data, setData] = useState([
    {
      id: 1,
      Image: "https://m.media-amazon.com/images/I/71cFpnm0b6S._AC_UL320_.jpg",
      Title: "LookMark",
      ShortDescription:
        "Men's Poly Cotton Digital Printed Stitched Half Sleeve Shirt",
      Currency: "₹",
      OfferPrice: "349",
      OrignalPrice: "1,199",
      DiscountPercentage: "(71% off)",
      DeliveryDetails: "FREE Delivery on first order.",
    },
    {
      id: 2,
      Image: "https://m.media-amazon.com/images/I/61WrmjKbNzS._AC_UL320_.jpg",
      Title: "Dennis Lingo",
      ShortDescription: "Men Shirt",
      Currency: "₹",
      OfferPrice: "499",
      OrignalPrice: "₹1,849",
      DiscountPercentage: "(73% off)",
      DeliveryDetails: "FREE Delivery by Amazon",
    },
    {
      id: 3,
      Image:
        "https://m.media-amazon.com/images/I/61gA0Y0m9mL._AC_UL640_FMwebp_QL65_.jpg",
      Title: "Amazon Brand - Symbol",
      ShortDescription: "Men's Regular Shirt",
      Currency: "₹",
      OfferPrice: "599",
      OrignalPrice: "₹1,199",
      DiscountPercentage: "(50% off)",
      DeliveryDetails: "FREE Delivery by Amazon",
    },
    {
      id: 4,
      Image:
        "https://m.media-amazon.com/images/I/81vuqr1DAtL._AC_UL640_FMwebp_QL65_.jpg",
      Title: "Diverse",
      ShortDescription: "Men's Regular Fit Formal Shirt",
      Currency: "₹",
      OfferPrice: "459",
      OrignalPrice: "₹1,199",
      DiscountPercentage: "(62% off)",
      DeliveryDetails: "FREE Delivery on first order.",
    },
    {
      id: 5,
      Image:
        "https://m.media-amazon.com/images/I/61mI3QmECUL._AC_UL640_FMwebp_QL65_.jpg",
      Title: "LookMark",
      ShortDescription:
        "Men's Poly Cotton Digital Printed Stitched Half Sleeve Shirt",
      Currency: "₹",
      OfferPrice: "349",
      OrignalPrice: "1,199",
      DiscountPercentage: "(71% off)",
      DeliveryDetails: "FREE Delivery on first order.",
    },
    {
      id: 6,
      Image:
        "https://m.media-amazon.com/images/I/61FleZG8eFL._AC_UL640_FMwebp_QL65_.jpg",
      Title: "Dennis Lingo",
      ShortDescription: "Men Shirt",
      Currency: "₹",
      OfferPrice: "499",
      OrignalPrice: "₹1,849",
      DiscountPercentage: "(73% off)",
      DeliveryDetails: "FREE Delivery by Amazon",
    },
    {
      id: 7,
      Image:
        "https://m.media-amazon.com/images/I/71tSKgHy3QL._AC_UL640_FMwebp_QL65_.jpg",
      Title: "Amazon Brand - Symbol",
      ShortDescription: "Men's Regular Shirt",
      Currency: "₹",
      OfferPrice: "599",
      OrignalPrice: "₹1,199",
      DiscountPercentage: "(50% off)",
      DeliveryDetails: "FREE Delivery by Amazon",
    },
    {
      id: 8,
      Image:
        "https://m.media-amazon.com/images/I/61YQ-ougFVL._AC_UL640_FMwebp_QL65_.jpg",
      Title: "Diverse",
      ShortDescription: "Men's Regular Fit Formal Shirt",
      Currency: "₹",
      OfferPrice: "459",
      OrignalPrice: "₹1,199",
      DiscountPercentage: "(62% off)",
      DeliveryDetails: "FREE Delivery on first order.",
    },
  ]);
const[searchTerm,setSearchTerm] = useState('')
const[searchResult,setSearchResult]=useState(data)
const[sort,setSort] = useState('')
const handleSearch = e =>{
setSearchTerm(e.target.value)
const results = data.filter (item =>
    item.Title.toLowerCase().includes(searchTerm.toLowerCase()))
setSearchResult(results)


}
const handleSort = e => {
    setSort(e.target.value);
    let sortedResults;
    if(e.target.value === 'low'){
        sortedResults = searchResult.sort((a, b) => a.OfferPrice - b.OfferPrice);
    }else{
        sortedResults = searchResult.sort((a, b) => b.OfferPrice - a.OfferPrice);
    }
    setSearchResult(sortedResults);
  };


  return (
    <Row>
      <Col className="bg-danger" md={2} xs={12}>
        <label>SEARCH</label>
        <input
          placeholder="Enter your Text"
          onChange={handleSearch}
          className="inputs"
        />
        
      {/* <input typr='password' /> */}
        {/* CHECKBOX */}
        <Navbar bg="danger"  expand="lg">
            <Container className="toggles">
            <Navbar.Toggle className="togglebutton" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
        <select onChange={handleSort}>
        <option value="">Sort</option>
        <option value="low">Price Low to High</option>
        <option value="high">Price High to Low</option>
      </select>

      </Nav>
    </Navbar.Collapse>
     </Container>
      </Navbar>
      </Col>
      <Col md={10} xs={12} className="container d-flex gap-3">
        {searchResult.map((data, i) => (
          <Card key={i} className="card" >
            <Card.Img
              className="pics img-fluid "
              variant="top"
              src={data.Image}
            />
            <Card.Body>
              <Card.Title className="title">{data.Title}</Card.Title>
              <Card.Text>
                <span className="shortdescription">
                  {data.ShortDescription}
                </span>

                <br />
                <span className="currency">{data.Currency}</span>
                <span className="display-6 offerprice">{data.OfferPrice}</span>
                <span>
                  <del>{data.OrignalPrice}</del>
                  {data.DiscountPercentage}
                  <br />

                  {data.DeliveryDetails}
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Col>
    </Row>
  );
}
export default Jsondata;
