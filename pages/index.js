import Head from "next/head";
import Image from "next/image";
import buildspaceLogo from "../assets/buildspace-logo.png";
import { useState } from "react";
import backgroundImage from "../assets/background.jpg"

const Home = () => {
  const [userInput, setUserInput] = useState("");
  const [apiOutput, setApiOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
0
  const callGenerateEndpoint = async() => {
  
    setIsGenerating(true);
    console.log("Calling openai...")

    const response = await fetch('/api/generate', {
      method: "POST",
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({userInput})
    });

    const data = await response.json();
    const {output} = data;
    console.log("OpenAI  replied...", output.text)

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  }

  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="root">
      <Head>
        <title>Bio Generator</title>
      </Head>
      <Image src={backgroundImage} className="background-image" />
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Automate Your Bio Creation with GPT-3</h1>
          </div>
          <div className="header-subtitle">
            <h2>Generate a unique bio with GPT-3 technology</h2>
          </div>
        </div>
        <div className="prompt-container">
          <textarea
            placeholder="Write info you want to write in your bio"
            className="prompt-box"
            value={userInput}
            onChange={onUserChangedText}
          />
        </div>
        <div className="prompt-buttons">
            <a className={isGenerating ? 'generate-button loading' : 'generate-button'} onClick={callGenerateEndpoint}>
              <div className="generate">
              {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
              </div>
            </a>
        </div>
        {apiOutput &&(
            <div className="output">
              <div className="output-header-container">
                <div className="output-header">
                  <h3>Output</h3>
                </div>
              </div>
              <div className="output-content">
                <p>{apiOutput}</p>
              </div>
            </div>
          )}
      </div>
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
