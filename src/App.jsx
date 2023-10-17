import send from "./assets/send.svg";
import user from "./assets/user.png";
import bot from "./assets/bot.png";
import loadingIcon from "./assets/loader.svg";

function App() {
  return (
    <main className="chatGPT-app">
      <section className="chat-container">
        <div className="layout">
          <div className="chat-bubble">
            <div className="avatar">
              <img src={user} />
            </div>
            <div className="post">Lorem ipsum dolor sit amet.</div>
          </div>
          <div className="chat-bubble bot">
            <div className="avatar">
              <img src={bot} />
            </div>
            <div className="post">Lorem ipsum dolor sit amet.</div>
          </div>
        </div>
      </section>
      <footer>
        <input
          className="composebar"
          autoFocus
          type="text"
          placeholder="Ask Anything"
          onChange={() => {}}
        />
        <div className="send-button">
          <img src={send} />
        </div>
      </footer>
    </main>
  );
}

export default App;
