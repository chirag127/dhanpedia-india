import fs from 'node:fs';
import path from 'node:path';

// Complete 556 canonical topics from Prompt 005 Part III
const categoriesMeta = {
  A: { id: 'personal-finance', name: 'Personal-Finance Foundations', range: [1, 24] },
  B: { id: 'banking-systems', name: 'Banking and Payment Systems', range: [25, 52] },
  C: { id: 'credit-borrowing', name: 'Credit, Borrowing, and Debt', range: [53, 82] },
  D: { id: 'credit-cards', name: 'Credit Cards and Consumer Finance', range: [83, 100] },
  E: { id: 'saving-liquidity', name: 'Saving and Liquidity Management', range: [101, 114] },
  F: { id: 'investment-foundations', name: 'Investment Foundations', range: [115, 132] },
  G: { id: 'securities-infrastructure', name: 'Indian Securities-Market Infrastructure', range: [133, 146] },
  H: { id: 'equity-investing', name: 'Equity and Stock-Market Investing', range: [147, 176] },
  I: { id: 'mutual-funds', name: 'Mutual Funds', range: [177, 212] },
  J: { id: 'bonds-fixed-income', name: 'Bonds and Fixed Income', range: [213, 238] },
  K: { id: 'precious-metals', name: 'Gold, Silver, and Commodities', range: [239, 257] },
  L: { id: 'real-estate', name: 'Real Estate and Property', range: [258, 282] },
  M: { id: 'life-insurance', name: 'Insurance Foundations and Life Insurance', range: [283, 304] },
  N: { id: 'health-insurance', name: 'Health and General Insurance', range: [305, 328] },
  O: { id: 'taxation-compliance', name: 'Taxation and Compliance', range: [329, 358] },
  P: { id: 'retirement-wealth', name: 'Retirement and Long-Term Wealth', range: [359, 376] },
  Q: { id: 'estate-planning', name: 'Family, Life Stages, and Estate Planning', range: [377, 396] },
  R: { id: 'business-finance', name: 'Entrepreneurship and Small-Business Finance', range: [397, 418] },
  S: { id: 'international-finance', name: 'International Personal Finance', range: [419, 434] },
  T: { id: 'alternative-investments', name: 'Alternative and Specialized Investments', range: [435, 454] },
  U: { id: 'financial-mathematics', name: 'Financial Mathematics and Investment Evaluation', range: [455, 474] },
  V: { id: 'macroeconomics', name: 'Economics and Household Financial Conditions', range: [475, 487] },
  W: { id: 'digital-finance', name: 'Digital Finance and Cybersecurity', range: [488, 502] },
  X: { id: 'fraud-regulation', name: 'Financial Regulation, Fraud, and Illegal Schemes', range: [503, 530] },
  Y: { id: 'consumer-protection', name: 'Consumer Protection and Financial Rights', range: [531, 542] },
  Z: { id: 'advanced-integration', name: 'Advanced Financial Planning and Integration', range: [543, 556] }
};

