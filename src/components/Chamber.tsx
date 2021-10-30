import ChamberInfo from '../types/ChamberInfo';
import UnitsMap from '../helper_scripts/UnitsMap';

function Chamber(chamber: ChamberInfo) {
  const heating = new UnitsMap().getUnit(chamber.heating.toString()); // needs to be the string to use the function
  return (
    console.log(heating),
    (
      <div className="chamber w-1/4 content-center  border-2 border-gray-300 rounded-3xl ">
        <div>
          <label>Temperature</label>
          <p>{chamber.temp} °C</p>
        </div>
        <div>
          <label>Motor speed</label>
          <p>{chamber.rpm} RMD</p>
        </div>
        <div>
          <label>Heating</label>
          <p>{heating}</p>
        </div>
      </div>
    )
  );
}

export default Chamber;
