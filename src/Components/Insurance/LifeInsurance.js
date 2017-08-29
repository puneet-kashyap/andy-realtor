import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';

const LifeInsurance = () => {
    return (
        <div>
        <Navbar />
        <section className="success" id="about">
          <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center" style={{'margin':'25px 0px'}}>
                    <h1>Life Insurance</h1>
                    <hr className="star-primary"></hr>
                </div>
            </div>
            <div className="row" style={{'margin':'20px 0px'}}>
                <div className="col-lg-12">
                  <h2>What is life insurance?</h2>
                    <p>Life insurance is a protection against financial loss that would result from the premature death of an insured. The named beneficiary receives the proceeds and is thereby safeguarded from the financial impact of the death of the insured. The death benefit is paid by a life insurer in consideration for premium payments made by the insured.</p>
                  <h2>BREAKING DOWN 'Life Insurance'</h2>
                    <p>The goal of life insurance is to provide a measure of financial security for your family after you die. So, before purchasing a life insurance policy, consider your financial situation and the standard of living you want to maintain for your dependents or survivors. For example, who will be responsible for your funeral costs and final medical bills? Would your family have to relocate? Will there be adequate funds for future or ongoing expenses such as daycare, mortgage payments and college? It is prudent to re-evaluate your life insurance policies annually or when you experience a major life event like marriage, divorce, the birth or adoption of a child, or purchase of a major item such as a house or business.</p>
                  <h2>How Life Insurance Works</h2>
                    <p>Life insurance is a contract between an individual with an insurable interest and a life insurance company to transfer the financial risk of a premature death to the insurer in exchange for a specified amount of premium. The three main components of the life insurance contract are a death benefit, a premium payment and, in the case of permanent life insurance, a cash value account.</p>
                    <p>Death Benefit: The death benefit is the amount of money the insured’s beneficiaries will receive from the insurer upon the death of the insured. Although the death benefit amount is determined by the insured, the insurer must determine whether there is an insurable interest and whether the insured can qualify for the coverage based on its underwriting requirements.</p>
                    <p>Premium Payment: Using actuarially based statistics, the insurer determines the amount of premium it needs to cover mortality costs. Factors such as the insured’s age, personal and family medical history, and lifestyle are the main risk determinants. As long as the insured pays the premium as agreed, the insurer remains obligated to pay the death benefit. For term policies, the premium amount includes the cost of insurance. For permanent policies, the premium amount includes the cost of insurance plus an amount that is deposited to a cash value account.</p>
                    <p>Cash Value: Permanent life insurance includes a cash value component which serves two purposes. It is a savings account that allows the insured to accumulate capital that can become a living benefit. The capital accumulates on a tax-deferred basis and can be used for any purpose while the insured is alive. It is also used by the insurer to mitigate its risk. As the cash value accumulates, the amount the insurer is at risk for the entire death benefit decreases, which is how it is able to charge a fixed, level premium.</p>
                  <h2>Types of Life Insurance</h2>
                    <p>Life insurance in Canada is split into two broad categories, Term Life insurance and Permanent Life insurance (often referred to as Whole life insurance or Universal Life Insurance). </p>
                  <h2>What is Term Life insurance?</h2>
                    <p>Term life insurance is affordable, easy-to-understand coverage that gives you flexible, temporary protection.<br/>
                        You will be covered for a specific period of time and the cost of your policy is guaranteed for the entire term. If you die while the policy is in effect, your beneficiaries will receive a tax-free payment. And, with most policies, you also have the option to convert your coverage to permanent insurance regardless of any changes to your health, occupation or lifestyle.</p>
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
                    <p>If the answer is yes, then you should consider how life insurance can give them the protection they need.</p>
                  </div>
            </div>
          </div>
        </section>
        <Footer />
        </div>
    );
}
export default LifeInsurance;
