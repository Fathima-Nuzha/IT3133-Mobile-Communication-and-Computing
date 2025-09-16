import React from "react";
import { students } from "../data/StudentsDb";

import "../CSS/compo.css";

function Gallery() {
  return (
    <div className="outerDiv">
      <h2 style={{ textAlign: "center" }}>Student Gallery</h2>
      <div className="gallery">
        {students.map((s) => (
          <div key={s.studentId} className="card">
            <img
              src={`/profilepic/${s.profilePic}`}   // ✅ images in public/profilepic
              alt={`${s.firstName} ${s.lastName}`}
              className="profile"
            />
            <h3>{s.firstName} {s.lastName}</h3>
            <p><strong>Age:</strong> {s.age}</p>
            <p><strong>Course:</strong> {s.course}</p>
            <p><strong>Gender:</strong> {s.gender}</p>
            <p><strong>Location:</strong> {s.address.city}, {s.address.country}</p>
            <p><strong>Skills:</strong> {s.skills.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
