import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';

const WholeLifeInsurance = () => {
    return (
        <div>
        <Navbar />
        <section className="success" id="about">
          <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center" style={{'margin':'25px 0px'}}>
                    <h1>Whole Life Insurance</h1>
                    <hr className="star-primary"></hr>
                </div>
            </div>
            <div className="row" style={{'margin':'20px 0px'}}>
                <div className="col-lg-12">
                  <h2>What is a 'Whole Life Insurance Policy'?</h2>
                    <p>Whole life insurance is a contract with premiums that includes insurance and investment components. The insurance component pays a predetermined amount when the insured individual dies. The investment component builds an accumulated cash value the insured individual can borrow against or withdraw. This is the most basic type of cash-value life insurance.</p>
                  <h2>BREAKING DOWN 'Whole Life Insurance Policy'</h2>
                    <p>Whole life insurance provides policyholders with the ability to accumulate wealth as regular premium payments cover insurance costs. These payments also contribute to equity growth in a savings account. Dividends, or interest, can build up in this account, tax-deferred. As indicated by its name, whole life insurance protects an individual for his entire life. This is the most basic type of whole life insurance, also known as straight life, traditional or permanent whole life insurance.</p>
                  <h2>Who Needs Whole Life Insurance?</h2>
                    <p>Different types of life insurance fit different people. Whole life insurance is indicated for individuals in a variety of situations. These situations include the need to provide dependent family members with funding after the head of a household dies; to liquidate business debts, mortgages or provide family members with funds to pay down debts; to fund requests from charities; and to ensure cash is instantly or quickly available to surviving family members. There are a variety of other circumstances that may indicate whole life insurance for individuals.</p>
                  <h2>History</h2>
                    <p>For 30 years, from 1940 to 1970, whole life insurance was very common. Policies secured income for the families of the insured in the event of the untimely death of a loved one and helped to subsidize retirement planning. In 1981, the Tax Equity and Fiscal Responsibility Act (TEFRA) became law, and a number of banks and insurance companies became interest sensitive. Individuals questioned putting money in whole life insurance instead of investing in the market where return rates were upwards of 10 to 12%. The majority of individuals, at that time, began investing in the stock market and term life insurance.</p>
                  <h2>Whole Life vs. Term Life</h2>
                    <p>Whole life policies have a living benefit and an accrual of cash that can be borrowed against or withdrawn. However withdrawals will be taxed at the ordinary tax rate, and loans if unpaid at time of death will result in lower death benefits for the beneficiaries. Term life is a temporary insurance which simply provides insurance for the policyholder and offers only a death benefit. While whole life insurance offers coverage for the entire life of the policyholder, term life insurance has a fixed period of time where the premium remains level. Eventually, the premium increases each year to the point it becomes unpayable or the policy simply terminates.</p>
                  <br/>
                    <p>​<b>Would your loved ones be financially impacted if something happened to you?</b></p>
                    <p>If the answer is yes, then you should consider how insurance can give them the protection they need.</p>
                  </div>
            </div>
          </div>
        </section>
        <Footer />
        </div>
    );
}
export default WholeLifeInsurance;
