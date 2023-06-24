import React from 'react'

export default function PageLoading() {
  return (
    <div className="error-page">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center " style={{height: "100vh"}}>
          <div className="col-md-6 text-center">
            <div className="error-page-content">
            <div class="spinner-grow text-primary" role="status">
                {/* <span class="visually-hidden">Loading...</span> */}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}