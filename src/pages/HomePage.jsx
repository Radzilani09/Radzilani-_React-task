import Hero from '../components/Hero';
import HomeCArds from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    
       <>
       <Hero />
       <HomeCArds />
       <JobListings isHome={true}/>
       <ViewAllJobs/>
       
    </>
    
  )
}
export default HomePage
