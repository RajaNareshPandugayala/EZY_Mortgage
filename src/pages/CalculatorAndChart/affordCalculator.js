import React, { useEffect, useState, useCallback } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const AffordCalculator = () => {
    const [grossIncome, setGrossIncome] = useState(75000);
    const [monthlyDebt, setMonthlyDebt] = useState(300);
    const [downPayment, setDownPayment] = useState(50000);
    const [loanTerm, setLoanTerm] = useState(360);
    const [interestRate, setInterestRate] = useState(6.5);
    const [pmi, setPmi] = useState(0.4);
    const [insurance, setInsurance] = useState(0);
    const [propertyTax, setPropertyTax] = useState(0);
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [homePrice, setHomePrice] = useState(0);
    const [loanAmount, setLoanAmount] = useState(0);



    // Wrap calculateCurrentMonthlyPaymentPlan in useCallback
    const calculateCurrentMonthlyPaymentPlan = useCallback((principal, interestRate, loanTerm) => {

        // const monthlyDebtAdd500 = monthlyDebt > (grossIncome / 100) ? monthlyDebt - (grossIncome / 100) : 0;

        const monthlyIncome = grossIncome / 12;
        // const maxMonthlyPayment = ((monthlyIncome * 0.28) - (monthlyDebtAdd500));
        const maxMonthlyPayment = ((monthlyIncome * 0.28) - (monthlyDebt));
        const monthlyInterestRate = interestRate / 100 / 12;
        const n = loanTerm;


        // Calculate loan amount based on maximum monthly payment
        const loanAmount = (maxMonthlyPayment) / (monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -n)));


        // Corrected PMI calculation (PMI should be a monthly value)
        const monthlyPMI = (pmi / 100) * ((loanAmount));

        return loanAmount + downPayment - monthlyPMI; // Return home price instead of setting it directly
    }, [grossIncome, monthlyDebt, downPayment, pmi]);




    // Adjust calculateEMI to use calculateCurrentMonthlyPaymentPlan's return value
    const calculateEMI = useCallback(() => {

        const homePriceCalculated = calculateCurrentMonthlyPaymentPlan(homePrice - downPayment, interestRate, loanTerm);
        setHomePrice(homePriceCalculated); // Set the home price state


        // Calculate EMI based on the principal, rate, and term
        const principal = homePriceCalculated - downPayment;
        setLoanAmount(principal);
        const monthlyInterestRate = interestRate / 100 / 12;
        const n = loanTerm;
        const monthlyEMI = principal * (monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -n)));


        // Additional costs included in the estimated monthly payment
        const estimatedPayment = (monthlyEMI) - (propertyTax) - insurance;
        setMonthlyPayment(estimatedPayment.toFixed(2));
    }, [homePrice, downPayment, loanTerm, interestRate, propertyTax, insurance, calculateCurrentMonthlyPaymentPlan]);


    useEffect(() => {
        calculateEMI();
    }, [calculateEMI]);


    const data = [
        { name: "Loan Amount", value: loanAmount }, // Just the loan principal
        { name: "Downpayment", value: downPayment },
        { name: "Monthly Payment", value: monthlyPayment },
    ];


    const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

    return (
        <div className="mortgageCalculatorParent">
            <div className="mortgageCalculator">
                <div className="mortgageCalculatorHeaderContent">
                    <span className="mortgageCalculatorHeader">Affordability & Refinance Calculator</span>
                    <span className="mortgageCalculatorContent">
                        This calculator will help you to determine how much house you can afford and/or qualify for.
                    </span>
                </div>
                <div className="mortgageCalculatorBox">
                    <div className="leftSideBox">
                        <label>
                            Gross annual income: <br />
                            <input
                                type="text"
                                value={`$ ${Number(grossIncome).toLocaleString()}`}
                                onChange={(e) => setGrossIncome(+e.target.value.replace(/[^0-9.-]+/g, ""))}
                            />
                            <input
                                type="range"
                                min="0"
                                max="1000000"
                                value={grossIncome}
                                onChange={(e) => setGrossIncome(+e.target.value)}
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
                                step="100"
                                value={monthlyDebt}
                                onChange={(e) => setMonthlyDebt(+e.target.value)}
                            />
                        </label>

                        <label>
                            Down payment: <br />
                            <input
                                type="text"
                                value={`$ ${Number(downPayment).toLocaleString()}`}
                                onChange={(e) => setDownPayment(+e.target.value.replace(/[^0-9.-]+/g, ""))}
                            />
                            <input
                                type="range"
                                min="0"
                                max="1000000"
                                value={downPayment}
                                onChange={(e) => setDownPayment(+e.target.value)}
                            />
                        </label>

                        <label>
                            Annual interest rate (%):  <br />
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    type="text"
                                    min="0"
                                    max="100"
                                    step="0.001"
                                    value={interestRate}
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

                                        setInterestRate(value);
                                    }}
                                    style={{ width: '100%' }} // Adjust width as needed
                                />
                                <span style={{ marginLeft: '-30px', fontWeight: "bold" }}>%</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={interestRate}
                                step="0.01"
                                onChange={(e) => setInterestRate(+e.target.value)}
                            />
                        </label>

                        <label>
                            Monthly Private Mortgage Insurance (PMI): (%):  <br />
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    type="text"
                                    min="0"
                                    step="0.001"
                                    value={pmi}
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

                                        setPmi(value);
                                    }}
                                    style={{ width: '100%' }} // Adjust width as needed
                                />
                                <span style={{ marginLeft: '-30px', fontWeight: "bold" }}>%</span>
                            </div>
                        </label>

                        <label>
                            Monthly insurance: <br />
                            <input
                                type="text"
                                value={`$ ${Number(insurance).toLocaleString()}`}
                                onChange={(e) => setInsurance(+e.target.value.replace(/[^0-9.-]+/g, ""))}
                            />
                        </label>

                        <label>
                            Monthly property tax: <br />
                            <input
                                type="text"
                                value={`$ ${Number(propertyTax).toLocaleString()}`}
                                onChange={(e) => setPropertyTax(+e.target.value.replace(/[^0-9.-]+/g, ""))}
                            />
                        </label>

                        <label>
                            Length of the mortgage: <br />
                            <select value={loanTerm} onChange={(e) => setLoanTerm(+e.target.value)}>
                                {Array.from({ length: 39 }, (_, i) => (i + 2) * 12).map((term) => (
                                    <option key={term} value={term}>
                                        {term} months (or) {term / 12} years
                                    </option>
                                ))}
                            </select>
                            <input
                                type="range"
                                min="24"
                                max="480"
                                value={loanTerm}
                                step="12"
                                onChange={(e) => setLoanTerm(+e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="rightSideBox">
                        <label className="afford_rightSideTop">
                            <span>Home Price: </span>
                            <input
                                type="text"
                                value={`$ ${Number(homePrice.toFixed(2)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                                onChange={(e) => setHomePrice(+e.target.value.replace(/[^0-9.-]+/g, ""))}
                            />
                        </label>

                        <div style={{ textAlign: "center" }}>
                            <PieChart width={600} height={500}>
                                <Pie data={data} dataKey="value" innerRadius={160} outerRadius={220} fill="#8884d8" paddingAngle={1}>
                                    {data.map((_, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    formatter={(value, name) => [`$ ${Number(Math.round(value)).toLocaleString()}`, name]}
                                    cursor={{ fill: 'rgba(255, 255, 255, 0.5)' }}
                                />
                            </PieChart>
                        </div>

                        <div className="affordrightSideBottom">
                            <div><span>Loan Amount: </span><span>${Number((homePrice - downPayment).toFixed(2)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></div>
                            <div><span>Downpayment:</span><span> ${Number(downPayment.toFixed(2)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></div>
                            <div><span>Monthly Payment:</span><span> ${Number(monthlyPayment).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></div>
                        </div>


                        {(homePrice - downPayment) <= 0 && (
                            <div className="affordRightSideBottom RACrightSideBottom00">
                                <div><span style={{ color: "red" }}>Based on industry standards you may not qualify for a home mortgage. You may need to adjust your income or debt obligations.</span></div>
                            </div>
                        )}

                    </div>
                </div>
            </div >
        </div >
    );
};

export default AffordCalculator;
