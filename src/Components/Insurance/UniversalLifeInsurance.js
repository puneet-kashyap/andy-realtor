import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';

const UniversalLifeInsurance = () => {
    return (
        <div>
        <Navbar />
        <section className="success" id="about">
          <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center" style={{'margin':'25px 0px'}}>
                    <h1>Universal Life Insurance</h1>
                    <hr className="star-primary"></hr>
                </div>
            </div>
            <div className="row" style={{'margin':'20px 0px'}}>
                <div className="col-lg-12">
                  <h2>What is Universal Life Insurance?</h2>
                      <p>Universal life insurance is type of flexible permanent life insurance offering the low-cost protection of term life insurance as well as a savings element (like whole life insurance), which is invested to provide a cash value buildup. The death benefit, savings component and premiums can be reviewed and altered as a policyholder&apos;s circumstances change. Unlike whole life insurance, universal life insurance allows the policyholder to use the interest from his accumulated savings to help pay premiums over time.</p>
                  <h2>BREAKING DOWN 'Universal Life Insurance'</h2>
                      <p>Universal life insurance was created under the umbrella of permanent life insurance options to provide more flexibility than whole life insurance. Premiums within a universal life insurance policy are broken down by the insurance company into two categories: the cost of insurance and a saving component known as the cash value. The cost of insurance must be covered so the policy remains in force, but premiums may be shifted over time based on the policyholder&apos;s needs. Premiums paid over the minimum cost of insurance accumulate within the cash value portion of the policy, and funds can be used to pay premiums. For example, if the savings portion is earning a low return, it can be used instead of external funds to pay the premiums. As long as the minimum cost of insurance is covered, either through paid premiums or cash value, the policy is guaranteed for as long as the initial contract dictates.</p>
                  <h2>Cash Value within Universal Life</h2>
                      <p>Although whole life insurance and universal life insurance both fall into the category of permanent coverage, the differences between the two lie in how the cash value accumulates. Under a universal life insurance policy, the insurance company issuing the policy establishes an interest rate minimum, stated within each individual contract. Should the insurance company&apos;s portfolio outperform the minimum interest rate, excess earnings may be applied to the cash value of a policy. The potential to earn more than the minimum crediting interest rate differentiates universal life insurance from whole life.</p>
                      <p>As cash value accumulates over time, policyholders can access a portion of the balance without affecting the guaranteed death benefit. Life insurance policy loans allow policyholders to borrow against accumulated cash value within a universal life policy without any tax implications. However, any policy loan not repaid may reduce the total death benefit issued to beneficiaries. Cash value may also be accessed as a withdrawal, but the policyholder may incur a tax liability in doing so.</p>
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
export default UniversalLifeInsurance;
