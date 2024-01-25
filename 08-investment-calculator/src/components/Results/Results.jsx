import { calculateInvestmentResults } from '../../util/investment.js'
const Results = ({ userInputState }) => {

    const resultsData = calculateInvestmentResults(userInputState);
    console.log(resultsData);

    return <table id='result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>

}

export default Results;