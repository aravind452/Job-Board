import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Searchbar from "./components/SearchBar/Searchbar";
import JobCard from "./components/JobCard/Jobcard";
import { collection, query, getDocs, where, orderBy } from "firebase/firestore";
import { db } from "./firebase.config";

function App() {
  const [jobs, setJobs] = useState([]);
  const tempJobs = [];
  const fetchJobs = async () => {
    const q = query(collection(db, "jobs"));
    const q1 = query(q, orderBy("postedOn", "desc"));
    const querySnapshot = await getDocs(q1);
    querySnapshot.forEach((job) => {
      //console.log(doc.id, "==>", doc.data);
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });

    setJobs(tempJobs);
  };

  const fetchCustomJobs = async (jobCriteria) => {
    const q = query(collection(db, "jobs"));
    const q1 = query(
      q,
      where("type", "==", jobCriteria.type),
      where("title", "==", jobCriteria.title),
      where("experience", "==", jobCriteria.experience),
      where("location", "==", jobCriteria.location),
      orderBy("postedOn", "desc")
    );
    const querySnapshot = await getDocs(q1);
    querySnapshot.forEach((job) => {
      //console.log(doc.id, "==>", doc.data);
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });

    setJobs(tempJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <Searchbar fetchCustomJobs={fetchCustomJobs} />
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}

export default App;
