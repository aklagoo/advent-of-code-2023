# Advent of Code 2023

This repository tracks my progress towards solving [Advent of Code 2023](https://adventofcode.com/2023)
with TypeScript.

## 1. Requirements
- [Node.js](https://nodejs.org/en/download) (18.15.0)
- (Optional) [EditorConfig](https://editorconfig.org/)

## 2. Usage

To run any solution, run:
```bash
npm start -- <PROBLEM_NUMBER>
```

`<PROBLEM_NUMBER>` is an integer obviously representing the problem number.

For example, to run problem 1, you would run:
```bash
npm start -- 1
```

Problems are organized as folders, with three key files:
- `input.txt`: The input generated from Advent of Code.
- `main.ts`: The script contianing the primary code and I/O parsers.
- `output.txt`: Contains the output stored as valid JSON strings.
