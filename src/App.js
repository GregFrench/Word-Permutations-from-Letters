import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import wordsToCountsToWordsMap from './helpers/wordsToCountsToWordsMap';
import letterCombinations from './helpers/letterCombinations';
import wordToCountArr from './helpers/wordToCountArr';

function App() {
  const NUM_LETTERS = 12;
  const initCompletedRef = useRef(false);
  const inputRefs = useRef([]);
  const letterCountsMapRef = useRef({});
  const [letters, setLetters] = useState([]);
  const [results, setResults] = useState([]);

  const initDictionary = () => {
    fetch('./data/words_dictionary.json')
      .then(response => response.json())
      .then(data => {
        letterCountsMapRef.current = wordsToCountsToWordsMap(Object.keys(data))
      })
      .catch(error => console.error(error));
  }

  const initLetters = () => {
    const arr = new Array(NUM_LETTERS);

    arr.fill("");

    setLetters(arr);
  }

  const initInputRefs = () => {
    inputRefs.current = Array(NUM_LETTERS).fill().map((_, i) => inputRefs.current[i] || React.createRef());
  };

  const resetLetters = () => {
    initLetters();
  }

  const getCombinations = () => {
    const word = letters.join('');

    const combinations = letterCombinations(word);

    return combinations;
  };

  const sortStrings = (arr) => {
    return arr.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        }

        return a.length - b.length;
    });
  }

  const getResults = (combinations) => {
    let res = [];

    for (let i = 0; i < combinations.length; ++i) {
      const combination = combinations[i];

      const letterCounts = wordToCountArr(combination);

      res = res.concat(letterCountsMapRef.current[letterCounts.toString()]);
    }

    res = sortStrings(res);

    return res;
  };

  const handleChange = (e, i) => {
    const arr = [...letters];
    let value = e.target.value.toLowerCase();

    if (value.length === 1 && i < NUM_LETTERS - 1) {
      inputRefs.current[i + 1].current.focus();
    }

    value = value.toLowerCase();

    arr[i] = value;

    setLetters(arr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const combinations = getCombinations();
    const res = getResults(combinations);

    setResults(res);
  }

  const createForm = () => {
    let form = []

    for (let i = 0; i < letters.length; i++) {
      form.push(
        <Col lg={1} md={1} sm={2} xs={2} key={i}>
          <Form.Control
            className="input"
            type="text"
            name="letter[]"
            size="1"
            maxLength="1"
            autoCapitalize="none"
            autoCorrect="off"
            value={letters[i]}
            onChange={(event) => handleChange(event, i)}
            ref={inputRefs.current[i]}
          />
        </Col>
      )
    }
  
    return <Row>{form}</Row>
  }

  const createRow = (item, i) => {
    return (
      <Row key={i}>
        <Col lg={12} md={12} sm={12} xs={12}>
          <span className='word'>{item}</span>
        </Col>
      </Row>
    )
  }

  const createCountHeader = (item, i) => {
    return (
      <Row key={i}><Col lg={12} md={12} sm={12} xs={12}>
        <div className='count-header'>
          {item} letters
        </div>
      </Col></Row>
    )
  }

  const outputResults = () => {
    let res = [];
    let prevLength = -1;

    for (let i = 0; i < results.length; ++i) {
      const result = results[i];

      if (!result || result.length <= 2) {
        continue;
      }

      if (prevLength !== result.length) {
        res.push(createCountHeader(result.length, 'Header-' + i));
      }

      res.push(createRow(result, i));

      prevLength = result.length;
    }

    return res;
  }

  useEffect(() => {
    if (!initCompletedRef.current) {
      initInputRefs();
      initDictionary();
      initLetters();
      initCompletedRef.current = true;
    }
    
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <header>
            <h1>Word Permutations from Letters</h1>
          </header>
        </div>
        <div className="form-container">
          <Form className="text-center" onSubmit={handleSubmit}>
            <Row>
              <Col lg={10} md={8} sm={6} xs={12}>
                {createForm()}
              </Col>
              <Col lg={1} md={2} sm={3} xs={6}>
                <Button className="button" variant="success" onClick={handleSubmit}>Submit</Button>
              </Col>
              <Col lg={1} md={2} sm={3} xs={6}>
                <Button variant="danger" onClick={resetLetters}>Reset</Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
      <div className="container">
        <div className="results-container">
          {outputResults()}
        </div>
      </div>
    </div>
  );
}

export default App;
