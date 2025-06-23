function Tips() {
  return (
    <>
      <h3>✅ Valid inputs</h3>
      <ul>
        <li>Region ID: 1 to 50</li>
        <li>Temperature: -10 to 60</li>
        <li>Humidity: 0 to 100</li>
        <li>Wind speed: 0 to 50</li>
        <li>Rainfall: 0 to 150</li>
        <li>Drought index: 0 to 1</li>
        <li>
          Previous fire: was there a fire the previous day in the same region?
        </li>
      </ul>
      <h3>💡 Tips: Characteristics associated with forest fires</h3>
      <ul>
        <li>Grassland and Shrubland vegetation</li>
        <li>Higher wind speed</li>
        <li>Higher temperatures</li>
        <li>Lower humidity</li>
        <li>Occurence of fire on previous day</li>
      </ul>
    </>
  );
}

export default Tips;
