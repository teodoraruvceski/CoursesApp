import {
  React, useEffect,
} from 'react';
import Input from '../../../common/Input/input';

function AddDuration({ newCourseState, setNewCourseState }) {
  useEffect(() => {
  }, []);
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
            value={newCourseState.duration === 0 ? '' : newCourseState.duration}
            onChange={(event) => {
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
              {Math.floor(newCourseState.duration / 60) < 10 ? '0' : ''}
              {Math.floor(newCourseState.duration / 60)}
              :
              {newCourseState.duration % 60 < 10 ? '0' : ''}
              {newCourseState.duration % 60}
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
