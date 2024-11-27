# React Investment Calculator

This project is a simple investment calculator built with React. It allows users to input their initial investment, annual investment, expected return rate, and investment duration to calculate the growth of their investment over time.

## Project Structure

- assets
- components
- utils
- Everything needed for this simple React App powered by Vite.

## Key Components

- **Header**: Displays the logo and title of the application. ([`Header`](src/components/Header/Header.jsx))
- **UserInput**: Collects user inputs for initial investment, annual investment, expected return, and duration. ([`UserInput`](src/components/UserInput/UserInput.jsx))
- **Results**: Displays the calculated investment results in a tabular format. ([`Results`](src/components/Results/Results.jsx))

## Utility Functions

- **calculateInvestmentResults**: Calculates the investment growth over the specified duration. ([`calculateInvestmentResults`](src/util/investment.js))
- **formatter**: Formats numbers as currency. ([`formatter`](src/util/investment.js))

## Styling

The project uses CSS for styling, with styles defined in [`index.css`](src/index.css).

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

The project uses Vite for bundling and development. Configuration is defined in [`vite.config.js`](vite.config.js).

## Node Version

The project uses Node.js version specified in [`.nvmrc`](.nvmrc).

## License

This project is licensed under the MIT License.
