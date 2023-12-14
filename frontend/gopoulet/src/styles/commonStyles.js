// src/styles/commonStyles.js
const commonStyles = {
    pageContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: '#141414',
    },
    contentContainer: {
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '300px',
      textAlign: 'center',
      color: '#141414',
    },
    image: {
      maxWidth: '70%',
      marginBottom: '1.25em',
    },
    logo : {
      maxWidth: '40%',
      marginBottom: '1.25em',
    },
    textHeader: {
      margin: '0',
      fontSize: '18px',
      color: '#141414',
      fontWeight: 'bold',
    },
    text: {
      margin: '0',
      fontSize: '14px',
      color: '#555',
    },
    button: {
      marginTop: '20px',
      padding: '10px 20px',
      fontSize: '16px',
      color: '#fff',
      backgroundColor: '#4CAF50',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };
  
  export default commonStyles;
  