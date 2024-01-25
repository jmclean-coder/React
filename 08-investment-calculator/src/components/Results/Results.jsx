import { calculateInvestmentResults } from '../../util/investment.js'
const Results = ({ userInputState }) => {

    const resultsData = calculateInvestmentResults(userInputState);
    console.log(resultsData);

    return <p>Results coming soon</p>

}

export default Results;