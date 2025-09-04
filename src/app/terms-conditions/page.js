"use client";

export default function TermsConditions() {
  return (
    <>
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding-top: 120px;
          padding-bottom: 80px;
          font-family: Avenir, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        
        .header {
          text-align: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
        }
        
        .title {
          font-family: 'Rose Velt Personal Use Only', serif;
          color: #4C0A2E;
          font-size: 2rem;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .subtitle {
          font-size: 1rem;
          color: #666;
          margin: 10px 0 0 0;
        }
        
        .section {
          margin-bottom: 30px;
        }
        
        .section-title {
          font-family: 'Rose Velt Personal Use Only', serif;
          color: #4C0A2E;
          font-size: 1.3rem;
          margin: 0 0 15px 0;
          text-transform: uppercase;
        }
        
        .content {
          font-size: 0.95rem;
          margin-bottom: 15px;
        }
        
        @media (max-width: 768px) {
          .container {
            padding-top:100px;
            padding-bottom: 40px;
          }

          .section-title {
            font-family: 'Rose Velt Personal Use Only', serif;
            color: #4C0A2E!important;
            font-size: 1.3rem;
            text-shadow: none!important;
            margin: 0 0 15px 0;
            text-transform: uppercase;
          }
          
          .title {
            font-size: 1.5rem;
          }
          
          .section-title {
            font-size: 1.1rem;
          }
          
          .content {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <div className="container">
        <div className="header">
          <h1 className="title">Terms And Conditions</h1>
          <p className="subtitle">Please read these terms carefully before using our services.</p>
        </div>
        
        <div className="section">
          <h2 className="section-title">Usage of Service</h2>
          <p className="content">
            By accessing our website, you agree to use it in accordance with applicable laws and our policies. You must provide accurate information when placing an order and refrain from any unauthorized or unlawful activity.
          </p>
          <p className="content">
            We reserve the right to refuse or cancel orders if fraudulent or suspicious activity is detected.
          </p>
        </div>
        
        <div className="section">
          <h2 className="section-title">Orders and Payments</h2>
          <p className="content">
            Orders are subject to availability and payment verification. Prices may be updated without prior notice.
          </p>
          <p className="content">
            In case of payment failures, please retry or reach out to our support for assistance.
          </p>
        </div>
        
        <div className="section">
          <h2 className="section-title">Returns and Refunds</h2>
          <p className="content">
            Items are eligible for return or refund only if they meet the conditions stated in our Returns & Refund Policy. Please ensure the original packaging and receipts are intact when initiating a return.
          </p>
          <p className="content">
            Refunds are processed to the original payment method within a specified timeline after inspection and approval.
          </p>
        </div>
      </div>
    </>
  );
}