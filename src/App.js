import "./App.css";
import DownloadPage from "./components/DownloadPage";
function App() {
  return (
    <div className="App" id="pagetodownload">
      <p>
        The script allows you to take "screenshots" of webpages or parts of it,
        directly on the users browser. The screenshot is based on the DOM and as
        such may not be 100% accurate to the real representation as it does not
        make an actual screenshot, but builds the screenshot based on the
        information available on the page
      </p>
      <DownloadPage
        rootsElementId="pagetodownload"
        downloadFileName="testPage"
      />
    </div>
  );
}

export default App;
