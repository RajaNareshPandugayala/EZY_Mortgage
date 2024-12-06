import React, { useEffect, useState, useCallback } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const ConsolidationCalculatorDebt = () => {
    // State variables
    const [principalBalance1, setPrincipalBalance1] = useState(300000); // First Mortgage
    const [monthlyDebt1, setMonthlyDebt1] = useState(2000);
    const [interestRate1, setInterestRate1] = useState(4);

    const [principalBalance2, setPrincipalBalance2] = useState(200000); // Second Mortgage
    const [monthlyDebt2, setMonthlyDebt2] = useState(3000);
    const [interestRate2, setInterestRate2] = useState(4.5);

    const [refinanceRate, setRefinanceRate] = useState(3.5);
    const [loanTerm, setLoanTerm] = useState(360); // 30 years
    const [closingCostsType, setClosingCostsType] = useState("Percentage");
    const [closingCosts, setClosingCosts] = useState(0.02); // as a percentage
    const [financeClosingCosts, setFinanceClosingCosts] = useState("No");

    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [monthlySavings, setMonthlySavings] = useState(0);
    const [breakEvenMonths, setBreakEvenMonths] = useState(0);

    const [totalInterestCurrent, setTotalInterestCurrent] = useState(0);
    const [totalInterestRefinanced, setTotalInterestRefinanced] = useState(0);
    const [netSavings, setNetSavings] = useState(0);

    const [calculateCurrentMonthlyPaymentPlan, setCalculateCurrentMonthlyPaymentPlan] = useState(0);

    // Calculate total current monthly payment and interest
    const calculateCurrentPlanInterest = useCallback(() => {
        const monthlyInterest1 = interestRate1 / 100 / 12;
        const monthlyInterest2 = interestRate2 / 100 / 12;

        const currentMonthlyPayment1 =
            (principalBalance1 * monthlyInterest1 * Math.pow(1 + monthlyInterest1, loanTerm)) /
            (Math.pow(1 + monthlyInterest1, loanTerm) - 1);

        const currentMonthlyPayment2 =
            (principalBalance2 * monthlyInterest2 * Math.pow(1 + monthlyInterest2, loanTerm)) /
            (Math.pow(1 + monthlyInterest2, loanTerm) - 1);

        const totalInterest1 = currentMonthlyPayment1 * loanTerm - principalBalance1;
        const totalInterest2 = currentMonthlyPayment2 * loanTerm - principalBalance2;

        setTotalInterestCurrent(totalInterest1 + totalInterest2);
        setCalculateCurrentMonthlyPaymentPlan(totalInterest1 + totalInterest2);
    }, [principalBalance1, interestRate1, loanTerm, principalBalance2, interestRate2]);

    // Calculate refinanced plan
    // const calculateRefinancePlan = useCallback(() => {
    //     const totalPrincipal = principalBalance1 + principalBalance2;
    //     const closingCostsValue =
    //         closingCostsType === "Percentage" ? totalPrincipal * (closingCosts / 100) : closingCosts;

    //     const finalPrincipal =
    //         financeClosingCosts === "Yes" ? totalPrincipal + closingCostsValue : totalPrincipal;

    //     const monthlyInterest = refinanceRate / 100 / 12;

    //     const monthlyEMI =
    //         monthlyInterest === 0
    //             ? finalPrincipal / loanTerm
    //             : (finalPrincipal * monthlyInterest * Math.pow(1 + monthlyInterest, loanTerm)) /
    //             (Math.pow(1 + monthlyInterest, loanTerm) - 1);

    //     const totalInterestRefinanced =
    //         monthlyEMI * loanTerm - finalPrincipal;

    //     setMonthlyPayment(monthlyEMI.toFixed(2));
    //     setTotalInterestRefinanced(totalInterestRefinanced);

    //     const monthlyDebt = monthlyDebt1 + monthlyDebt2;
    //     const savings = monthlyDebt - monthlyEMI;
    //     const netSavings =
    //         totalInterestCurrent - totalInterestRefinanced - closingCostsValue;

    //     setMonthlySavings(savings.toFixed(2));
    //     setNetSavings(netSavings.toFixed(2));

    //     if (savings > 0 && closingCostsValue > 0) {
    //         setBreakEvenMonths(Math.ceil(closingCostsValue / savings));
    //     } else {
    //         setBreakEvenMonths(0);
    //     }
    // }, [
    //     principalBalance1,
    //     principalBalance2,
    //     refinanceRate,
    //     loanTerm,
    //     financeClosingCosts,
    //     closingCosts,
    //     closingCostsType,
    //     totalInterestCurrent,
    //     monthlyDebt1,
    //     monthlyDebt2,
    // ]);


    const calculateRefinancePlan = useCallback(() => {
        // Combine the principal balances for the new total principal
        const totalPrincipal = principalBalance1 + principalBalance2;

        // Calculate closing costs based on type (Percentage or Fixed)
        const closingCostsValue = closingCostsType === "Percentage"
            ? totalPrincipal * (closingCosts / 100)
            : closingCosts;

        // Add financed closing costs if applicable
        const finalPrincipal = totalPrincipal + (financeClosingCosts === "Yes" ? closingCostsValue : 0);

        // Calculate the monthly interest rate
        const monthlyInterest = refinanceRate / 100 / 12;

        // Calculate monthly EMI using the formula, handle the zero-interest case
        const monthlyEMI = monthlyInterest === 0
            ? finalPrincipal / loanTerm
            : (finalPrincipal * monthlyInterest * Math.pow(1 + monthlyInterest, loanTerm)) /
            (Math.pow(1 + monthlyInterest, loanTerm) - 1);

        // Calculate the total interest for the refinanced plan
        const totalInterestRefinanced = (monthlyEMI * loanTerm) - finalPrincipal;

        // Calculate combined monthly debt and savings
        const monthlyDebt = monthlyDebt1 + monthlyDebt2;
        const monthlySavings = monthlyDebt - monthlyEMI;

        // Calculate net savings
        const netSavings = totalInterestCurrent - totalInterestRefinanced - closingCostsValue;

        // Update states
        setMonthlyPayment(monthlyEMI.toFixed(2));
        setTotalInterestRefinanced(totalInterestRefinanced.toFixed(2));
        setMonthlySavings(monthlySavings.toFixed(2));
        setNetSavings(netSavings.toFixed(2));

        // Calculate break-even months
        if (monthlySavings > 0 && closingCostsValue > 0) {
            setBreakEvenMonths(Math.ceil(closingCostsValue / monthlySavings));
        } else {
            setBreakEvenMonths(0);
        }
    }, [
        principalBalance1,
        principalBalance2,
        refinanceRate,
        loanTerm,
        financeClosingCosts,
        closingCosts,
        closingCostsType,
        totalInterestCurrent,
        monthlyDebt1,
        monthlyDebt2,
    ]);



    useEffect(() => {
        calculateCurrentPlanInterest();
        calculateRefinancePlan();
    }, [calculateCurrentPlanInterest, calculateRefinancePlan]);

    // Data for the Pie Chart
    const chartData = [
        { name: "Monthly Payment", value: parseFloat(monthlyPayment) },
        { name: "Savings", value: parseFloat(monthlySavings) },
    ];
    const COLORS = ["#0088FE", "#00C49F"];

    return (
        <div className="mortgageCalculatorParent">
            <div className="mortgageCalculator">
                <div className="mortgageCalculatorHeaderContent">
                    <h1 className="mortgageCalculatorHeader">Consolidation Calculator</h1>
                    <p className="mortgageCalculatorContent RefinanceCalculatorContent">
                        This calculator will help you to decide whether or not it would be advantageous for you to consolidate a first and second mortgage and refinance into a single mortgage with a lower interest rate. Not only will this calculator calculate the monthly payment and net interest savings, but it will also calculate how many months it will take to break even on the closing costs. Note: Be sure to only include the principal and interest portion of your monthly mortgage payment, i.e., do not include any escrow portions (property taxes, insurance, etc.).
                    </p>
                </div>
                <div className="mortgageCalculatorBox">
                    <div className="leftSideBox">
                        <h2 className="CCDleftSideHeading">First Mortgage</h2>
                        <label>
                            Principal balance of your first mortgage:
                            <input
                                type="text"
                                value={`$ ${Number(principalBalance1).toLocaleString()}`}
                                onChange={(e) => setPrincipalBalance1(+e.target.value.replace(/[^0-9.-]+/g, ""))}
                            />
                            <input
                                type="range"
                                min="0"
                                max="1000000"
                                value={principalBalance1}
                                onChange={(e) => setPrincipalBalance1(+e.target.value)}
                            />
                        </label>

                        <label>
                            Amount of your monthly mortgage payment:
                            <input
                                type="text"
                                value={`$ ${Number(monthlyDebt1).toLocaleString()}`}
                                onChange={(e) => setMonthlyDebt1(+e.target.value.replace(/[^0-9.-]+/g, ""))}
                            />
                            <input
                                type="range"
                                min="0"
                                max="50000"
                                value={monthlyDebt1}
                                onChange={(e) => setMonthlyDebt1(+e.target.value)}
                            />
                        </label>

                        <label>
                            Your first mortgage's current interest rate (%): <br />
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    type="text"
                                    min="0"
                                    max="100"
                                    step="0.001"
                                    value={interestRate1}
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

                                        setInterestRate1(value);
                                    }}
                                    style={{ width: '100%' }} // Adjust width as needed
                                />
                                <span style={{ marginLeft: '-30px', fontWeight: "bold" }}>%</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={interestRate1}
                                step="0.01"
                                onChange={(e) => setInterestRate1(+e.target.value)}
                            />
                        </label>

                        <h2 className="CCDleftSideHeading">Second Mortgage</h2>
                        {/* Similar code for Second Mortgage */}
                        <label>
                            Principal balance of your second mortgage:
                            <input
                                type="text"
                                value={`$ ${Number(principalBalance2).toLocaleString()}`}
                                onChange={(e) => setPrincipalBalance2(+e.target.value.replace(/[^0-9.-]+/g, ""))}
                            />
                            <input
                                type="range"
                                min="0"
                                max="1000000"
                                value={principalBalance2}
                                onChange={(e) => setPrincipalBalance2(+e.target.value)}
                            />
                        </label>

                        <label>
                            Amount of your monthly mortgage payment:
                            <input
                                type="text"
                                value={`$ ${Number(monthlyDebt2).toLocaleString()}`}
                                onChange={(e) => setMonthlyDebt2(+e.target.value.replace(/[^0-9.-]+/g, ""))}
                            />
                            <input
                                type="range"
                                min="0"
                                max="50000"
                                value={monthlyDebt2}
                                onChange={(e) => setMonthlyDebt2(+e.target.value)}
                            />
                        </label>


                        <label>
                            Your second mortgage's current interest rate (%):<br />
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    type="text"
                                    min="0"
                                    max="100"
                                    step="0.001"
                                    value={interestRate2}
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

                                        setInterestRate2(value);
                                    }}
                                    style={{ width: '100%' }} // Adjust width as needed
                                />
                                <span style={{ marginLeft: '-30px', fontWeight: "bold" }}>%</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={interestRate2}
                                step="0.01"
                                onChange={(e) => setInterestRate2(+e.target.value)}
                            />
                        </label>
                        <h2 className="CCDleftSideHeading">Refinancing</h2>

                        <label>
                            Interest rate you will be refinancing at (%) <br />
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    type="text"
                                    min="0"
                                    max="100"
                                    step="0.001"
                                    value={refinanceRate}
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

                                        setRefinanceRate(value);
                                    }}
                                    style={{ width: '100%' }} // Adjust width as needed
                                />
                                <span style={{ marginLeft: '-30px', fontWeight: "bold" }}>%</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={refinanceRate}
                                step="0.01"
                                onChange={(e) => setRefinanceRate(+e.target.value)}
                            />
                        </label>


                        <label>
                            Number of years you will be refinancing for:
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
                            />
                        </label>


                        <label>
                            Closing costs: <br />
                            <select onChange={(e) => setClosingCostsType(e.target.value)}>
                                {/* <select> */}
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
                            Would you like to finance the closing costs?
                            <select value={financeClosingCosts} onChange={(e) => setFinanceClosingCosts(e.target.value)}>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>
                    </div>

                    <div className="rightSideBox DCCrightSideBox">
                        <div className="RACrightSideDiv">
                            <div><span>Monthly payment will be if you refinance: </span><b>{`$ ${Number(monthlyPayment).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} </b></div>
                            <div><span>Your Monthly Savings will be:</span><b>{`$ ${Number(monthlySavings).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</b></div>
                        </div>

                        {(refinanceRate > interestRate1 || refinanceRate > interestRate2) && (
                            <div className="affordRightSideBottom RACrightSideBottom00">
                                <div><span style={{ color: "red" }}>You've entered a refinancing rate that is higher than your present rate. The refinancing rate must be lower than your present rate in order for this calculator to work.</span></div>
                            </div>
                        )}


                        <div style={{ textAlign: "center" }}>
                            <PieChart width={500} height={500}>
                                <Pie data={chartData} dataKey="value" innerRadius={160} outerRadius={220} fill="#8884d8" paddingAngle={1}>
                                    {chartData.map((_, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    formatter={(value, name) => [`$ ${Number(Math.round(value)).toLocaleString()}`, name]}
                                    cursor={{ fill: 'rgba(255, 255, 255, 0.5)' }}
                                />
                            </PieChart>
                        </div>

                        <div className="affordRightSideBottom RACrightSideBottom00">
                            <div><span>If you refinance your current {interestRate1}% mortgage to a {interestRate2}% mortgage  into a single {refinanceRate}% mortgage, your monthly payment will decrease by {`$ ${(monthlySavings).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} and you will pay an additional $916,299.18 in interest charges over the life of the mortgage.</span></div>
                        </div>

                        <div className="affordrightSideBottom RACrightSideBottom">
                            <div><span>This is how much your monthly payment will be if you refinance:</span> <span>{`$ ${Number(monthlyPayment).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</span></div>
                            <div><span>Monthly Payment Reduction:</span> <span>{`$ ${(monthlySavings).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</span></div>
                            <div><span># of months for interest savings to offset closing costs: </span> <span>{breakEvenMonths}</span></div>
                            <div><span>This is how much interest you will pay under your current monthly payment plan:</span> <span>{`$ ${Number(calculateCurrentMonthlyPaymentPlan).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</span></div>
                            <div><span>This is how much interest you will pay under your refinanced plan: </span>
                                <span>{`$ ${Number(totalInterestRefinanced).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</span>
                            </div>
                            <div><span>This is how much interest you will save if you refinance:</span>
                                <span>{`$ ${Number(totalInterestCurrent - totalInterestRefinanced).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</span>
                            </div>
                            <div><span>Net Refinancing Savings (interest savings less closing costs): </span>
                                <span>{`$ ${Number(netSavings).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConsolidationCalculatorDebt;
