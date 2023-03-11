import {
  Card,
  CardSubtitle,
  CardText,
  CardTitle,
  CardBody,
  CardImg,
} from "reactstrap";

function Review({
  firstName,
  lastName,
  stars,
  comment,
  timestamp,
}: {
  firstName: string;
  lastName: string;
  profilePic: string;
  stars: number;
  comment: string;
  timestamp: number;
}) {
  return (
    <Card>
      <CardBody>
        <div className="reviews-top">
          <div className="user-details">
            <CardImg
              className="avatar"
              
              alt="user avatar"
            />

            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {firstName} {lastName || "John Doe"}
            </CardSubtitle>
            {[...Array(stars || 5)].map((star) => {
              return <CardSubtitle tag="h5">⭐ </CardSubtitle>;
            })}
          </div>
          <div className="reviews-body">
            <CardText>
              {comment ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis delectus dignissimos, nisi pariatur fuga officiis itaque fugiat! Quibusdam accusantium quae beatae vel.Quas possimus reprehenderit sequi quia nesciunt sunt!"}
            </CardText>
          </div>
          <CardText>
            <small className="text-muted text-bold">
              {timestamp || "3 mins ago"}
            </small>
          </CardText>
        </div>
      </CardBody>
    </Card>
  );
}

export default Review;