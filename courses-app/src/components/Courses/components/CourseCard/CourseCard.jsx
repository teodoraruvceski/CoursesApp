import React from 'react';
import { useNavigate } from 'react-router-dom';
// import dateFormat from 'dateformat';
import Button from '../../../common/Button/Button';
import '../../../../App.css';

function CourseCard({

  courseName, description, authors, duration, creationDate, courseId,
}) {
  const navigate = useNavigate();
  const details = () => {
    navigate('/courseInfo', {
      state: {
        courseName,
        description,
        authors,
        duration,
        creationDate,
        courseId,
      },
    });
  };
  // const hours = Math.floor(duration / 60);
  // const minutes = duration % 60;
  // console.log('minutes:', minutes);
  // if (minutes < 10) {
  //   minutes = `0${minutes.toString()}`;
  // }

  return (
    <table className="courseCard">
      <tr>
        <td className="mainInfo">
          <div className="title">{courseName}</div>
          <div>{description}</div>
        </td>
        <td>
          <table className="details">
            <tr>
              <td className="boldTd">
                Authors:
              </td>
              <td className="authors">
                {authors}
              </td>
            </tr>
            <tr>
              <td className="boldTd">
                Duration:
              </td>
              <td className="col">
                {Math.floor(duration / 60) < 10 ? '0' : ''}
                {Math.floor(duration / 60)}
                :
                {(duration % 60) < 10 ? '0' : ''}
                {duration % 60}
                {' '}
                hours

              </td>
            </tr>
            <tr>
              <td className="boldTd">
                Created:
              </td>
              <td className="col">
                {creationDate.replaceAll('/', '.')}
              </td>

            </tr>
            <tr><td colSpan={2} className="colButton"><Button className="button" text="Show course" action={details} /></td></tr>
          </table>

        </td>
      </tr>
    </table>
  );
}

export default CourseCard;
