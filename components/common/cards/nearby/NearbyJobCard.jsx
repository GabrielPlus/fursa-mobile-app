import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./nearbyjobcard.style";
import { checkImageURL } from "../../../../utils/app.js";

const NearbyJobCard = ({ job, handleNavigate }) => {
  console.log("NearbyJobCard data:", job); // Debugging Log

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job?.employer_logo)
              ? job.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage} // Updated to logoImage
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job?.job_title || "No Title Available"}
        </Text>
        <Text style={styles.jobType}>
          {job?.job_employment_type || "N/A"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;



// import { View, Text, TouchableOpacity, Image } from "react-native";

// import styles from "./nearbyjobcard.style";
// import { checkImageURL } from "../../../../utils/app.js";

// const NearbyJobCard = ({ job, handleNavigate }) => {
//   return (
//     <TouchableOpacity style={styles.container} onPress={handleNavigate}>
//       <TouchableOpacity style={styles.logoContainer}>
//         <Image
//           source={{
//             uri: checkImageURL(job.employer_logo)
//               ? job.employer_logo
//               : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
//           }}
//           resizeMode='contain'
//           style={styles.logImage}
//         />
//       </TouchableOpacity>

//       <View style={styles.textContainer}>
//         <Text style={styles.jobName} numberOfLines={1}>
//           {job?.job_title}
//         </Text>

//         <Text style={styles.jobType}>{job?.job_employment_type}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default NearbyJobCard;


