import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchForm = ({ handleOnSubmit, searchTerm, handleOnChange }) => {
  return (
    <>
      <div className="search">
        <Form onSubmit={handleOnSubmit} className="form">
          <FormControl
            className="form"
            type="text"
            placeholder="Search for a moive"
            value={searchTerm}
            onChange={handleOnChange}
          />

          <Button
            className="btn"
            variant="outline-info"
            onClick={handleOnSubmit}
          >
            <a href="#playingnow">Search</a>
          </Button>
        </Form>
      </div>
    </>
  );
};

export default SearchForm;
