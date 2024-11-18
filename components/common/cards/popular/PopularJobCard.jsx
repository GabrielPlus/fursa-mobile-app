import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./popularjobcard.style";
import { checkImageURL } from "../../../../utils/app.js";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      {/* Employer Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            marginBottom: 10,
          }}
        />
      </View>

      {/* Job Content */}
      <View style={styles.textContainer}>
        <Text style={styles.jobTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.jobType}>{item.remote ? "Remote" : "On-site"}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
