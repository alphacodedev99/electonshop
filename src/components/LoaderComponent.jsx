function LoaderComponent() {
    return (
      <div
      className="h-[100vh] flex items-center justify-center mx-auto"
        style={{
          display: 'inline-block',
          width: '64px',
          height: '64px',
          border: '5px solid #ccc',
          borderTopColor: '#007bff',
          borderRadius: '50%',
          animation: 'spinner 1s linear infinite',
          margin: '0 auto'
        }}
      ></div>
    );
  }
  
  export default LoaderComponent;