import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';

const CriticalIllnessInsurance = () => {
    return (
        <div>
        <Navbar />
        <section className="success" id="about">
          <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center" style={{'margin':'25px 0px'}}>
                    <h1>Critical Illness Insurance</h1>
                    <hr className="star-primary"></hr>
                </div>
            </div>
            <div className="row" style={{'margin':'20px 0px'}}>
                <div className="col-lg-12">
                  <h2>What is critical illness insurance?</h2>
                    <p>Thanks to modern medicine, more people survive serious illness. Unfortunately, the costs associated with recovery can place a strain on the financial resources of you and your loved ones.</p>
                    <p>Consider this sobering statistic: one in 2.2 men and one in 2.4 women living in Canada will develop cancer during their lifetime.</p>
                      <ol>
                        <p>
                          <li>However, 63 per cent of Canadians diagnosed with cancer are expected to survive.</li>
                          <li>Critical illness insurance is a form of protection that can provide you with a tax-free lump sum payment to use however you need while recovering from a life-altering illness. You can use this money in whatever way you need while you recover.</li>
                        </p>
                      </ol>
                  <h2>Who is it for?</h2>
                    <p>Critical illness insurance can be suitable for anyone seeking financial protection to help cover the costs associated with recovering from a life-altering illness. It can also be suitable for those looking to protect loved ones in the event they experience a critical illness.</p>
                  <h2>How does it work?</h2>
                    <p>You receive the tax-free lump sum payment if you meet the survival period requirement for a covered critical illness and are free to spend money as you choose — such as to help cover lost income, to pay for private nursing or out-of-country treatment, for medical equipment or even to pay off your mortgage. It can help you where you need it most so you can focus all your energy on recovering.</p>
                  <h2>How does it benefit you and your family?</h2>
                    <p>The physical and emotional strain of a critical illness like heart disease or cancer can be severe. When you combine that with the potentially damaging financial impact, the result can be devastating. You might face additional costs beyond maintaining your current lifestyle – things such as childcare, medication or home modifications. You need to assess how realistic it is to rely on options such as your spouse, your retirement savings, the sale of assets or even the government to help meet these extra expenses. There are additional benefits from critical illness insurance such as:</p>
                  <h2>Receiving support services</h2>
                    <p>Some companies have services built into their policies that can help you cope during this difficult time. For example, ShepellTM provides counselling, while Best Doctors® gives you access to a network of 53,000 peer-nominated physicians who can provide you with an expert medical opinion about the right diagnosis and treatment.</p>
                  <h2>Coverage for uncovered expenses </h2>
                      <p>Canadians benefit from a stable, well-funded healthcare system. But it doesn’t cover everything. You may be required to pay for certain drug prescriptions, or other treatments out-of-pocket. Critical illness insurance can help offset some of those costs.</p>
                  <h2>Getting your money back</h2>
                      <p>Some companies offer a return of premium option that could allow you to receive up to 100% of your money back if you don’t experience a covered critical illness.</p>
                  <h2>Protecting your retirement</h2>
                    <p>The costs associated with a critical illness can quickly eat into your retirement savings. You might have to retire with less and modify your lifestyle, or stay at work longer. Critical illness insurance offers financial relief that can help you keep your retirement plans on track. For example, you could use the lump sum payment from critical illness insurance to supplement lost income or cover private nursing costs, rather than dipping into your nest egg.</p>
                    <ol>
                      <p>
                      <li>Canadian Cancer Society, Canadian Cancer Statistics, 2014.</li>
                      <li>Canadian Cancer Society Advisory Committee on Cancer Statistics, 2014.</li>
                      </p>
                    </ol>
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
export default CriticalIllnessInsurance;
