const commonStyles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f7f7f7', // Light grey background for a modern look
    fontFamily: `'Open Sans', sans-serif`, // Modern, readable font
  },
  contentContainer: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.05)',
    maxWidth: '400px',
    textAlign: 'center',
    color: '#333', // Slightly softer than pure black for text
  },
  image: {
    maxWidth: '70%',
    marginBottom: '1.25em',
  },
  logo: {
    maxWidth: '40%',
    marginBottom: '1.25em',
  },
  textHeader: {
    margin: '0',
    fontSize: '24px', // Slightly larger for impact
    color: '#333',
    fontWeight: 'bold',
    lineHeight: '1.2', // Modern typography focuses on line spacing
  },
  text: {
    margin: '0',
    fontSize: '16px', // Standard size for readability
    color: '#666', // Softer for body text
  },
  button: {
    marginTop: '20px',
    padding: '12px 24px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#ffc404', // More vibrant button color
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease', // Smooth transition for interactive elements
    '&:hover': {
      transform: 'scale(1.05)', // Slight grow effect on hover
    },
  },
  input: {
    padding: '12px',
    margin: '20px 0',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    width: '100%',
    boxSizing: 'border-box',
  },
  statusMessage: {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '8px',
    backgroundColor: '#ffc404', // Light blue for informational messages
    fontSize: '16px',
    color: '#333',
  },
  qrCodeImage: {
    width: '150px', // Example width, adjust as needed
    height: '150px', // Example height, adjust as needed
    marginTop: '10px',
  },
};

export default commonStyles;
