import {
  calculateInvestmentResults,
  formatter,
} from "../../util/investment.js";
const Results = ({ userInputState }) => {
  const resultsData = calculateInvestmentResults(userInputState);
  const initialYear = resultsData[0];

  const initialInvestment =
    initialYear.valueEndOfYear -
    initialYear.interest -
    initialYear.annualInvestment;

//   console.log(resultsData);

  const renderBodyElements = () => {
    return resultsData.map((yearData) => {
      const { year, interest, valueEndOfYear, annualInvestment } = yearData;

      const totalInterest = valueEndOfYear - annualInvestment * year - initialInvestment;
      const totalAmountInvested = valueEndOfYear - totalInterest;

      const formattedEndOfYear = formatter.format(valueEndOfYear);
      const formattedInterest = formatter.format(interest);
      const formattedTotalInterest = formatter.format(totalInterest);
      const formattedTotalAmountInvested = formatter.format(totalAmountInvested);

      return (
        <tr key={year}>
          <td>{year}</td>
          <td>{formattedEndOfYear}</td>
          <td>{formattedInterest}</td>
          <td>{formattedTotalInterest}</td>
          <td>{formattedTotalAmountInvested}</td>
        </tr>
      );
    });
  };

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>{renderBodyElements()}</tbody>
    </table>
  );
};

export default Results;
