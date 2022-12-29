import { useState, React } from 'react';
import Input from '../../../common/Input/input';

function AddDuration({ setNewCourseState }) {
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  // eslint-disable-next-line no-unused-vars
  return (
    <table>
      <tr>
        <td className="center">
          <p className="titles"> Duration</p>
        </td>
      </tr>
      <tr>
        <td>
          Duration
        </td>
      </tr>
      <tr>
        <td>
          <Input
            className="input"
            type="number"
            onChange={(event) => {
              setHours(Math.floor(event.target.value / 60));
              setMinutes(event.target.value % 60);
              setNewCourseState((prevState) => ({
                ...prevState,
                duration: Number(event.target.value),
              }));
            }}
            placeholderText="Enter duration in minutes..."
          />

        </td>
      </tr>
      <tr>
        <td>
          <p className="duration">
            Duration:
            {' '}
            <b>
              {hours < 10 ? '0' : ''}
              {hours}
              :
              {minutes < 10 ? '0' : ''}
              {minutes}
              {' '}
            </b>
            hours
          </p>
        </td>
      </tr>
    </table>
  );
}

export default AddDuration;
