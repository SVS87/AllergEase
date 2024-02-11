import "./features.css";
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from "@mui/material";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import GppGoodIcon from '@mui/icons-material/GppGood';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import BoltIcon from '@mui/icons-material/Bolt';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    gridContainer: {
      paddingLeft: "40px",
      paddingRight: "40px"
    }
  });

export default function Features(){
    const classes = useStyles();
    return (
        <div className="features">
            <p className="featurehead">Filled with Useful Features.</p>
            <p className="subheading featuresub">Get 1000x Better Results</p>




            <div className="cardsection">
                <Grid
                    container
                    spacing={4}
                    className={classes.gridContainer}
                    justify="center"
                > 

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="card"  sx={{ maxWidth: 345 }}>
                            <AutoAwesomeIcon />
                            <CardContent>
                                <Typography gutterBottom variant="h5" className="cardhead" component="div">
                                Accurate
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Our AI-powered results are extremely accurate
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="card"   sx={{ maxWidth: 345 }}>
                            <GppGoodIcon />
                            <CardContent>
                                <Typography gutterBottom variant="h5" className="cardhead" component="div">
                                Reliable
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Our AI uses GPT-4 and crowdsourced data
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="card"  sx={{ maxWidth: 345 }}>
                            <BoltIcon />
                            <CardContent>
                                <Typography gutterBottom variant="h5" className="cardhead" component="div">
                                Fast
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Results retrieved immediately
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="card"  sx={{ maxWidth: 345 }}>
                            <MobileFriendlyIcon/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" className="cardhead" component="div">
                                Mobile
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Support for mobile and web
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="card"  sx={{ maxWidth: 345 }}>
                            <TipsAndUpdatesIcon/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" className="cardhead" component="div">
                                Convenient
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Easy to use interface
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="card"  sx={{ maxWidth: 345 }}>
                            <LocalLibraryIcon/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" className="cardhead" component="div">
                                Students First
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Designed for the everyday student and learner
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </div>
        </div>
    );
}