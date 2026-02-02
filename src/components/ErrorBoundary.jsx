import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to monitoring service if you want
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h2>😵 Oops, something went wrong</h2>
          <p>{this.state.error?.message}</p>

          <button onClick={this.handleReset}>
            Try again
          </button>

          {/* Optional: go somewhere safe */}
          {/* <Link to="/">Go Home</Link> */}
        </div>
      );
    }

    return this.props.children;
  }
}