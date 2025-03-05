import { useEffect } from 'react'
import Script from 'next/script'

export default function MailerLiteForm() {
  return (
    <>
      <style jsx global>{`
        .ml-form-embedContainer {
          box-sizing: border-box;
          width: 100% !important;
          max-width: 600px;
          margin: 0 auto;
        }

        .ml-form-embedWrapper {
          background: transparent !important;
          border: none !important;
          padding: 0 !important;
        }

        .ml-form-horizontalRow {
          display: flex !important;
          gap: 12px;
        }

        .ml-input-horizontal {
          flex: 1;
        }

        .form-control {
          background-color: #ffffff !important;
          color: #333333 !important;
          border: none !important;
          border-radius: 8px !important;
          padding: 16px !important;
          width: 100% !important;
          font-size: 16px !important;
          height: 100% !important;
          margin: 0 !important;
        }

        .ml-button-horizontal {
          width: auto !important;
        }

        .ml-button-horizontal button {
          background-color: #ffffff !important;
          color: #4A1E26 !important;
          border: none !important;
          border-radius: 8px !important;
          padding: 16px 32px !important;
          height: 100% !important;
          font-weight: 600 !important;
          font-size: 16px !important;
          cursor: pointer !important;
          transition: opacity 0.2s !important;
          white-space: nowrap;
        }

        .ml-button-horizontal button:hover {
          opacity: 0.9;
        }

        .ml-form-successContent {
          color: white;
          text-align: center;
          padding: 20px;
        }

        .ml-form-formContent.horozintalForm {
          padding: 0 !important;
        }

        .horizontal-fields {
          padding: 0 !important;
        }

        @media (max-width: 640px) {
          .ml-form-horizontalRow {
            flex-direction: column;
          }
          
          .ml-button-horizontal button {
            width: 100% !important;
          }
        }
      `}</style>

      <div id="mlb2-23338881" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-23338881">
        <div className="ml-form-align-center">
          <div className="ml-form-embedWrapper embedForm">
            <div className="ml-form-embedBody ml-form-embedBodyHorizontal row-form">
              <form 
                className="ml-block-form" 
                action="https://assets.mailerlite.com/jsonp/1367444/forms/148005225038349485/subscribe" 
                method="post" 
                target="_blank"
              >
                <div className="ml-form-formContent horozintalForm">
                  <div className="ml-form-horizontalRow">
                    <div className="ml-input-horizontal">
                      <div className="horizontal-fields">
                        <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                          <input 
                            type="email" 
                            className="form-control" 
                            name="fields[email]" 
                            placeholder="Email" 
                            autoComplete="email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="ml-button-horizontal primary">
                      <button type="submit" className="primary">Subscribe</button>
                      <button disabled style={{ display: 'none' }} type="button" className="loading">
                        <div className="ml-form-embedSubmitLoad"></div>
                        <span className="sr-only">Loading...</span>
                      </button>
                    </div>
                  </div>
                </div>
                <input type="hidden" name="ml-submit" value="1" />
                <input type="hidden" name="anticsrf" value="true" />
              </form>
            </div>
            <div className="ml-form-successBody row-success" style={{ display: 'none' }}>
              <div className="ml-form-successContent">
                <h2><span style={{ color: 'rgb(255, 255, 255)' }}>You're In ✌️</span></h2>
                <p>
                  <span style={{ color: 'rgb(255, 255, 255)' }}>
                    <strong>I will send you a weekly parable with a lesson to apply and encouragement 📖</strong>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Script
        id="mailerlite-forms"
        strategy="afterInteractive"
        src="https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024"
      />
    </>
  )
} 