import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';

const MortgageProcess = () => {
    return (
        <div>
        <Navbar />
        <section className="success" id="about">
          <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center" style={{'margin':'25px 0px'}}>
                    <h1>Getting a Mortgage</h1>
                    <hr className="star-primary"></hr>
                </div>
            </div>
            <div className="row" style={{'margin':'20px 0px'}}>
                <div className="col-lg-12">
                  <div>
                    <p>Obtaining a mortgage&nbsp;can be intimidating and confusing. Similar to the buyer and seller guides, I’ve outlined the mortgage process for you in 4 easy steps!</p>
                    <p><br/></p>
                    <h1><strong>Step 1: Mortgage Application </strong></h1>
                      <p><br/></p>
                      <p>Before an application gets filled out, it’s important to first asses yourself financially. Figure out how much money you have and how much you need to borrow. It’s always critical to sort out how much you can afford so that when you apply for a mortgage you will be able to financially sustain yourself. A mortgage associate will then take an application by phone, in person, or online. Once it has been received, the mortgage application process will begin by verifying the information you have provided.</p>
                      <p><br/></p>
                    <h1><strong>Step 2: Choose the Right Mortgage Program </strong></h1>
                      <p><br/></p>
                      <p>Like all homes, Canadian mortgages also come in all shapes and sizes. You have to pick which loan is more aligned with your financial situation and goals. There are four basic types of Canadian home financing loans.</p><h2><em>A) Fixed Rate Mortgage </em></h2><p>A Fixed Rate mortgage usually has terms that can last from 1 year to 10 years. As the name suggests, the interest rate and monthly payments will remain the same for the specified term.</p><p>This type of loan should appeal to you if you:</p>
                      <p>
                        <ul>
                          <li>Plan to live in the home for more than 5 years</li>
                          <li>Like the stability of a fixed interest payment</li>
                          <li>Think your income and spending will stay the same</li>
                          <li>Don’t like the risk of having a higher monthly payment</li>
                        </ul>
                      </p>
                    <h2><em>B) Adjustable Rate Mortgage </em></h2>
                      <p>Adjustable Rate Mortgage (ARM) lasts for 3-5 years. But during these terms, the interest rate on the loan can go up or down which means monthly payments can increase or decrease.</p>
                      <p>This type of loan should appeal to you if you:&nbsp;</p>
                      <p>
                        <ul>
                          <li>Plan to say in your home for less than 5 years</li>
                          <li>Don’t mind having your monthly payment increase or decrease</li>
                          <li>Are comfortable with risk of possible payment increases in the future</li>
                          <li>Think your income will probably increase in the future</li>
                        </ul>
                      </p>
                    <h2><em>C) Combination Rate Mortgage </em></h2>
                      <p>A Combination Rate Mortgage combines fixed interest rates and adjustable interest rates.</p>
                      <p>This type of loan would appeal to you if you:</p>
                      <p>  <ul>
                          <li>Want to manage interest rate risk</li>
                          <li>Choose to take advantage of both long and short term rates</li>
                          <li>Like the stability of a fixed interest payment</li>
                          <li>Don’t mind having monthly payment increase or decrease</li>
                        </ul>
                      </p>
                    <h2><em>D) Lines of Credit </em></h2>
                      <p>Line of Credit is becoming an innovative way to finance your home purchase. You can take the amount you need from&nbsp;the credit limit that you were granted. You only pay interest on what you use and this money can be put towards things like home renovations, a child’s education, and debt consolidation.</p>
                      <p><br/></p>
                    <h1><strong>Step 3: Mortgage Submission and Approval </strong></h1>
                      <p><br/></p>
                      <p>Once you select the appropriate mortgage program, you will submit this information to your mortgage associate along with any other required documentation. You will then wait for the mortgage approval from the mortgage associate either through email or fax. After the approval, the associate will also review your commitment to the mortgage. Any additional documents that are required by the lender should be sent to the associate no later than 10 days after the approval.</p>
                      <p><br/></p>
                    <h1><strong>Step 4: Lawyer </strong></h1>
                      <p><br/></p>
                      <p>The associate will send the mortgage instructions to your lawyer&nbsp;to review and sign the documents. First you will review all the terms and conditions prior to signing to make sure the interest rate and loan terms are what were promised. Double check to see that the names and address are correctly spelled on the documents. Signing takes place in front of a notary public or lawyer. There will be several fees with obtaining a mortgage and transferring property ownership which will be paid at closing. Bring a bank draft check for the down payment and closing costs if required. Personal cheques are not accepted. You will also need to show homeowners insurance policy and other requirements such as flood or fire insurance and proof of payment.</p></div>
                </div>
            </div>
          </div>
        </section>
        <Footer />
        </div>
    );
}
export default MortgageProcess;
