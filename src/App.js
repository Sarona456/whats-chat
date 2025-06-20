import logo from './logo.svg';
import './App.css';

function App() {
  
   const contacts = [
    { num: "201068683009", name: "Zainab OR Sara" },
    { num: "201000102804", name: "Hana" },
    { num: "201009796139", name: "Niema" },
  ];

  return (
    <div>
      <h1>Chat With Our Team</h1>
      <div className="button-container">
        {contacts.map(({ num, name }, i) => (
          <a
            key={i}
            href={`https://wa.me/${num}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat with {name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
