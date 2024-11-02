import { View } from "react-native";
import Text from "../Text";
import { StyleSheet, Alert, Platform  } from "react-native";
import theme from "../../theme";
import  { format } from "date-fns";
import Button from "../Button";
import { useNavigate } from "react-router-native";
import { useDelReview } from "../../hooks/useDelReview";

const styles = StyleSheet.create({
    container: {
      margin: 0,
      marginTop: 5,
        gap: 5,
        padding: 5,
          backgroundColor: theme.colors.bgWhite,
    },
      flexRow: {
        flexDirection: 'row',
        gap:5,
        margin:0,
        flexWrap: 'nowrap',
        flexShrink: 9
       
      },
      flexColumn: {
        margin: 0,
        gap:2,
          flexDirection: 'column',
          alignItems: "flex-start",
          flexWrap: 'nowrap',
          flexShrink: 1
        },
        ratingText: {
            display: "flex",
            justifyContent:"center",
           alignItems: "center",
            width: 40,
            height: 40,
            borderRadius: 20,
            borderColor: theme.colors.primary,
            borderWidth: "medium",
            

        }
    });

const ReviewItem = ({review}) => {
const navigate = useNavigate();
const [deleteReview]  = useDelReview();

const dateFormat = "dd.MM.yy"
const formattedDate = format(review.createdAt, dateFormat )

const createTwoButtonAlert = () => {
    if (Platform.OS === "web") {
      const confirmed = window.confirm("Do you wish to delete the review?");
      if (confirmed) deleteReview(review.id);
    } else {
      Alert.alert('Delete review?', 'Do you wish to delete the review?', [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Yes', onPress: () => deleteReview(review.id) },
      ]);
    }
  };


    return(
      <View style={styles.container}>
        <View style={styles.flexRow}>
        <View>
            <Text color="primary" fontWeight="bold" style={styles.ratingText}>{review.rating}</Text>
        </View>
        <View style={styles.flexColumn}>
        <Text fontWeight="bold">{review.repository.fullName}</Text>
        <Text color="textSecondary">{formattedDate}</Text>
        <Text>{review.text}</Text>
        </View>
        </View>
        <View style={styles.flexRow}>
        <Button label="View repository" onPress={() => {navigate(`/repos/${review.repositoryId}`)}}/>
        <Button label="Delete review" onPress={createTwoButtonAlert} colour="red"/>
        </View>

      </View>
    )
  
   
  }

  export default ReviewItem