import React from 'react'
import "./Error.css"
export default function Error() {
  return (
    <>
    <div className="ErrorBanner">
        <h1>404 Page Not Found</h1>
    </div>

    <div className="ErrorHeading">
        <h1>404</h1>
        <h4>Oops! Page not found</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis congue pretium faucibus leo nisl nulla pharetra nullam.</p>
        <button className="HomeBtn">Go to homepage</button>
    </div>
    </>
  )
}
