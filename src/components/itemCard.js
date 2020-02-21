import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "../components/modal";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 40
  }
});

export default React.memo(function MediaCard({
  info,
  onRemove,
  onFavorite,
  onChangeName,
  onChangePhone,
  onClickUpdate
}) {
  const { id, name, phone, favorite } = info;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="user"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {phone}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton
          aria-label="add to favorites"
          onClick={() => onFavorite(id)}
        >
          {favorite === true ? <FavoriteIcon /> : <FavoriteBorder />}
        </IconButton>
        <Button size="small" color="primary">
          <Modal
            id={id}
            name={name}
            phone={phone}
            onClickUpdate={onClickUpdate}
            onChangeName={onChangeName}
            onChangePhone={onChangePhone}
          />
        </Button>
        <Button size="small" color="primary" onClick={() => onRemove(id)}>
          삭제
        </Button>
      </CardActions>
    </Card>
  );
});
