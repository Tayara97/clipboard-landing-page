import Header from "./components/Header.jsx";
import Title from "./components/Title.jsx";
import Button from "./components/Button.jsx";
import Features from "./components/Features.jsx";
import { Tool } from "./components/Tool.jsx";
import Partnership from "./components/PartnerShip.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <div className="container">
      <Header />
      <Button />
      <Title
        header={"Keep track of your snippets"}
        paragh={
          "  Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything."
        }
      />
      <div className="section">
        <img
          className="computer-img"
          src="images/image-computer.png"
          alt="computer"
        />
        <div className="features">
          <Features
            head={"Quick Search"}
            parag={
              " Easily search your snippets by content, category, web address,application, and more."
            }
          />

          <Features
            head={"  iCloud Sync"}
            parag={
              "  Instantly saves and syncs snippets across all your devices."
            }
          />
          <Features
            head={" Complete History"}
            parag={
              "Retrieve any snippets from the first moment you started using the app."
            }
          />
        </div>
      </div>
      <Title
        header={"Access Clipboard anywhere"}
        paragh={
          " Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks."
        }
      />
      <div className="devices-img">
        <img src="images/image-devices.png" alt="devices" />
      </div>
      <Title
        header={"Supercharge your workflow"}
        paragh={"We’ve got the tools to boost your productivity."}
      />
      <div className="tools">
        <Tool
          logo={"images/icon-blacklist.svg"}
          heading={"Create blacklists"}
          parag={
            "Ensure sensitive information never makes its way to your clipboard by excluding certain sources."
          }
        />
        <Tool
          logo={"images/icon-text.svg"}
          heading={"Plain text snippets"}
          parag={
            " Remove unwanted formatting from copied text for a consistent look."
          }
        />
        <Tool
          logo={"images/icon-preview.svg"}
          heading={" Sneak preview"}
          parag={
            " Quick preview of all snippets on your Clipboard for easy access. "
          }
        />
      </div>
      <div className="partners">
        <Partnership logo={"images/logo-google.png"} />
        <Partnership logo={"images/logo-ibm.png"} />
        <Partnership logo={"images/logo-microsoft.png"} />
        <Partnership logo={"images/logo-hp.png"} />
        <Partnership logo={"images/logo-vector-graphics.png"} />
      </div>
      <Title
        header={"Clipboard for iOS and Mac OS"}
        paragh={
          "Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard."
        }
      />
      <Button />
      <Footer />
    </div>
  );
}

export default App;
