import React, { Fragment } from 'react'

class ErrorBoundary extends React.Component {
    
    state = { 
        hasError: false 
    };

    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
    componentDidCatch(error, info) {
      // You can also log the error to an error reporting service
      console.error('Error occurred - ', error, info)
    }
    render() {
    
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <Fragment>
            <h1>Oops! Something went wrong.</h1>
        </Fragment>
      }
      return this.props.children; 
    }
}

export default ErrorBoundary