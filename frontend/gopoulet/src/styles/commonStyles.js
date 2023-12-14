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
      maxWidth: '400px',
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
      marginTop: '10px', // Reduced spacing
      padding: '10px 20px',
      fontSize: '16px',
      color: '#fff',
      backgroundColor: '#4CAF50',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      width: '100%', // Make the button full-width
      boxSizing: 'border-box', // Include padding and border in the width
    },
    input: {
      padding: '10px',
      margin: '10px 0', // Adjusted spacing
      fontSize: '16px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      width: '100%', // Make the input full-width
      boxSizing: 'border-box', // Include padding and border in the width
    },
    statusMessage: {
      padding: '10px',
      margin: '10px 0', // Adjusted spacing
      borderRadius: '5px',
      backgroundColor: '#f2f2f2',
      fontSize: '16px',
      color: '#141414',
    },
    // Styles for the list of session orders
    sessionOrdersList: {
      listStyle: 'none',
      padding: '0',
      margin: '10px 0', // Adjusted spacing
    },
    sessionOrderItem: {
      padding: '5px',
      borderBottom: '1px solid #ddd',
      fontSize: '16px',
      color: '#141414',
    },
    restaurateurPage: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: '#141414', // Fond blanc cassé
      borderRadius: '8px', // Bords arrondis
      overflow: 'hidden', // Pour appliquer le border-radius au tableau
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Ombre légère pour un aspect moderne
    },
    th: {
      background: '#4CAF50',
      color: 'white',
      padding: '15px 10px',
    },
    td: {
      border: '1px solid #ddd',
      padding: '10px',
      textAlign: 'center',
    },
    button: {
      margin: '5px',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease', // Transition pour les interactions de bouton
    },
    deleteButton: {
      backgroundColor: '#ff6347',
    },
    input: {
      padding: '10px',
      margin: '10px 0', // Ajoute un peu d'espace autour de l'input
      fontSize: '16px', // Taille de la police pour une meilleure lisibilité
      border: '1px solid #ddd', // Une bordure subtile
      borderRadius: '5px', // Bordures arrondies pour l'input
      width: 'calc(100% - 22px)', // 100% de la largeur du conteneur parent moins la bordure et le padding
      boxSizing: 'border-box', // Pour inclure le padding et la bordure dans la largeur
    },
    
    // Amélioration du bouton pour consulter le statut
    checkStatusButton: {
      padding: '10px 20px',
      fontSize: '16px',
      color: '#fff',
      backgroundColor: '#3498db', // Une couleur différente pour le bouton de statut
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '10px',
      width: '100%', // Le bouton prend toute la largeur
      boxSizing: 'border-box',
      transition: 'background-color 0.3s ease',
    },
    
    // Styles pour le message de statut
    statusMessage: {
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      backgroundColor: '#f2f2f2', // Fond subtil pour le message de statut
      fontSize: '16px',
      color: '#141414',
    },
  };
  
  export default commonStyles;
  