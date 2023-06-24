import React from 'react'

export default function NotFound() {
  return (
    <div className="error-page">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center " style={{height: "100vh"}}>
          <div className="col-md-6 text-center">
            <div className="error-page-content">
              <h1 className="display-1">404</h1>
              <h2 className="display-4 mb-3">Oops! Page not found</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}