import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../common/Button/Button';
import '../../../../App.css';
import { deleteCourse } from '../../../../services/CoursesService';
import { store } from '../../../../store/index';
import { courseDeleted } from '../../../../store/courses/actionCreators';
import { getUser } from '../../../../services/AuthService';

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
  const deleteC = async () => {
    await deleteCourse(courseId);
    store.dispatch(courseDeleted(courseId));
  };
  const edit = async () => {
    navigate('/createCourse', {
      state: { id: courseId },
    });
  };
  const ifAdmin = () => {
    if (getUser().role === 'admin') return true;
    return false;
  };
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
            <tr>
              <td colSpan={2} className="colButton"><Button className="button" text="Show course" action={details} /></td>
              {ifAdmin() && <td colSpan={2} className="colButtonSmall"><Button className="buttonSmall" text="delete" action={deleteC} /></td>}
              {ifAdmin() && <td colSpan={2} className="colButtonSmall"><Button className="buttonSmall" text="edit" action={edit} /></td>}
            </tr>
          </table>

        </td>
      </tr>
    </table>
  );
}

export default CourseCard;
