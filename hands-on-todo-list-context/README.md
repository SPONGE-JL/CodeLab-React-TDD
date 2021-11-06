# Hands on :: ToDo List (Context API)

## Purpose

To manage multiple states and props of many components which are separated in different parent components,
we can use `pub-sub` pattern like `Flux`. At that point, we need to understand the topic of `Context API`. So, this project is simple use case of the `Context API`.

> _Check points: how to handle the context and test it._

## How to use

```bash
# Install Dependencies
yarn install
# or | npm install

# Unit Test
yarn test
# or | npm run test

# Check Test Coverage
yarn test --coverage --watchAll
# or | npm run test -- --coverage --watchAll
```

- Unit Test
  ![jest-unit-test.png](./history/jest-unit-test.png)

- Test Coverage
  ![jest-test-coverage.png](./history/jest-test-coverage.png)

<details>
<summary>🌟 Recipe</summary>

### Init

```bash
npx create-react-app --template typescript hands-on-todo-list-context
```

### Dependency

### Typescript Complier: `tsconfig.json`

- To use absolute pakage path in import sytanx, [set 'baseUrl'.](./tsconfig.json#L3)

#### Prettier Hooking

```bash
yarn add --dev husky lint-staged prettier
```

- `.prettierrc.js`: [basic prettier policy](./.prettierrc.js)
- `package.json`: [add husky hook for uing prettier](./package.json#L5-#L14)

#### CSS & Test

```bash
yarn add styled-components
yarn add --dev @types/styled-components jest-styled-components
```

</details>
