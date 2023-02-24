import { Card, CardMedia, CardContent, Typography, CardActionArea } from "@mui/material"
import {useNavigate } from "react-router-dom"

const CardComponent = ({ id, title, image, skills, link }) => {
const navigate=useNavigate();

  return (
    <Card elevation={9}>
      <CardActionArea onClick={()=>navigate('/projects/'+id)}>
        <CardMedia className="card">
          <img src={image} alt={title} className='card-image' />
        </CardMedia>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardComponent