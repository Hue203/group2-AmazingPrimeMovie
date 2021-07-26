import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchForm = ({ handleOnSubmit, searchTerm, handleOnChange }) => {
  return (
    <div>
      <div className="search">
        <Form onSubmit={handleOnSubmit} className="form">
          <div>
            <FormControl
              className="form"
              type="text"
              placeholder="Search for a moive"
              value={searchTerm}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <Button
              className="btn"
              variant="outline-info"
              onClick={handleOnSubmit}
            >
              <a href="#playingnow">Search</a>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SearchForm;
