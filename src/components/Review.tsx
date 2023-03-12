import { Timestamp } from "firebase/firestore";
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
  CardBody,
} from "reactstrap";

function Review({
  reviewTitle,
  firstName,
  lastName,
  stars,
  comment,
  reviewDate,
}: {
  reviewTitle: string;
  firstName: string;
  lastName: string;
  profilePic: string;
  stars: number;
  comment: string;
  reviewDate: Timestamp;
}) {
  var dateString = "Unidentified date"
  if (reviewDate){
    //new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
    dateString = reviewDate.toDate().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
  }
  return (
    <Card>
      <CardBody>
        <div className="reviews-top">
          <CardTitle className="review-title" tag="h4">
            {reviewTitle || "This is my title"}
          </CardTitle>
          <div className="user-rating">
            {[...Array(stars || 5)].map((star, index) => {
              return <CardSubtitle key={index} tag="h5">⭐ </CardSubtitle>;
            })}
          </div>
          <div className="user-details">
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {firstName} {lastName || "John Doe"}
            </CardSubtitle>
          </div>
          <div className="reviews-body">
            <CardText>
              {comment ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis delectus dignissimos, nisi pariatur fuga officiis itaque fugiat! Quibusdam accusantium quae beatae vel.Quas possimus reprehenderit sequi quia nesciunt sunt!"}
            </CardText>
          </div>
          <div>
            <CardSubtitle>
              {dateString}    
            </CardSubtitle>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default Review;