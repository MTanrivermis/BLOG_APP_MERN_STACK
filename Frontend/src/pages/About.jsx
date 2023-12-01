import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from "@mui/icons-material/Instagram";
import {
    CardActionArea,
    CardActions,
    Paper,
    IconButton,
} from "@mui/material";
import { avatar } from "../../assets/avatar";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <Paper
            sx={{
                display: "flex",
                p: 2,
                m: 8,
                alignItems: "center",
                justifyContent: "center",
                height: "70vh",
            }}
            elevation={5}
        >
            <Card sx={{ maxWidth: 400 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={avatar}
                        alt="profile img"
                        sx={{ objectFit: "contain" }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Hello, My name is Mehmet
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            I'm a full-stack developer .
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            I'm use know for frontend technologies JavaScript, ReactJS, Next.js, typescript..
                            and for backend technologies NodeJS, ExpressJS.. Also know to Mongo DB, SQLite and MYSQL
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            💬 You can ask me anything you want to know
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    <IconButton
                        sx={{ color: "black", "&:hover": { color: "red" } }}
                        size="small"
                        component={Link} to={"https://twitter.com/Mr_Navelin"} target="_blank" rel="noopener noreferrer">
                        <TwitterIcon />
                    </IconButton>
                    <IconButton
                        sx={{ color: "black", "&:hover": { color: "red" } }}
                        size="small"
                        component={Link} to={"https://github.com/MTanrivermis"} target="_blank" rel="noopener noreferrer">
                        <GitHubIcon />
                    </IconButton>
                    <IconButton
                        sx={{ color: "black", "&:hover": { color: "red" } }}
                        size="small"
                        component={Link} to={"https://www.linkedin.com/in/mtanrivermis/"} target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton
                        sx={{ color: "black", "&:hover": { color: "red" } }}
                        size="small"
                        component={Link} to={"https://www.instagram.com/mr.phixiuss/"} target="_blank" rel="noopener noreferrer">
                        <InstagramIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Paper >
    );
};

export default About;
