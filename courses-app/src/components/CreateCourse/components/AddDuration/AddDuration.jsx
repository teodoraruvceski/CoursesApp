import { useState, React } from 'react';
import { useRecoilState } from 'recoil';
import newCourse from '../../../../recoil/atom/newCourse';
import Input from '../../../common/Input/input';

function AddDuration() {
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [_, setNewCourse] = useRecoilState(newCourse);
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
            type="number"
            onChange={(event) => {
              setHours(Math.floor(event.target.value / 60));
              setMinutes(event.target.value % 60);
              setNewCourse((prevState) => ({
                ...prevState,
                duration: event.target.value,
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
