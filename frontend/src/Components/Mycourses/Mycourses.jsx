import React, { useEffect } from 'react'
import '../Mycourses/Mycourses.css'
import Navbar from '../Navbar/Navbar'
import Card from '../Card/Card'
import axiosClient from '../../utills/client'

function Mycourses() {
  const [courses, setCourses] = React.useState([]);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      alert('Please log in to view your courses!');
      window.location.href = '/';
    } else {
      const fetchCourses = async () => {
        const response = await axiosClient.get(`/api/purchase?userEmail=${user.email}`);

        setCourses(response.data);
      };
      fetchCourses();
    }
  }, []);
  const handleDownload = (file) => {
    if (!file) return;

    window.open(file, "_blank");
  };


  return (
    <div>
      
      <Navbar />
      {/*hjdsdh*/}
      <div className='my-courses'>My Courses</div>
      <hr className='uio' />
      <div className='tyh'>
        {courses.map((course) => (
          <div key={course._id} className='abc'>
            <Card
              name={course.name}
              tutor={course.tutor}
              price={course.price}
              img={course.img}
              onClick={() => handleDownload(course.file)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Mycourses
