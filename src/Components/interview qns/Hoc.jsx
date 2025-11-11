//A Higher-Order Component (HOC) is a function that takes a component and returns a new component with enhanced behavior.


function withLoading(Component) {
    return function EnhancedComponent({ isLoading, ...props }) {
      if (isLoading) return <p>Loading...</p>;
      return <Component {...props} />;
    };
  }