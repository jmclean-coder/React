---
title: README
---
# React Investment Calculator

This project is a simple investment calculator built with React. It allows users to input their initial investment, annual investment, expected return rate, and investment duration to calculate the growth of their investment over time.

## Project Structure

- assets
- components
- utils
- Everything needed for this simple React App powered by Vite.

## Key Components

- **Header**: Displays the logo and title of the application. (<SwmToken path="/react-investment-calculator/src/components/Header/Header.jsx" pos="3:2:2" line-data="const Header = () =&gt; {" repo-id="Z2l0aHViJTNBJTNBUmVhY3QlM0ElM0FqbWNsZWFuLWNvZGVy" repo-name="React">`Header`</SwmToken>)
- **UserInput**: Collects user inputs for initial investment, annual investment, expected return, and duration. (`UserInput`)
- **Results**: Displays the calculated investment results in a tabular format. (\`<SwmToken path="/react-investment-calculator/src/components/Results/Results.jsx" pos="5:2:2" line-data="const Results = ({ userInputState }) =&gt; {" repo-id="Z2l0aHViJTNBJTNBUmVhY3QlM0ElM0FqbWNsZWFuLWNvZGVy" repo-name="React">`Results`</SwmToken>)

## Utility Functions

- **calculateInvestmentResults**: Calculates the investment growth over the specified duration. (<SwmToken path="/react-investment-calculator/src/util/investment.js" pos="7:4:4" line-data="export function calculateInvestmentResults({" repo-id="Z2l0aHViJTNBJTNBUmVhY3QlM0ElM0FqbWNsZWFuLWNvZGVy" repo-name="React">`calculateInvestmentResults`</SwmToken>)
- **formatter**: Formats numbers as currency. (<SwmToken path="/react-investment-calculator/src/util/investment.js" pos="33:4:4" line-data="export const formatter = new Intl.NumberFormat(&#39;en-US&#39;, {" repo-id="Z2l0aHViJTNBJTNBUmVhY3QlM0ElM0FqbWNsZWFuLWNvZGVy" repo-name="React">`formatter`</SwmToken>)

## Styling

The project uses CSS for styling, with styles defined in <SwmPath repo-id="Z2l0aHViJTNBJTNBUmVhY3QlM0ElM0FqbWNsZWFuLWNvZGVy" repo-name="React" path="/react-investment-calculator/src/index.css">`(React) react-investment-calculator/src/index.css`</SwmPath>.

## Try it yourself!

1. **Install Dependencies**:

   ```sh
   npm install
   ```
2. **Run the Development Server**:

   ```sh
   npm run dev
   ```
3. **Build For Production**:

   ```sh
   npm run build
   ```
4. **Preview Production Build**:

   ```sh
   npm run preview
   ```

## Configuration

The project uses Vite for bundling and development. Configuration is defined in <SwmPath repo-id="Z2l0aHViJTNBJTNBUmVhY3QlM0ElM0FqbWNsZWFuLWNvZGVy" repo-name="React" path="/react-concepts/vite.config.js">`(React) react-concepts/vite.config.js`</SwmPath>.

## Node Version

The project uses Node.js version specified in <SwmPath repo-id="Z2l0aHViJTNBJTNBUmVhY3QlM0ElM0FqbWNsZWFuLWNvZGVy" repo-name="React" path="/react-investment-calculator/.nvmrc">`(React) react-investment-calculator/.nvmrc`</SwmPath>.

## License

This project is licensed under the MIT License.

<SwmMeta version="3.0.0"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
