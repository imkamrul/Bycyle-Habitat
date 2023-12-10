import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useHistory } from "react-router";
import { BASE_URL } from "../../../utils/BaseUrl";
import "./Product.css";
const Products = () => {
  const [allProducts, setAllProducts] = useState({});
  const history = useHistory();
  const getData = async () => {
    try {
      const result = await axios.get(`${BASE_URL}/products?search=6`);

      setAllProducts(result.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const handleProductBuy = (id) => {
    history.push(`/productBuy/${id}`);
  };
  const handleCyclePage = () => {
    history.push("/cycles");
  };

  const [filterData, setFilterData] = useState([])
  useEffect(() => {
    setFilterData(allProducts)
  }, [
    allProducts
  ])
const [searchName,setSearchName]= useState("")
const handleSearch= ()=>{
  const  result = allProducts?.filter((item)=> item?.name.toLowerCase().includes(searchName?.toLowerCase()))
  setFilterData(result)
  
}
  return (
    <Container className="my-5">
      <Row>
        <Col sm={12}>
          <h4 className="fs-3 my-3">
            FEATURED <span className="text-warning">PRODUCTS</span>
          </h4>
        </Col>
        <Col sm={12} md={6} className="mx-auto">
          <div class="input-group mb-3 col-6 mx-auto" >
            <input type="text"
          
            onChange={(e)=>{setSearchName(e.target.value)}}
            class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div
            role="button"
            class="input-group-append" onClick={()=>handleSearch()}>
              <span class="input-group-text" id="basic-addon2">Search</span>
            </div>
          </div>
        </Col>
      </Row>
      <Row xs={1} md={3} className="g-4">
        {filterData.length ? (
          filterData.map((product) => (
            <Col key={product._id}>
              <Card className="bg-light product-background">
                <Card.Img
                  variant="top"
                  src={product.img}
                  className="px-5 pt-3"
                  style={{ height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <p className="fs-5 mb-0">
                    Price : <span className="fw-bold">{product.price} </span>Tk{" "}
                  </p>
                  <Card.Text>{product.description.slice(0, 127)}.</Card.Text>
                  <Button
                    variant="dark"
                    onClick={() => handleProductBuy(product._id)}
                  >
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div>
            {" "}
            <Spinner animation="border" variant="dark" />
          </div>
        )}
      </Row>
      <Button variant="warning" className="my-3" onClick={handleCyclePage}>
        Explore More
      </Button>
    </Container>
  );
};

export default Products;
