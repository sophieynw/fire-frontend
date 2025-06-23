function Form({ setPrediction }) {
  function handleSubmit(e) {
    e.preventDefault();

    // read form data
    const form = e.target;
    const formData = new FormData(form);
    const raw = Object.fromEntries(formData.entries());
    const payload = {
      region_id: parseFloat(raw.region_id),
      temperature: parseFloat(raw.temperature),
      humidity: parseFloat(raw.humidity),
      wind_speed: parseFloat(raw.wind_speed),
      rainfall: parseFloat(raw.rainfall),
      vegetation_type: parseFloat(raw.vegetation_type),
      drough_index: parseFloat(raw.drough_index),
      previous_fire: parseFloat(raw.previous_fire),
      fire_season: parseFloat(raw.fire_season),
    };
    // console.log(payload);

    // fetch api
    fetch(API_URL, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result !== undefined) {
          setPrediction(data.result[0]);
        } else {
          setPrediction("error");
        }
      })
      .catch(() => {
        setPrediction("error");
      });
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Region ID:
        <input
          type="number"
          name="region_id"
          min="1"
          max="50"
          step="1"
          required
        />
      </label>
      <label>
        Temperature (°C):
        <input
          type="number"
          name="temperature"
          min="-10"
          max="60"
          step="0.01"
          required
        />
      </label>
      <label>
        Humidity (%):
        <input
          type="number"
          name="humidity"
          min="0"
          max="100"
          step="0.01"
          required
        />
      </label>
      <label>
        Wind speed (km/h):
        <input
          type="number"
          name="wind_speed"
          min="0"
          max="50"
          step="0.01"
          required
        />
      </label>
      <label>
        Rainfall (mm):
        <input
          type="number"
          name="rainfall"
          min="0"
          max="150"
          step="0.01"
          required
        />
      </label>
      <label>
        Vegetation type:
        <select name="vegetation_type" required>
          <option value="0">Shrubland</option>
          <option value="1">Grassland</option>
          <option value="2">Coniferous Forest</option>
          <option value="3">Deciduous Forest</option>
          <option value="4">Mixed Forest</option>
        </select>
      </label>
      <label>
        Drought index:
        <input
          type="number"
          name="drough_index"
          min="0"
          max="100"
          step="0.01"
          required
        />
      </label>
      <p>
        Previous fire:
        <label className="radio">
          <input type="radio" name="previous_fire" value="0" required />
          No
        </label>
        <label className="radio">
          <input type="radio" name="previous_fire" value="1" />
          Yes
        </label>
      </p>
      <label>
        Month:
        <select name="fire_season" required>
          <option value="4">Peak: April, May, June</option>
          <option value="3">High: March, July, August</option>
          <option value="2">Moderate: January, February, September</option>
          <option value="1">Low: October, November, December</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
