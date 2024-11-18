import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
    flex: 1,
  },
  cardContainer: {
    padding: SIZES.medium,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    marginBottom: SIZES.small,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  jobTitle: {
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: COLORS.primary,
  },
  jobType: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    color: COLORS.gray,
    marginTop: 5,
    textTransform: "capitalize",
  },
});

export default styles;



// import { StyleSheet } from "react-native";

// import { COLORS, FONT, SIZES } from "../../../constants";

// const styles = StyleSheet.create({
//   container: {
//     marginTop: SIZES.xLarge,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginTop: SIZES.small,
//   },
//   headerTitle: {
//     fontSize: SIZES.large,
//     fontFamily: FONT.medium,
//     color: COLORS.primary,
//   },
//   headerBtn: {
//     fontSize: SIZES.medium,
//     fontFamily: FONT.medium,
//     color: COLORS.gray,
//   },
//   cardsContainer: {
//     marginTop: SIZES.medium,
//     gap: SIZES.small,
//   },
// });

// export default styles;
