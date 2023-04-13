// Define a function called reportWebVitals which takes a callback function onPerfEntry as an argument
const reportWebVitals = onPerfEntry => {
  // Check if the onPerfEntry is a function
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import the 'web-vitals' library and then call the various functions from it
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Call the getCLS function with the onPerfEntry callback
      getCLS(onPerfEntry);
      // Call the getFID function with the onPerfEntry callback
      getFID(onPerfEntry);
      // Call the getFCP function with the onPerfEntry callback
      getFCP(onPerfEntry);
      // Call the getLCP function with the onPerfEntry callback
      getLCP(onPerfEntry);
      // Call the getTTFB function with the onPerfEntry callback
      getTTFB(onPerfEntry);
    });
  }
};

// Export the reportWebVitals function as the default export
export default reportWebVitals;

