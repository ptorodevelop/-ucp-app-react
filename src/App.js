
import './App.css';

function App() {
  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #4f46e5, #9333ea, #ec4899)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    padding: '2rem',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    textAlign: 'center',
  };

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '2rem',
    boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
    maxWidth: '600px',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>🎓 ¡Universidad Católica de Pereira !</h1>
        <p style={paragraphStyle}>
          📋 Listado de integrantes - Proceso de Desarrollo de Software I
        </p>
      </div>
    </div>
  );
}


export default App;
