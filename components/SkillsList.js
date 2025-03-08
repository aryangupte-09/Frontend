// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function SkillsList() {
//   const [skills, setSkills] = useState<string[]>([]); // Ensuring type safety

//   useEffect(() => {
//     axios.get("http://127.0.0.1:8000/get_skills") // Update API URL if deployed
//       .then(response => {
//         if (response.data && Array.isArray(response.data.extracted_skills)) {
//           setSkills(response.data.extracted_skills);
//         } else {
//           console.error("Invalid data format:", response.data);
//         }
//       })
//       .catch(error => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <h1 className="text-2xl font-bold mb-4 text-blue-600">Extracted Skills</h1>
//       {skills.length > 0 ? (
//         <ul className="bg-white shadow-md rounded-lg p-4">
//           {skills.map((skill, index) => (
//             <li key={index} className="text-lg text-gray-700 py-1">{skill}</li>
//           ))}
//         </ul>
//       ) : (
//         <p className="text-gray-500">Loading skills...</p>
//       )}
//     </div>
//   );
// }
import { useEffect, useState } from "react";

export default function SkillsList() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Error fetching skills:", err));
  }, []);

  return (
    <div>
      <h2>Extracted Skills:</h2>
      <ul>
        {skills.length > 0 ? skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        )) : <p>No skills found.</p>}
      </ul>
    </div>
  );
}