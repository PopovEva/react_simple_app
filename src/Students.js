import React, { useState } from 'react';

const Students = () => {
    const [students, setStudents] = useState([
        {image: "/images/girl_2.jpg", userName: "Lora", bg: "green"},
        {image: "/images/boy3.jpg", userName: "Ben", bg: "yellow"},
        {image: "/images/john.jpg", userName: "Ron", bg: "blue"}, 
    ]);
  return (
    <div>
        <h4>Students componenta:</h4>
        {students.map((student, index) => (
            <div key={index} style={{ background: student.bg, margin: '10px', padding: '10px' }}>
                 <img src={student.image} alt={student.userName} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                <p>{student.userName}</p>
            </div>
        ))}
    </div>
  )
}

export default Students