import React, { useEffect, useState, useCallback, useMemo } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const MortgageCalculator = () => {
    const [homePrice, setHomePrice] = useState(500000);
    const [downPayment, setDownPayment] = useState(66000);
    const [loanTerm, setLoanTerm] = useState(360);
    const [interestRate, setInterestRate] = useState(6.500);
    const [state, setState] = useState("NONE");
    const [propertyTax, setPropertyTax] = useState(0);
    const [insurance, setInsurance] = useState(0);
    const [hoaFees, setHoaFees] = useState(0);
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const statesList = ["AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "IA", "ID", "IN", "IL", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NE", "NC", "ND", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WB", "WI", "WY"];

    // Define property tax rates for each state (in percentage)
    const statePropertyTaxRates = useMemo(() => ({
        AK: 1.19, AL: 0.40, AR: 0.63, AZ: 0.60, CA: 0.74, CO: 0.52, CT: 1.70, DE: 0.55, FL: 0.83, GA: 0.87, HI: 0.27, IA: 1.29, ID: 0.77, IL: 2.30, IN: 0.87, KS: 1.36, KY: 0.81, LA: 0.51, MD: 1.10, MA: 1.09, MI: 1.64, MN: 1.13, MS: 0.81, MO: 0.98, MT: 0.83, NE: 1.76, NV: 0.60, NJ: 2.42, NM: 0.75, NY: 1.68, NC: 0.85, ND: 0.92, OH: 1.57, OK: 0.87, OR: 1.07, PA: 1.35, RI: 1.63, SC: 0.57, SD: 1.32, TN: 0.71, TX: 1.81, UT: 0.66, VA: 0.80, VT: 1.86, WA: 0.93, WV: 0.59, WI: 1.68, WY: 0.57
    }), []);

    useEffect(() => {
        if (state !== "NONE") {
            const taxRate = statePropertyTaxRates[state] || 0;
            const calculatedTax = (homePrice * taxRate) / 100;
            setPropertyTax(calculatedTax);
        } else {
            setPropertyTax(0);  // Reset property tax if no state is selected
        }
    }, [state, homePrice, statePropertyTaxRates]);  // Now statePropertyTaxRates is stable and memoized


    const calculateEMI = useCallback(() => {
        const principal = homePrice - downPayment;
        const monthlyInterest = interestRate / 100 / 12;
        const numPayments = loanTerm;

        const monthlyEMI =
            monthlyInterest === 0
                ? principal / numPayments
                : (principal * monthlyInterest * Math.pow(1 + monthlyInterest, numPayments)) /
                (Math.pow(1 + monthlyInterest, numPayments) - 1);

        const estimatedPayment = monthlyEMI + propertyTax / 12 + insurance + hoaFees;
        setMonthlyPayment(estimatedPayment.toFixed(2));
    }, [homePrice, downPayment, loanTerm, interestRate, propertyTax, insurance, hoaFees]);

    useEffect(() => {
        calculateEMI();
    }, [calculateEMI]);


    const handleMonthlyPaymentChange = (newMonthlyPayment) => {
        setMonthlyPayment(newMonthlyPayment);

        const monthlyInterest = interestRate / 100 / 12;
        const numPayments = loanTerm;
        const adjustedMonthlyPayment = newMonthlyPayment - propertyTax / 12 - insurance - hoaFees;

        const newPrincipal = monthlyInterest === 0
            ? adjustedMonthlyPayment * numPayments
            : adjustedMonthlyPayment * (Math.pow(1 + monthlyInterest, numPayments) - 1) / (monthlyInterest * Math.pow(1 + monthlyInterest, numPayments));

        const newHomePrice = newPrincipal + downPayment;
        setHomePrice(newHomePrice.toFixed(0));
    };


    const data = [
        { name: "Principal & Interest", value: parseFloat(monthlyPayment) - propertyTax / 12 - insurance - hoaFees },
        { name: "Property Tax", value: propertyTax / 12 },
        { name: "Homeowner's Insurance", value: insurance },
        { name: "HOA Fees", value: hoaFees },
    ];

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
    const hoverBackgroundColor = ["#005bb5", "#008a7f", "#cc9600", "#cc5f29"];

    return (
        <div className="mortgageCalculatorParent">
            <div className="mortgageCalculator" style={{ display: "flex" }}>
                <div className="mortgageCalculatorHeaderContent">
                    <span className="mortgageCalculatorHeader">Monthly Payment Mortgage Calculator*</span>
                    <span className="mortgageCalculatorContent">Use this calculator to see monthly payments for different loan amounts.</span>
                </div>
                <div className="mortgageCalculatorBox">

                    <div className="leftSideBox" style={{ flex: 1, padding: "20px" }}>
                        <label>
                            Home Price: <br />
                            <input
                                type="text"
                                min="0"
                                value={`$ ${Number(homePrice).toLocaleString()}`}
                                onChange={(e) => setHomePrice(+e.target.value.replace(/[^0-9.-]+/g, ""))}
                            />
                            <input
                                type="range"
                                min="0"
                                max="2000000"
                                step="1"
                                value={homePrice}
                                onChange={(e) => setHomePrice(+e.target.value)}
                                style={{ width: "100%" }}
                            />
                        </label>
                        <label>
                            Down Payment: <br />
                            <span>
                                <input
                                    type="text"
                                    min="0"
                                    value={`$ ${Number(downPayment).toLocaleString()}`}
                                    onChange={(e) => setDownPayment(+e.target.value.replace(/[^0-9.-]+/g, ""))}
                                />
                            </span>
                        </label>

                        <label>
                            Length of Loan: <br />
                            <select value={loanTerm} onChange={(e) => setLoanTerm(+e.target.value)}>
                                {Array.from({ length: 29 }, (_, i) => (i + 2) * 12).map((term) => (
                                    <option key={term} value={term}>
                                        {term} months (or) {term / 12} years
                                    </option>
                                ))}
                            </select>
                            <input
                                type="range"
                                min="24"
                                max="360"
                                step="12"
                                value={loanTerm}
                                onChange={(e) => setLoanTerm(+e.target.value)}
                                style={{ width: "100%" }}
                            />
                        </label>

                        <label>
                            Interest Rate (%): <br />
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
                        </label>

                        <label>
                            State: <br />
                            <select value={state} onChange={(e) => setState(e.target.value)}>
                                <option value="NONE">-Please Select-</option>
                                {statesList.map((s) => (
                                    <option key={s} value={s}>
                                        {s}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label>
                            Property Tax: <br />
                            <input
                                type="text"
                                min="0"
                                value={`$ ${Number(Math.round(propertyTax / 12)).toLocaleString()}`}  // Display monthly property tax
                                onChange={(e) => {
                                    const monthlyTax = +e.target.value.replace(/[^0-9.-]+/g, "");  // Parse the input value
                                    setPropertyTax(monthlyTax * 12);  // Multiply by 12 to get the annual tax
                                }}
                            // readOnly // Make it read-only since it will be calculated based on state and home price
                            />
                        </label>

                        <label>
                            Homeowner's Insurance: <br />
                            <input
                                type="text"
                                min="0"
                                value={`$ ${Number(insurance).toLocaleString()}`}
                                onChange={(e) => setInsurance(+e.target.value.replace(/[^0-9.-]+/g, ""))}
                            />
                        </label>
                        <label>
                            HOA Fees: <br />
                            <input
                                type="text"
                                min="0"
                                value={`$ ${Number(hoaFees).toLocaleString()}`}
                                onChange={(e) => setHoaFees(+e.target.value.replace(/[^0-9.-]+/g, ""))}
                            />
                        </label>
                    </div>

                    <div className="rightSideBox" style={{ flex: 1, padding: "20px", textAlign: "center" }}>
                        {/* <p className="rightSideHeader">
                            <span className="rightSideHeaderPrice">{`$ ${Number(Math.round(monthlyPayment)).toLocaleString()}`}</span>
                            <span>Your estimated monthly payment</span>
                        </p> */}
                        <p className="rightSideHeader">
                            <span className="rightSideHeaderPrice">{`$ ${Number(Math.round(monthlyPayment)).toLocaleString()} `}</span>
                            <span>Your estimated monthly payment</span>
                        </p>

                        <input
                            type="range"
                            min="300"
                            max="9000"
                            step="1"
                            value={monthlyPayment}
                            onChange={(e) => handleMonthlyPaymentChange(+e.target.value)}
                            style={{ width: "100%" }}
                        />

                        <div style={{ display: "inline-block", position: "relative", marginLeft: "30px" }}>
                            <div style={{ textAlign: "center", marginBottom: "10px" }}>
                                <Legend
                                    layout="horizontal"
                                    verticalAlign="top"
                                    align="center"
                                    payload={data.map((item, index) => ({
                                        value: item.name,
                                        type: "square",
                                        color: COLORS[index % COLORS.length],
                                    }))}
                                />
                            </div>
                            <PieChart width={600} height={500}>
                                <Pie
                                    data={data}
                                    dataKey="value"
                                    innerRadius={160}
                                    outerRadius={220}
                                    fill="#8884d8"
                                    paddingAngle={1}
                                >
                                    {data.map((_, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={hoveredIndex === index ? hoverBackgroundColor[index % hoverBackgroundColor.length] : COLORS[index % COLORS.length]}
                                            onMouseEnter={() => setHoveredIndex(index)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                        />
                                    ))}
                                </Pie>
                                <Tooltip
                                    formatter={(value, name) =>

                                        [`$ ${Number(Math.round(value).toFixed(0)).toLocaleString()}`,
                                            name]}
                                    cursor={{ fill: 'rgba(255, 255, 255, 0.5)' }}
                                    position={{ x: 300, y: 50 }}
                                />
                            </PieChart>

                            <div className="rightSideHeaderPrice" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontWeight: "bold" }}>
                                {`$ ${Number(Math.round(monthlyPayment)).toLocaleString()}`}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MortgageCalculator;
