import Form from 'react-bootstrap/Form';
import './InvestView.css';
import React from 'react';

function InvestView() {
  return (
    <>
    <div className='headerInvest'>
        <h2 className='InvestTitle'>
            Invest
        </h2>
    </div>
    <div className="formConainer">
    <form className="form" action="https://getform.io/f/8790d4a9-53c9-4c35-9076-863ef0702a76" method="POST">
                <h2 className='formTitle'>Investor Contact info</h2>
                <p className='formParagraph'>We'll contact you within the upcoming days</p>
                <input 
                name="name"
                placeholder="Full Name"
                type="text"
                required
                />
                <input 
                name="email"
                placeholder="E-Mail"
                type="text"
                required
                />
                <input 
                name="companyOptional"
                placeholder="Company (Optional)"
                type="text"
                />
                <input 
                name="number"
                placeholder="Phone Number"
                type="tel"
                required
                />
                <Form.Text className="text-muted">
                * We'll never share your information with anyone else.
                </Form.Text>
                <br />
                <button type='submit'>
                    Submit
                </button>
            </form>
    </div>
    </>
  );
}

export default InvestView;