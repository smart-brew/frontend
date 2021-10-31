import RecepeState from '../types/RecepeState';
import ChamberInfo from '../types/ChamberInfo';

import Chamber from './Chamber';
const Chambers = (chambers: RecepeState) => {
  return (
    <div className="container">
      {chambers.module_states.map((chamber: ChamberInfo) => (
        <Chamber
          chamberId={chamber.chamberId}
          temp={chamber.temp}
          rpm={chamber.rpm}
          heating={chamber.heating}
          active={chamber.active}
        />
      ))}
    </div>
  );
};

export default Chambers;
