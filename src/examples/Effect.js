import { useState, useEffect } from "react";

const EffectComponent = () => {
  const [url, setUrl] = useState()
  const [count, setCount] = useState(0);

  useEffect(() => {

    const timer = setTimeout(() => setCount(count + 1), 3000);

    return () => clearTimeout(timer)
  });

  useEffect(() => {

    const getImage = async () => {
      const res = await fetch('https://source.unsplash.com/300x300/?fried-chicken');
      setUrl(res.url)
    }

    getImage();
  }, [count])

  return (<div style={{ textAlign: 'center' }}>
    <h3>Last re-render {new Date().toLocaleTimeString()}</h3>
    <h1>useEffect</h1>
    <h2>Count: {count}</h2>
    <img src={url} alt="chicken"></img>

  </div>);
};

export default EffectComponent;