const topicTitles = [
  // A (1-24)
  "What Personal Finance Means", "How Money Works in Modern India", "Financial Goals and Priorities",
  "Managing Income and Expenses", "Household Cash Flow", "Understanding Net Worth",
  "Needs, Wants, and Discretionary Spending", "Budgeting Methods and Their Trade-Offs",
  "Savings Rates and Financial Resilience", "Emergency Funds and Liquidity",
  "Inflation and Purchasing Power", "Nominal and Real Returns",
  "Opportunity Cost in Financial Decisions", "Lifestyle Inflation",
  "Financial Independence and Financial Freedom", "Financial Recordkeeping",
  "Household Financial Planning", "Financial Planning for Irregular Income",
  "Financial Planning During Unemployment", "Financial Planning for Low-Income Households",
  "Financial Planning for High-Income Households", "Financial Stress and Decision-Making",
  "Behavioral Biases in Personal Finance", "Financial Planning Checklists and Review Practices",

  // B (25-52)
  "The Indian Banking System", "Savings Accounts", "Salary Accounts", "Current Accounts",
  "Basic Banking Accounts", "Fixed Deposits", "Recurring Deposits", "Sweep Deposits and Linked Accounts",
  "Deposit Interest and Compounding", "Premature Deposit Withdrawal", "Deposit Insurance in India",
  "Bank Versus NBFC Products", "Small Finance Banks", "Payments Banks", "Cooperative Banks",
  "Digital Banking", "Unified Payments Interface", "IMPS, NEFT, and RTGS", "Debit Cards and Card Networks",
  "Credit Cards as Payment Instruments", "Wallets and Prepaid Payment Instruments",
  "Payment Failures, Reversals, and Disputes", "Banking Service Charges",
  "Nomination and Joint Bank Accounts", "Dormant Accounts and Unclaimed Deposits",
  "Foreign Currency Accounts and Remittances", "Banking Complaints and Grievance Redressal",
  "Banking Fraud and Account Security",

  // C (53-82)
  "Credit Reports in India", "Credit Scores and Their Limitations", "Improving Creditworthiness",
  "Personal Loans", "Home Loans", "Loan Against Property", "Vehicle Loans", "Education Loans",
  "Gold Loans", "Loans Against Securities", "Business Loans", "Secured and Unsecured Borrowing",
  "Loan Interest Rates and Total Borrowing Costs", "Flat Rates and Reducing-Balance Rates",
  "Loan Tenure and Repayment Structures", "Loan Prepayment and Foreclosure",
  "Loan Refinancing and Balance Transfers", "Debt Consolidation", "Debt-to-Income and Affordability",
  "Credit Utilization and Credit Limits", "Credit Inquiries and Credit Applications",
  "Loan Guarantees and Co-Borrowing", "Collateral and Security Enforcement",
  "Loan Defaults and Collections", "Debt Restructuring and Settlement",
  "Predatory Lending and Unlawful Lending", "Digital Lending Apps",
  "Loan Agreement Fees and Ambiguous Charges", "Credit Disputes and Error Correction",
  "Managing Debt Without Creating New Debt",

  // D (83-100)
  "How Credit Cards Work", "Credit-Card Billing Cycles", "Interest-Free Periods and Grace Periods",
  "Minimum Amount Due and Revolving Debt", "Credit-Card Interest and Fees",
  "Cash Advances and Card-Based Borrowing", "Credit-Card EMI Conversions",
  "Credit-Card Rewards and Cashback", "Reward Points, Miles, and Redemption",
  "Credit-Card Annual Fees and Waivers", "Foreign Currency Card Transactions",
  "Credit-Card Fraud and Unauthorized Transactions", "Chargebacks and Payment Disputes",
  "Credit Cards and Credit Scores", "Multiple Credit Cards and Account Management",
  "Credit-Card Debt Traps", "Consumer Financing and Buy Now, Pay Later",
  "Responsible Use of Consumer Credit",

  // E (101-114)
  "Saving Versus Investing", "Emergency Liquidity Planning", "Cash Management for Households",
  "Liquid Mutual Funds", "Overnight Mutual Funds", "Money Market Instruments",
  "Treasury Bills for Individual Investors", "Short-Term Capital Preservation",
  "Liquidity Risk in Financial Products", "Bank Deposits Versus Cash Alternatives",
  "Managing Cash Across Financial Institutions", "Unclaimed Financial Balances",
  "Short-Term Financial Goal Planning", "Inflation Risk in Cash Holdings",

  // F (115-132)
  "Why People Invest", "The Relationship Between Risk and Expected Return",
  "Investment Time Horizons", "Risk Tolerance and Risk Capacity", "Asset Classes and Investment Vehicles",
  "Diversification", "Asset Allocation", "Rebalancing", "Liquidity and Marketability",
  "Investment Costs and Fees", "Investment Fraud and Unrealistic Returns", "Investing Versus Speculation",
  "Investment Research and Due Diligence", "Understanding Investment Disclosures",
  "Portfolio Concentration", "Long-Term Investing and Behavioral Discipline",
  "How Financial Markets Connect Investors and Borrowers", "Choosing Investments for Different Goals",

  // G (133-146)
  "How Indian Securities Markets Work", "Primary Markets and Secondary Markets", "Stock Exchanges",
  "Brokers and Trading Accounts", "Depositories and Dematerialized Securities",
  "Clearing Corporations and Settlement", "Registrars and Transfer Agents",
  "Custodians and Trustees", "Securities Issuers and Public Disclosures",
  "Market Orders and Limit Orders", "Bid-Ask Spreads and Trading Liquidity",
  "Corporate Actions", "Investor Complaints in Securities Markets", "Investor Protection and Its Limitations",

  // H (147-176)
  "What Owning Shares Means", "Initial Public Offerings", "Follow-On Public Offerings",
  "Rights Issues and Preferential Issues", "Dividends and Shareholder Distributions",
  "Buybacks, Splits, and Bonus Shares", "Reading Financial Statements",
  "Revenue, Earnings, and Profitability", "Cash Flow and Balance-Sheet Strength",
  "Business Quality and Competitive Advantages", "Equity Valuation Concepts",
  "Price-to-Earnings and Other Valuation Measures", "Growth Investing", "Value Investing",
  "Quality Investing", "Momentum Investing", "Factor Investing",
  "Small-Cap, Mid-Cap, and Large-Cap Investing", "Sector Investing and Concentration",
  "Dividend Investing", "Corporate Governance and Minority Shareholders",
  "Equity Research and Analyst Conflicts", "Market Volatility and Drawdowns",
  "Behavioral Mistakes in Stock Investing", "Equity Portfolio Construction",
  "Stock-Market Transaction Costs and Taxes", "Unlisted Shares and Their Risks",
  "Employee Stock Options and Equity Compensation", "Short Selling and Market Abuse",
  "Insider Trading and Compliance",

  // I (177-212)
  "How Mutual Funds Work in India", "Mutual Fund Structure and Service Providers",
  "Direct and Regular Mutual Fund Plans", "Growth and Distribution Options", "Net Asset Value",
  "Mutual Fund Expense Ratios", "Exit Loads and Transaction Costs", "Mutual Fund Scheme Documents",
  "Mutual Fund Factsheets", "Equity Mutual Funds", "Debt Mutual Funds", "Hybrid Mutual Funds",
  "Index Mutual Funds", "Exchange-Traded Funds", "Fund-of-Funds", "Sectoral and Thematic Funds",
  "International Mutual Funds", "Small-Cap and Mid-Cap Funds", "Large-Cap and Flexi-Cap Funds",
  "Value and Contra Funds", "Tax-Saving Mutual Funds", "Systematic Investment Plans",
  "Systematic Transfer Plans", "Systematic Withdrawal Plans", "Mutual Fund Redemption and Settlement",
  "Mutual Fund Benchmarking", "Tracking Error and Tracking Difference",
  "Portfolio Overlap and Diversification", "Fund-Manager Risk and Style Drift",
  "Mutual Fund Performance Evaluation", "Mutual Fund Taxation", "Mutual Fund Nomination and Ownership",
  "Mutual Fund Due Diligence", "Common Mutual Fund Selection Mistakes",
  "Active Versus Passive Investing", "ETFs Versus Index Mutual Funds",

  // J (213-238)
  "Understanding Bonds and Debt Securities", "Government Securities", "Treasury Bills",
  "State Development Loans", "Corporate Bonds", "Public-Sector Debt Instruments",
  "Secured and Unsecured Bonds", "Senior and Subordinated Debt", "Coupon Rates and Bond Yields",
  "Yield to Maturity and Realized Returns", "Bond Prices and Interest Rates",
  "Duration and Interest-Rate Risk", "Convexity and Bond Sensitivity",
  "Credit Ratings and Rating Limitations", "Credit Spreads and Default Risk",
  "Bond Liquidity and Secondary Markets", "Floating-Rate and Callable Bonds",
  "Zero-Coupon Bonds", "Bond Ladders and Maturity Management",
  "Direct Bonds Versus Debt Mutual Funds", "Debt-Fund Credit Risk",
  "Debt-Fund Duration and Maturity", "Yield Curves and Interest-Rate Cycles",
  "Fixed-Income Taxation", "Fixed-Income Portfolio Construction", "Corporate Debt Due Diligence",

  // K (239-257)
  "Gold as an Investment", "Silver as an Investment", "Physical Bullion and Precious-Metal Purity",
  "Jewellery Costs and Resale Value", "Gold Exchange-Traded Funds", "Gold Fund-of-Funds",
  "Silver Exchange-Traded Funds", "Silver Fund-of-Funds", "Sovereign-Linked Precious-Metal Products",
  "Precious-Metal Storage and Security", "Domestic and International Metal Prices",
  "Currency Effects in Precious-Metal Investing", "Commodity Futures and Options",
  "Commodity-Market Margin and Leverage", "Commodity Storage, Financing, and Market Structure",
  "Contango and Backwardation", "Precious-Metal Taxation", "Counterfeit Metals and Investment Fraud",
  "Precious Metals in Portfolio Diversification",

  // L (258-282)
  "Real Estate as an Investment", "Residential Property Investing", "Commercial Property Investing",
  "Land as an Investment", "Agricultural Land and Ownership Restrictions",
  "Rental Property Economics", "Rental Yield and Net Operating Income",
  "Property Maintenance and Vacancy Risk", "Property Taxes and Transaction Costs",
  "Stamp Duty and Registration", "Property Title and Encumbrance Verification",
  "Land-Use Rules and Building Approvals", "Home Loans and Property Leverage",
  "Tenant Risk and Rental Agreements", "Property Management", "Real Estate Investment Trusts",
  "Infrastructure Investment Trusts", "Fractional Property Ownership",
  "Real-Estate Crowdfunding and Legal Status", "Property Liquidity and Exit Costs",
  "Environmental and Disaster Risk in Property", "Property Fraud and Illegal Transactions",
  "Property Inheritance and Succession", "Real Estate Versus Financial Investments", "Real-Estate Taxation",

  // M (283-304)
  "How Insurance Works", "Insurance Risk Pooling", "Premiums, Coverage, and Policy Conditions",
  "Underwriting and Disclosure Duties", "Exclusions, Waiting Periods, and Deductibles",
  "Insurance Lapses, Grace Periods, and Revival", "Insurance Claims and Disputes",
  "Insurance Mis-Selling", "Insurance Intermediaries and Conflicts", "Term Life Insurance",
  "Whole-Life Insurance", "Endowment and Money-Back Policies", "Participating and Non-Participating Policies",
  "Unit-Linked Insurance Plans", "Group Life Insurance", "Credit-Life and Loan-Protection Insurance",
  "Life-Insurance Riders", "Life-Insurance Beneficiaries and Nomination",
  "Insurance Surrender and Paid-Up Policies", "Life-Insurance Taxation",
  "Insurance Replacement and Policy-Switching Risks", "Life-Insurance Due Diligence",

  // N (305-328)
  "Health Insurance in India", "Individual Health Insurance", "Family-Floater Insurance",
  "Employer Health Insurance", "Top-Up and Super-Top-Up Policies",
  "Pre-Existing Conditions and Waiting Periods", "Cashless and Reimbursement Claims",
  "Health-Insurance Exclusions and Sub-Limits", "Health-Insurance Portability and Migration",
  "Critical-Illness Insurance", "Personal Accident and Disability Insurance",
  "Senior-Citizen Health Insurance", "Motor Insurance", "Third-Party and Own-Damage Motor Cover",
  "Home and Property Insurance", "Travel Insurance", "Liability and Professional Indemnity Insurance",
  "Cyber Insurance", "Crop and Agricultural Insurance", "Microinsurance",
  "Insurance Complaints and Ombudsman Processes", "Insurance Fraud and Claim Misrepresentation",
  "Insurance Taxation and Recordkeeping", "Government Health and Insurance Schemes",

  // O (329-358)
  "Indian Income-Tax Architecture", "Tax Years and Assessment Years", "Tax Regimes for Individuals",
  "Salary Income and Taxation", "House-Property Income", "Business and Professional Income",
  "Interest and Dividend Taxation", "Capital-Gains Taxation", "Mutual Fund Taxation",
  "Securities and Transaction Levies", "Bond and Deposit Taxation", "Gold and Silver Taxation",
  "Real-Estate Taxation", "Insurance and Retirement Taxation", "Deductions, Exemptions, and Rebates",
  "Tax Deducted at Source", "Advance Tax and Self-Assessment", "Income-Tax Return Filing",
  "Revised and Belated Returns", "Tax Notices and Assessments", "Tax Appeals and Dispute Resolution",
  "Set-Off and Carry-Forward of Losses", "Tax Residency and Non-Resident Taxation",
  "Foreign Income and Asset Reporting", "Double-Taxation Agreements",
  "GST in Personal and Small-Business Finance", "Gift Taxation and Wealth Transfers",
  "Tax Planning Versus Tax Evasion", "Tax Recordkeeping and Compliance", "Tax Changes and Effective-Date Tracking",

  // P (359-376)
  "Retirement Planning Foundations", "Retirement Spending and Inflation", "Retirement Corpus Planning",
  "Longevity Risk", "Sequence-of-Returns Risk", "Employee Provident Fund", "Public Provident Fund",
  "National Pension System", "Atal Pension Yojana", "Gratuity and Employer Retirement Benefits",
  "Annuities and Retirement Income", "Retirement Withdrawals and Income Planning",
  "Retirement Asset Allocation", "Retirement Healthcare Costs", "Early Retirement and Financial Independence",
  "Retirement Planning for Self-Employed People", "Pension Taxation", "Survivor Benefits and Retirement Security",

  // Q (377-396)
  "Financial Planning for Students", "Financial Planning for First-Job Professionals",
  "Financial Planning for Freelancers", "Financial Planning for Couples",
  "Joint Finances and Financial Autonomy", "Financial Planning for Parents",
  "Financial Planning for Dependents", "Supporting Older Family Members",
  "Financial Planning During Divorce or Separation", "Financial Planning After Bereavement",
  "Wills and Succession", "Nomination Versus Beneficial Ownership", "Gifts and Family Wealth Transfers",
  "Trusts and Estate Planning", "Guardianship and Incapacity Planning", "Digital Assets and Inheritance",
  "Business Succession", "Estate Liquidity and Administration", "Cross-Border Inheritance",
  "Financial Abuse and Household Financial Safety",

  // R (397-418)
  "Personal Versus Business Finances", "Business Banking and Payments", "Sole Proprietorships and Partnerships",
  "LLPs and Companies", "Business Working Capital", "Inventory and Cash Conversion",
  "Receivables and Trade Credit", "MSME Finance", "Government Business Schemes and Subsidies",
  "GST and Business Tax Compliance", "Bookkeeping and Financial Statements", "Business Cash-Flow Forecasting",
  "Business Pricing and Margins", "Break-Even Analysis and Unit Economics", "Business Valuation",
  "Owner Compensation and Profit Distribution", "Business Insurance", "Business Loans and Personal Guarantees",
  "E-Commerce and Digital Payments", "Family-Business Governance", "Business Succession and Exit Planning",
  "Business Fraud and Internal Controls",

  // S (419-434)
  "Currency Risk", "International Diversification", "Overseas Investment Routes",
  "NRI Banking and Financial Accounts", "Cross-Border Remittances", "Foreign-Exchange Rules",
  "Liberalised Remittance Scheme", "Foreign Assets and Income Reporting", "International Tax Residency",
  "Foreign Withholding Taxes", "Cross-Border Property", "Overseas Retirement Accounts",
  "International Insurance", "Cross-Border Inheritance", "FATCA and CRS",
  "Sanctions and Restricted Financial Transactions",

  // T (435-454)
  "Portfolio Management Services", "Alternative Investment Funds", "Private Equity", "Venture Capital",
  "Private Credit", "Structured Financial Products", "Market-Linked Debentures", "Peer-to-Peer Lending",
  "Invoice Discounting and Receivables Finance", "Startup Investing", "Unlisted Securities",
  "Employee Stock Options", "Digital Assets and Crypto-Related Exposure", "Tokenized Financial Claims",
  "Collectibles and Alternative Assets", "Investment Product Eligibility and Retail Access",
  "Alternative-Investment Valuation", "Illiquidity and Exit Restrictions", "Counterparty Risk in Specialized Products",
  "Emerging Investment Products and Regulatory Status",

  // U (455-474)
  "Understanding Investment Returns", "Compound Interest in Plain Language", "CAGR and Annualized Returns",
  "IRR and XIRR Concepts", "Money-Weighted and Time-Weighted Returns", "Nominal and Inflation-Adjusted Returns",
  "Fees and Long-Term Wealth", "After-Tax Investment Returns", "Volatility and Drawdowns",
  "Correlation and Diversification", "Risk-Adjusted Performance Measures", "Benchmark Selection",
  "Backtesting and Its Limitations", "Survivorship and Look-Ahead Bias", "Scenario Analysis and Stress Testing",
  "Forecast Uncertainty and Model Risk", "Comparing Investment Products Fairly", "Total Cost of Ownership",
  "Evaluating Advertised Investment Returns", "Financial Data Quality and Research Integrity",

  // V (475-487)
  "Inflation and Household Budgets", "Interest Rates and Household Finance", "Monetary Policy and Financial Markets",
  "Government Borrowing and Bond Markets", "Exchange Rates and Household Purchasing Power",
  "Employment and Wage Growth", "Housing Cycles", "Credit Cycles", "Commodity Cycles",
  "Economic Recessions and Household Resilience", "Demographics and Retirement Systems",
  "Productivity and Long-Term Wealth", "Macroeconomic Forecasts and Their Limitations",

  // W (488-502)
  "Digital Banking Security", "UPI and Payment Fraud", "Phishing and Social Engineering",
  "SIM-Swap and Identity Theft", "Remote-Access Scams", "Deepfake Financial Fraud",
  "Fake Trading and Investment Apps", "Unauthorized Loan Apps", "Financial Data Privacy",
  "Digital KYC and Identity Verification", "Financial APIs and Account Aggregation",
  "AI-Generated Financial Advice", "Automated Trading Tools and Risks", "Cloud and Third-Party Financial Risks",
  "Digital Inheritance and Account Recovery",

  // X (503-530)
  "Indian Financial Regulators and Their Jurisdictions", "Investor Rights and Grievance Redressal",
  "Banking Complaint Mechanisms", "Insurance Complaint Mechanisms", "Securities-Market Complaints",
  "Ponzi Schemes", "Pyramid and Money-Circulation Schemes", "Illegal Deposit-Taking",
  "Fake Investment Advisers", "Guaranteed-Return Fraud", "Pump-and-Dump Schemes",
  "Insider Trading and Market Abuse", "Unauthorized Investment Platforms", "Fake Trading Apps and Clone Websites",
  "Loan Fraud and Forged Documents", "Identity Theft and Account Takeover", "Payment Fraud and Recovery Limits",
  "Insurance Fraud", "Tax Evasion and False Reporting", "Money Laundering and Compliance",
  "Benami Property and Prohibited Transactions", "Fraudulent Subsidy Claims", "Sanctions Evasion and Illegal Transfers",
  "Shell Entities and Financial Misconduct", "Fraudulent Insolvency and Asset Transfers",
  "Illegal Gambling-Related Financial Schemes", "Recognizing and Reporting Financial Crime",
  "Preserving Evidence and Seeking Financial Recovery",

  // Y (531-542)
  "Financial Mis-Selling", "Misleading Financial Advertisements", "Unauthorized Transactions and Consumer Rights",
  "Contract Terms and Financial Agreements", "Financial Grievance Escalation",
  "Consumer Forums and Financial Disputes", "Credit-Report Disputes", "Insurance Claim Disputes",
  "Bank Service Disputes", "Securities-Market Disputes", "Fraud Recovery Expectations",
  "Protecting Older and Vulnerable Consumers",

  // Z (543-556)
  "Building a Complete Household Financial Plan", "Coordinating Insurance, Savings, and Investments",
  "Goal-Based Portfolio Planning", "Financial Planning for Multiple Goals", "Household Risk Management",
  "Financial Independence Planning", "Wealth Preservation", "Wealth Transfer and Legacy Planning",
  "Financial Plans During Major Life Changes", "Annual Financial Review", "Reviewing Financial Products and Fees",
  "Financial Decision-Making Under Uncertainty", "Common Household Financial Planning Failures",
  "Building Long-Term Financial Resilience"
];

