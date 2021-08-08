# RNTechnicalTest - Flip.id

This application is a disbursement Software Enginner - Mobile (React Native). This service is created as test before join with Flip.id.


## Installation

run npm install or yarn install

## Run on Device
run yarn android or yarn ios to run on device or emulator

## Project Info

Main objective of this project was to have a single code base for mobile apps with the logic and view separated.

Technology use : 
1. React Native
2. React Hooks
3. React Redux
4. React Navigation
5. Axios


### - Objective
1. Transaction List Page

- it has list of transactions
- it can be searched or filtered by
    - name
    - sender bank
    - beneficiary bank
    - transaction's amount
- it can be sorted by
    - name A-Z
    - name Z-A
    - date newest
    - date oldest

2. Detail Page
App navigated to Detail Page when transaction row on Transaction List Page is pressed.

- it has all informations about the selected transaction
- it has a back button

### - Project Structure

  ```
RNTechnicalTest
├── __tests__
├── android
├── ios
├── src
│   ├── assets
│   │    └── DummyData
│   │    └── Icons
│   └── components
│   │      └── Atom
│   │      │     └── Badge
│   │      │            └── index.js
│   │      │     └── Card
│   │      │            └── index.js
|   |      |     └── RadioButton 
│   │      │            └── index.js
│   │      └── index.js
│   └── Config
│   │      └── api
|   |      |     └── config.js
|   |      |     └── index.js 
|   |      |     └── url.js 
│   │      └── index.js
│   │      └── appConfig.js
│   └── pages
│   │      └── TransactionDetail
|   |      |     └── index.js 
|   |      |     └── style.js 
│   │      └── TransactionList
|   |      |     └── index.js 
|   |      |     └── style.js 
│   │      └── index.js
│   └── redux
│   │    └── actions
│   │    │      └── index.js
│   │    │      └── transaction.js
│   │    │      └── transactionDetail.js
│   │    └── reducers
│   │    │      └── store.js
│   │    │      └── index.js
│   │    └── store.js
│   │    └── index.js
│   ├── routes
│   │    └── index.js
│   ├── services
│   │      └── transaction
│   │      │     └── index.js
│   │      └── index.js
│   ├── static
│   │      └── index.js
│   ├── utils
│   │      └── colors
│   │      │     └── index.js
│   │      └── manipulationText
│   │      │     └── index.js
│   │      └── request
│   │      │     └── index.js
│   │      └── index.js
│   └── App.js
├── .editorconfig
├── app.json
├── .buckconfig
├── .prettierrc.js
├── .watchmanconfig
├── eslintrc.json
├── index.js
├── package.json
├── metro.config.json
```

  
  
