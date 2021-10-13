# TDD-React-TS-Porting

Porting typescript from [`tdd-react`](../tdd-react#reademe)

## How to use

```bash
# Install Dependencies
yarn install # or | npm install

# Run Test
yarn test    # or | npm run test
```

- `PASS` result:  
  ![yarn-test-result-pass](./results-images/yarn-test-result-pass.png)

- `FAIL` result:  
  ![yarn-test-result-fail](./results-images/yarn-test-result-fail.png)

- Check Snapshots in your local directory(**`src/__snapshots__`**).

<details>
<summary>🌟 Recipe</summary>

## Installation dependencies

- Use `yarn` script

  ```bash
  # testing-library for react with typescript
  yarn add --dev \
      typescript \
      @types/node \
      @types/react \
      @types/react-dom \
      @types/jest
  ```

- Use `npm` script

  ```bash
  # testing-library for react with typescript
  npm i --save-dev \
      typescript \
      @types/node \
      @types/react \
      @types/react-dom \
      @types/jest
  ```

## Settings

- [`tsconfig.json`](./tsconfig.json)

<br>
</details>