function toSlug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function findCategoryForIndex(idx) {
  const num = idx + 1;
  for (const [key, val] of Object.entries(categoriesMeta)) {
    if (num >= val.range[0] && num <= val.range[1]) {
      return { domain: key, ...val };
    }
  }
  return { domain: 'A', id: 'personal-finance', name: 'Personal-Finance Foundations' };
}

const inventory = topicTitles.map((title, idx) => {
  const num = idx + 1;
  const numPadded = String(num).padStart(3, '0');
  const cat = findCategoryForIndex(idx);
  const slug = toSlug(title);
  
  return {
    canonicalNumber: num,
    articleId: `${cat.domain}-${numPadded}`,
    filename: `${numPadded}-${slug}.md`,
    title,
    slug,
    categoryDomain: cat.domain,
    categoryId: cat.id,
    categoryName: `Category ${cat.domain} — ${cat.name}`,
    subcategory: cat.name,
    scope: `Authoritative reference treatise examining ${title} under the sovereign Indian statutory, regulatory, and practical economic framework.`,
    status: num <= 5 ? 'published' : 'planned'
  };
});

fs.mkdirSync('data/articles', { recursive: true });
fs.writeFileSync('data/articles/canonical-inventory.json', JSON.stringify({
  version: '2.0.0',
  totalTopics: inventory.length,
  lastUpdated: new Date().toISOString(),
  topics: inventory
}, null, 2), 'utf8');

console.log(`✓ Generated canonical inventory with exactly ${inventory.length} topics across Domains A through Z.`);
