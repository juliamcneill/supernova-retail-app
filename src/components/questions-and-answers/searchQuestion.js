import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { searchState } from "./qa-atoms";
import { useRecoilState } from "recoil";

const SearchQuestion = (props) => {
  const [search, setSearch] = useRecoilState(searchState);

  return (
    <Form.Group controlId="search-form">
      <Form.Label class="hidden">Search for questions</Form.Label>
      <Form.Control
        type="search"
        name="search"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        title="Search for questions"
        maxLength={60}
        value={search}
        tabIndex="0"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </Form.Group>
  );
};

export default SearchQuestion;
