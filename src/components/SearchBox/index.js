import { wait } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Col,
  Row,
} from "react-bootstrap";

import "./style.css";
const API_KEY = process.env.REACT_APP_API_KEY;

const SearchBox = () => {
  const [searchInput, setSearchInput] = useState("Search...");
  const [query, setQuery] = useState("");

  //useEffect = (() =>{
  const getData = async () => {
    let url;
    if (query) {
      url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
    } else {
      url = `https://api.themoviedb.org/3/search/collection?api_key=${API_KEY}&language=en-US&page=1`;
    }
    const data = await fetch(url);
    const result = await data.json();
  };
  getData();
  //}, [query]);

  const confirmSearch = () => {
    setQuery(searchInput);
  };

  const handleInput = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  return (
    <Container>
      <Row className="search_box content">
        <Col>
          <InputGroup>
            <FormControl value={searchInput} onChange={handleInput} />
            <Button onClick={confirmSearch}>Search</Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBox;
