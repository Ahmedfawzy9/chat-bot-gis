// src/components/about-us/SimpleTeam.jsx

import React from "react";
import { MapPin, Cpu, Code, Users, FileText } from "lucide-react";
// ✅ استيراد الأنماط الخاصة به من نفس المجلد
import "./TeamSection.css";
// 🚨 استيراد الصور (بمسارات مصححة من /components/about-us/ إلى /assets/team) 🚨
import fawzyPhoto from "../../assets/team/Fawzy.jpg";
import marwanPhoto from "../../assets/team/Marwan.jpeg";
import nourPhoto from "../../assets/team/Nour.jpeg";
// import hossamPhoto from "../../assets/team/hossam.jpg";
// import magdyPhoto from "../../assets/team/magdy.jpg";


// بيانات أعضاء الفريق الخمسة (بدون تغيير)
const teamMembers = [
  {
    name: "Ahmed Fawzy Fawzy",
    role: "Lead GIS Developer",
    bio: "Pioneering the spatial architecture, focusing on flood modeling accuracy and ArcGIS/GeoServer deployment.",
    icon: MapPin,
    imagePath: fawzyPhoto,
    details: "Expert in complex spatial algorithms and Web GIS visualization.",
  },
  {
    name: "Marwan El-mehy",
    role: "AI/ML Engineer",
    bio: "Developing deep learning models (TensorFlow/OpenCV) for predictive risk assessment and automated recognition systems.",
    icon: Cpu,
    imagePath: marwanPhoto,
    details: "Specializes in integrating AI outputs with emergency decision-making tools.",
  },
  {
    name: "Nour Eldeen Okbi",
    role: "Front-End Developer",
    bio: "Responsible for the responsive UI/UX, built using React.js.",
    icon: Code,
    imagePath: nourPhoto,
    details: "Focuses on performance optimization.",
  },
  {
    name: "Hossam Raouf",
    role: "Spatial Data Analyst",
    bio: "Manages data lifecycle, including acquisition, cleaning, validation, and integration of satellite and sensor feeds.",
    icon: FileText,
    // imagePath: hossamPhoto,
    details: "Ensures the integrity و reliability of all geospatial data sources.",
  },
  {
    name: "Magdy Adel",
    role: "Project & Operations Lead",
    bio: "Overseeing the strategic roadmap, team coordination, and system deployment.",
    icon: Users,
    // imagePath: magdyPhoto,
    details: "A dedicated leader focused on turning technology into real-world impact.",
  },
];

export default function SimpleTeam() {
  return (
    <section className="simple-team-section">
      <div className="simple-team-container">
        <div className="team-grid-simple">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-member-card-simple"
            >
              <div className="member-image-wrapper">
                <img
                  src={member.imagePath}
                  alt={member.name}
                  className="member-photo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const fallback = e.target.closest('.team-member-card-simple').querySelector('.member-avatar-fallback');
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="member-avatar-fallback">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
              </div>

              <h3 className="member-name-simple">{member.name}</h3>
              <p className="member-role-simple">{member.role}</p>

              <div className="member-details-box-simple">
                <p className="member-bio-simple">{member.bio}</p>
                <p className="member-details-simple">
                  * {member.details}
                </p>
              </div>

              <member.icon size={20} className="member-icon-bg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}