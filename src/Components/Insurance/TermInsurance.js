import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';

const TermInsurance = () => {
    return (
        <div>
        <Navbar />
        <section className="success" id="about">
          <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center" style={{'margin':'25px 0px'}}>
                    <h1>Term Life Insurance</h1>
                    <hr className="star-primary"></hr>
                </div>
            </div>
            <div className="row" style={{'margin':'20px 0px'}}>
                <div className="col-lg-12">
                  <h2>What is term life insurance?</h2>
                    <p>Term life insurance has premiums that are level for specific periods of time. The period of the time is the ‘term’. At the end of the period, most term life insurance policies have premiums that increase to a new level, then are again level for another term. For example, 5 year term would have premiums that are level for 5 years, increasing every 5 years.</p>
                    <p>You can think of term life insurance premiums as having premiums that look like a staircase, with steps going up every 5 or 10 years (or whatever the term is). The difference between most term products is how the premiums are structured – not the coverage.</p>
                  <h2>Renewable and Convertible Term Life Insurance</h2>
                    <p>Term life insurance is often referred to as renewable and covertible term life insurance, where the renewability and conversion are two specific features common to most (but not all) term life insurance polices in Canada.</p>
                    <p>Renewable term policies are policies that automatically renew at the end of the term. For 10 year term life insurance, in year 11 the insurance will automatically renew for another 10 years (though at higher premiums). Previously renewability was an important feature of term life insurance, however it has become less important in the last 15 years. Renewal premiums on term life insurance policies are so high that most consumers are unwilling to pay the premiums at renewal. Up to the mid-90’s renewal premiums were much lower and it made sense to simply renew your term policy rather than shopping for a new one.</p>
                    <p>Conversion however, is still an important feature in today’s term policies. Convertible term life insurance offers a policy provision where (up to a specific age) you can swap your term policy for a permanent policy, without a medical exam. You can think of this provision as a ‘waiver of medical evidence’ option. While this may not be a feature you intend to use, it’s a must-have provision to be used in some worst-case scenarios. For example, if you have a term life insurance policy and later develop a medical condition that renders you uninsurable, a convertible term life insurance policy allows you to swap your term policy for a permanent life insurance policy with no medical exam. Conversion is offered by most Canadian life insurance companies for free with their term policies.</p>
                  <h2>Expiry Date</h2>
                    <p>Term policies also have an expiry date, a date past which the coverage is no longer available.</p>
                    <p>With increasing premiums over time and an expiry date, term insurance is a viable option for those seeking life insurance for a specific period of time, say 10,20, or 30 years. Term life insurance will provide lower cost insurance over those periods of time than other alternatives.</p>
                  <h2>Types of Term Life Insurance</h2>
                    <p>Term life insurance products are available in a variety of terms. Common terms are 5 year insurance, 10 year term insurance, 20 year term insurance, and 30 year term insurance.</p>
                    <p>Ideally the best term to choose is the period that best reflects how long you expect to keep the insurance. If you intend to keep the insurance for 20 years, then 20 year term should be the product you would consider.</p>
                  <h2>Examples</h2>
                    <p>Young family in their late 20’s, young children. Seeking insurance to look after children and cover mortgage. 30 year term life insurance should be a consideration</p>
                    <p>Family in their late 30’s and 40’s with younger children. Looking for insurance coverage while children are dependents and until income earners are close to retirement. 20 year term life insurance would be a consideration.</p>
                    <p>People in their late 40’s and 50’s seeking coverage until their mortgage is completely paid off, children are through post-secondary school, and they are close to retirement. 10 year term life insurance would be a consideration.</p>
                    <p>People in their 60’s looking to cover a short term debt such as a line of credit. 5 year term life insurance may be a consideration.</p>
                  <h2>Is Term Life insurance right for you?</h2>
                      <ul>
                        <p>
                        <li>Focused on affordability and value</li>
                        <li>In need of temporary protection (for example, to cover a mortgage or business loan, or until children are finished school)</li>
                        <li>Business owners with a need for key person protection and/or to fund buy/sell agreements</li>
                        </p>
                      </ul>
                  <h2>What is Permanent Life insurance?</h2>
                      <p>Permanent life insurance is often called whole life insurance because it provides lifetime coverage – with the added benefit of accumulating cash value over time. Permanent insurance costs are usually guaranteed when you first buy the policy. And some permanent insurance plans enable you to pay for a limited number of years and then never again. Universal life and participating life are other forms of permanent life insurance that you may want to consider.</p>
                  <h2>Is Permanent Life insurance right for you?</h2>
                    <p>Permanent life insurance is well suited to meet the needs of people who are:</p>
                    <ul>
                      <p>
                      <li>Interested in lifetime coverage, cash values and level premiums</li>
                      <li>In need of a permanent guarantee that will help protect family and loved ones, cover final expenses and enable them to otherwise plan their estate</li>
                      <li>Looking for a less expensive option than participating life insurance</li>
                      </p>
                    </ul>
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
export default TermInsurance;
