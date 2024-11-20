import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, Image } from "react-native";
import { useRouter } from "expo-router";
import styles from "./nearbyjobs.style";
import { checkImageURL } from "../../../utils/app.js";
import { COLORS } from "../../../constants";

const Nearbyjobs = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Fetch data from your API endpoint
  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://192.168.83.46:3000/api/jobs");
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Display loading, error, or job data
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong: {error}</Text>
        ) : (
          data.length > 0 ? (
            data.map((job) => (
              <TouchableOpacity
                key={job._id}
                style={[
                  styles.cardContainer,
                  { flexDirection: "row", alignItems: "center", padding: 10 },
                ]}
                onPress={() => router.push(`/job-details/${job._id}`)}
              >
                {/* Employer Logo */}
                <Image
                  source={{
                    uri: checkImageURL(job?.employer_logo)
                      ? job.employer_logo
                      : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
                  }}
                  resizeMode="contain"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    marginRight: 10, // Space between image and text
                  }}
                />

                {/* Job Content */}
                <View style={{ flex: 1 }}>
                  <Text style={styles.jobTitle}>{job.title}</Text>
                  <Text style={styles.jobType}>
                    {job.remote ? "Remote" : "On-site"}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text>No jobs found</Text>
          )
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;


// import React, { useEffect, useState } from "react";
// import { View, Text, ActivityIndicator } from "react-native";

// const Nearbyjobs = () => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Fetch data from your API endpoint
//   const fetchJobs = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch("http://192.168.0.108:3000/api/jobs");
//       const result = await response.json();
//       setData(result);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   // Display loading, error, or job data
//   return (
//     <View>
//       <Text>Nearby Jobs</Text>
//       {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
//       {error && <Text>Error: {error}</Text>}
//       {!isLoading && !error && data.length > 0 ? (
//         data.map((job) => (
//           <View key={job._id}>
//             <Text>Remote: {job.remote}</Text>
//             <Text>Title: {job.title}</Text>
//             <Text>Description: {job.description}</Text>
//             <Text>Location: {job.city}, {job.state}, {job.country}</Text>
//             <Text>Contact: {job.contactName} - {job.contactPhone}</Text>
//             <Text>-------------------------</Text>
//           </View>
//         ))
//       ) : (
//         !isLoading && <Text>No jobs found</Text>
//       )}
//     </View>
//   );
// };

// export default Nearbyjobs;





// import React from "react";
// import { useRouter } from "expo-router";
// import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

// import styles from "./nearbyjobs.style";
// import { COLORS } from "../../../constants";
// import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
// import useFetch from "../../../hook/useFetch";

// const Nearbyjobs = () => {
//   const router = useRouter();
//   const { data, isLoading, error } = useFetch("search", {
//     query: "React Native developer",
//     num_pages: "1",
//   });

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Nearby jobs</Text>
//         <TouchableOpacity>
//           <Text style={styles.headerBtn}>Show all</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.cardsContainer}>
//         {isLoading ? (
//           <ActivityIndicator size='large' color={COLORS.primary} />
//         ) : error ? (
//           <Text>Something went wrong</Text>
//         ) : (
//           data?.map((job) => (
//             <NearbyJobCard
//               job={job}
//               key={`nearby-job-${job.job_id}`}
//               handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
//             />
//           ))
//         )}
//       </View>
//     </View>
//   );
// };

// export default Nearbyjobs;

