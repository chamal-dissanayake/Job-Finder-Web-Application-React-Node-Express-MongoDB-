import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Cards from "../Components/Cards";
import Jobs from "./Jobs";
import SideBar from "../sideBar/SideBar";
import Newsletter from "../Components/Newsletter";

const Home = () => {
  const [selectCategory, setSelectCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      });
  }, []);

  // console.log(jobs);

  const [query, setQuery] = useState("");
  const handelInputChnage = (e) => {
    setQuery(e.target.value);
  };

  //filter jobs by title
  const filterTitle = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //------ radio based button fitering----------
  const handelChange = (e) => {
    setSelectCategory(e.target.value);
  };

  //---------------button filtering------------------
  const handelClick = (e) => {
    setSelectCategory(e.target.value);
  };

  //calculate the index range
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  //function for the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filterTitle.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // function for the previsour

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  //main function
  const filterData = (jobs, selected, query) => {
    let filterJobs = jobs;
    if (query) {
      filterJobs = filterTitle;
    }
    //category filtering
    if (selected) {
      filterJobs = filterJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          postingDate,
          employmentType,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          postingDate >= selected ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
    }
    //slice the data based on current page
    const { startIndex, endIndex } = calculatePageRange();
    filterJobs = filterJobs.slice(startIndex, endIndex);
    return filterJobs.map((data, i) => <Cards key={i} data={data} />);
  };

  const result = filterData(jobs, selectCategory, query);

  return (
    <div>
      <Banner query={query} handelInputChnage={handelInputChnage} />

      {/* main content */}
      <div className=" bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* left side */}
        <div className="  bg-white p-4 rounded">
          <SideBar handelChange={handelChange} handelClick={handelClick} />
        </div>

        {/* job cards */}
        <div className=" col-span-2 bg-white p-4 rounded">
          {isLoading ? (
            <p className=" font-medium">Loading....</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className=" text-lg font-bold mb-4">{result.length} Jobs</h3>
              <p>No data found</p>
            </>
          )}

          {/* {pagination here} */}
          {result.length > 0 ? (
            <div className=" flex justify-center mt-4 space-x-8 ">
              <button
                className=" hover:text-red-400"
                disabled={currentPage === 1}
                onClick={prevPage}
              >
                Previous
              </button>
              <span className=" mx-2">
                Page {currentPage} of{" "}
                {Math.ceil(filterTitle.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filterTitle.length / itemsPerPage)
                }
                className=" hover:text-red-400"
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* right side */}
        <div className="bg-white p-4 rounded "><Newsletter/></div>
      </div>
    </div>
  );
};

export default Home;
