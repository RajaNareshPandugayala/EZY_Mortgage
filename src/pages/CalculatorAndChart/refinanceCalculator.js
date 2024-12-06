import React, { useEffect, useState, useCallback } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const RefinanceCalculator = () => {
    const [principalBalance, setPrincipalBalance] = useState(300000);
    const [monthlyDebt, setMonthlyDebt] = useState(2000);
    const [loanTerm, setLoanTerm] = useState(360); // In months
    const [currentInterestRate, setCurrentInterestRate] = useState(4.0);
    const [refinanceInterestRate, setRefinanceInterestRate] = useState(3.5);
    const [closingCosts, setClosingCosts] = useState(0.02); // Default to percentage
    const [closingCostsType, setClosingCostsType] = useState("Percentage");
    const [financeClosingCosts, setFinanceClosingCosts] = useState("No");
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [monthlySavings, setMonthlySavings] = useState(0);
    const [breakEvenMonths, setBreakEvenMonths] = useState(0);
    const [totalInterestCurrent, setTotalInterestCurrent] = useState(0);
    const [totalInterestRefinanced, setTotalInterestRefinanced] = useState(0);
    const [netSavings, setNetSavings] = useState(0);
    const [calculateCurrentMonthlyPaymentPlan, setCalculateCurrentMonthlyPaymentPlan] = useState(0);


    const calculateCurrentPlanInterest = useCallback(() => {
        const monthlyInterest = currentInterestRate / 100 / 12; // Monthly interest rate
        const monthlyPayment = (principalBalance * monthlyInterest * Math.pow(1 + monthlyInterest, loanTerm)) /
            (Math.pow(1 + monthlyInterest, loanTerm) - 1); // Monthly payment formula

        const totalInterest = (monthlyPayment * loanTerm) - principalBalance; // Total interest paid over the loan term

        setTotalInterestCurrent(totalInterest); // Update total interest for the current plan
        setCalculateCurrentMonthlyPaymentPlan(totalInterest); // Display total interest for current payment plan
    }, [principalBalance, currentInterestRate, loanTerm]);


    const calculateRefinancePlan = useCallback(() => {
        const closingCostsValue = closingCostsType === "Percentage"
            ? principalBalance * (closingCosts / 100)
            : closingCosts; // Calculate closing costs based on type (percentage or fixed)

        const principal = principalBalance + (financeClosingCosts === "Yes" ? closingCostsValue : 0); // Add financed closing costs
        const monthlyInterest = refinanceInterestRate / 100 / 12; // Monthly interest rate for refinanced plan

        const monthlyEMI = monthlyInterest === 0
            ? principal / loanTerm // Edge case: zero interest
            : (principal * monthlyInterest * Math.pow(1 + monthlyInterest, loanTerm)) /
            (Math.pow(1 + monthlyInterest, loanTerm) - 1); // Monthly payment formula

        const totalInterest = (monthlyEMI * loanTerm) - principal; // Total interest for the refinanced plan

        // Update states
        setMonthlyPayment(monthlyEMI.toFixed(2));
        setTotalInterestRefinanced(totalInterest);
        setMonthlySavings((monthlyDebt - monthlyEMI).toFixed(2));
        setNetSavings((totalInterestCurrent - totalInterest - closingCostsValue).toFixed(2));

        if (monthlySavings > 0 && closingCostsValue > 0) {
            setBreakEvenMonths(Math.ceil(closingCostsValue / monthlySavings)); // Break-even point
        } else {
            setBreakEvenMonths(0); // No savings
        }
    }, [principalBalance, refinanceInterestRate, loanTerm, financeClosingCosts, closingCosts, closingCostsType, totalInterestCurrent, monthlyDebt, monthlySavings]);






    useEffect(() => {
        calculateCurrentPlanInterest();
        calculateRefinancePlan();
    }, [calculateCurrentPlanInterest, calculateRefinancePlan]);

    const data = [
        { name: 'Monthly Payment', value: Math.round(monthlyPayment) },
        { name: 'Monthly Savings', value: Math.round(monthlySavings) },
    ];
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

    return (
        <div className="mortgageCalculatorParent">
            <div className="mortgageCalculator">
                <div className="mortgageCalculatorHeaderContent">
                    <h1 className="mortgageCalculatorHeader">Refinance Analysis Calculator*</h1>
                    <p className="mortgageCalculatorContent RefinanceCalculatorContent">
                        This calculator will help you to decide whether or not you should refinance your current mortgage at a lower interest rate. Not only will this calculator calculate the monthly payment and net interest savings, but it will also calculate how many months it will take to break even on the closing costs.
                    </p>
                </div>
                <div className="mortgageCalculatorBox">
                    <div className="leftSideBox">
                        <label>
                            Principal balance of your mortgage: <br />
                            <input
                                type="text"
                                value={`$ ${Number(principalBalance).toLocaleString()}`}
                                onChange={(e) => setPrincipalBalance(+e.target.value.replace(/[^0-9.-]+/g, ""))}
                            />
                            <input
                                type="range"
                                min="0"
                                max="1000000"
                                value={principalBalance}
                                onChange={(e) => setPrincipalBalance(+e.target.value)}
                            />
                        </label>

                        <label>
                            Monthly debt payments: <br />
                            <input
                                type="text"
                                value={`$ ${Number(monthlyDebt).toLocaleString()}`}
                                onChange={(e) => setMonthlyDebt(+e.target.value.replace(/[^0-9.-]+/g, ""))}
                            />
                            <input
                                type="range"
                                min="0"
                                max="50000"
                                value={monthlyDebt}
                                onChange={(e) => setMonthlyDebt(+e.target.value)}
                            />
                        </label>

                        <label>
                            Your mortgage's current interest rate (%): <br />
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    type="text"
                                    min="0"
                                    max="100"
                                    step="0.001"
                                    value={currentInterestRate}
                                    onChange={(e) => {
                                        let value = e.target.value.replace(/[^0-9.]/g, '');

                                        // Allow only one decimal point
                                        if ((value.match(/\./g) || []).length > 1) {
                                            value = value.slice(0, -1);
                                        }

                                        // Ensure there are no more than two digits after the decimal point
                                        const [integer, decimal] = value.split('.');
                                        if (decimal && decimal.length > 2) {
                                            value = `${integer}.${decimal.slice(0, 3)}`; // Limit to two decimal places
                                        }

                                        // Ensure the value is between 0 and 100
                                        if (+value < 0) value = "0";
                                        if (+value > 100) value = "100";

                                        setCurrentInterestRate(value);
                                    }}
                                    style={{ width: '100%' }} // Adjust width as needed
                                />
                                <span style={{ marginLeft: '-30px', fontWeight: "bold" }}>%</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={currentInterestRate}
                                step="0.01"
                                onChange={(e) => setCurrentInterestRate(+e.target.value)}
                            />
                        </label>

                        <label>
                            Interest rate you will be refinancing at (%): <br />
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    type="text"
                                    min="0"
                                    max="100"
                                    step="0.001"
                                    value={refinanceInterestRate}
                                    onChange={(e) => {
                                        let value = e.target.value.replace(/[^0-9.]/g, '');

                                        // Allow only one decimal point
                                        if ((value.match(/\./g) || []).length > 1) {
                                            value = value.slice(0, -1);
                                        }

                                        // Ensure there are no more than two digits after the decimal point
                                        const [integer, decimal] = value.split('.');
                                        if (decimal && decimal.length > 2) {
                                            value = `${integer}.${decimal.slice(0, 3)}`; // Limit to two decimal places
                                        }

                                        // Ensure the value is between 0 and 100
                                        if (+value < 0) value = "0";
                                        if (+value > 100) value = "100";

                                        setRefinanceInterestRate(value);
                                    }}
                                    style={{ width: '100%' }} // Adjust width as needed
                                />
                                <span style={{ marginLeft: '-30px', fontWeight: "bold" }}>%</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={refinanceInterestRate}
                                step="0.01"
                                onChange={(e) => setRefinanceInterestRate(+e.target.value)}
                            />
                        </label>

                        <label>
                            Number of years you will be refinancing for: <br />
                            <select value={loanTerm} onChange={(e) => setLoanTerm(+e.target.value)}>
                                {Array.from({ length: 39 }, (_, i) => (i + 2) * 12).map((term) => (
                                    <option key={term} value={term}>
                                        {term} months (or) {term / 12} years
                                    </option>
                                ))}
                            </select>
                            <input
                                type="range"
                                min="12"
                                max="480"
                                step="12"
                                value={loanTerm}
                                onChange={(e) => setLoanTerm(+e.target.value)}
                                style={{ width: "100%" }}
                            />
                        </label>

                        <label>
                            Closing costs: <br />
                            <select onChange={(e) => setClosingCostsType(e.target.value)}>
                                <option value="Percentage">Percentage Points</option>
                                <option value="Dollar">Dollar Amount</option>
                            </select>
                            <input
                                type="number"
                                step="0.001"
                                value={closingCosts}
                                onChange={(e) => setClosingCosts(+e.target.value.replace(/[^0-9.-]+/g, ""))}
                            />
                        </label>

                        <label>
                            Would you like to finance the closing costs? <br />
                            <select value={financeClosingCosts} onChange={(e) => setFinanceClosingCosts(e.target.value)}>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>
                    </div>

                    <div className="rightSideBox RACrightSideBox">
                        <div className="RACrightSideDiv">
                            <div><span>Monthly payment will be if you refinance: </span><b>{`$ ${Number(monthlyPayment).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} </b></div>
                            <div><span>Your Monthly Savings will be:</span><b>{`$ ${Number((monthlyDebt - monthlyPayment).toFixed(2)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</b></div>
                        </div>

                        {/* Conditionally render .RACrightSideBottom00 based on refinanceInterestRate */}
                        {refinanceInterestRate > currentInterestRate && (
                            <div className="affordRightSideBottom RACrightSideBottom00">
                                <div><span style={{ color: "red" }}>You've entered a refinancing rate that is higher than your present rate. The refinancing rate must be lower than your present rate in order for this calculator to work.</span></div>
                            </div>
                        )}

                        <div style={{ textAlign: "center" }}>
                            <PieChart width={500} height={500}>
                                <Pie data={data} dataKey="value" innerRadius={160} outerRadius={220} fill="#8884d8" paddingAngle={1}>
                                    {data.map((_, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    formatter={(value, name) => [`$ ${Number(value).toLocaleString()}`, name]}
                                    cursor={{ fill: 'rgba(255, 255, 255, 0.5)' }}
                                />
                            </PieChart>
                        </div>

                        <div className="affordRightSideBottom RACrightSideBottom00">
                            <div><span>If you refinance your current {currentInterestRate}% mortgage to a {refinanceInterestRate}% mortgage, your monthly payment will decrease by {`$ ${(monthlyDebt - monthlyPayment).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} and you will pay an additional $916,299.18 in interest charges over the life of the mortgage.</span></div>
                        </div>
                        <div className="affordrightSideBottom RACrightSideBottom">
                            <div><span>This is how much your monthly payment will be if you refinance:</span> <span>{`$ ${Number(monthlyPayment).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</span></div>
                            <div><span>Monthly Payment Reduction:</span> <span>{`$ ${(monthlyDebt - monthlyPayment).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</span></div>
                            <div><span># of months for interest savings to offset closing costs: </span> <span>{breakEvenMonths}</span></div>
                            {/* <div><span>This is how much interest you will pay under your current monthly payment plan:</span> <span>{`$ ${Number(calculateCurrentMonthlyPaymentPlan).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</span></div>
                            <div><span>This is how much interest you will pay under your refinanced monthly payment plan: </span><span>{`$ ${Number(totalInterestRefinanced).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</span></div>
                            <div><span>This is how much interest you will save if you refinance:</span> <span>{`$ ${Number(netSavings).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</span></div>
                            <div><span>Net Refinancing Savings: </span><span>{`$ ${Number(netSavings).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</span></div> */}

                            <div><span>This is how much interest you will pay under your current monthly payment plan:</span>
                                {`$ ${Number(calculateCurrentMonthlyPaymentPlan).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</div>

                            <div><span>This is how much interest you will pay under your refinanced monthly payment plan:</span>
                                {`$ ${Number(totalInterestRefinanced).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</div>

                            <div><span>This is how much interest you will save if you refinance:</span>
                                {`$ ${Number(totalInterestCurrent - totalInterestRefinanced).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</div>

                            <div><span>Net Refinancing Savings (interest savings less closing costs):</span>
                                {`$ ${Number(netSavings).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RefinanceCalculator;
