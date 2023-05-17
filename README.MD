# Flights testing with Cypress

For automated testing using Cypress for air flights web site Air Malta

## Initialize Steps

1. Clone git repo -> git clone
2. Install node modules -> npm install
3. Install cypress -> npm install cypress

## Description

- Created 2 test cases for testing air flights:
  - First test case to get the first available flight price so I decided to select tomorrow as the departure day to get the first flight and decided the trip to be one way.
  - Second test case is a round trip with exact days provided in the JSON data file the date should be in the format mmm dd yyyy
- The project is designed in Page Object Model (POM) to ease the updates on the locators or the testing flow.
- The project is Data Driven and can read data from the JSON file to allow changing dates or locations easily.
