import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import dateFormat from 'dateformat';
import Button from '../common/Button/Button';
import './style.css';

function CourseInfo() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const {
    courseName,
    description,
    authors,
    duration,
    creationDate,
    courseId,
  } = state || {};
  const authorsList = authors.split(',');
  return (
    <div className="courses">
      <table className="courseDetails">
        <tr className="row"><td className="back"><Button className="buttonBack" text="< Back to courses" action={() => navigate('/courses')} /></td></tr>
        <tr className="row"><td className="courseName">{courseName}</td></tr>
        <tr>
          <td className="right" width="60%">{description}</td>
          <td className="right" width="40%">
            <table className="info">
              <tr>
                <td>
                  <span className="boldTd">ID:</span>

                  {' '}
                  {courseId}
                </td>
              </tr>
              <tr>
                <td>
                  <span className="boldTd">Duration:</span>
                  {' '}
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
                <td>
                  <span className="boldTd">Created:</span>
                  {' '}
                  {dateFormat(creationDate, 'mm.dd.yyyy')}
                </td>
              </tr>
              <tr>
                <td className="boldTd">
                  Authors:
                </td>
              </tr>
              {authorsList.map((auth) => (
                <tr><td>{auth}</td></tr>
              ))}
            </table>
          </td>
        </tr>
      </table>

    </div>

  );
}

export default CourseInfo;
