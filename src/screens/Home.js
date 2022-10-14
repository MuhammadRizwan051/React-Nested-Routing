import React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import ResponsiveAppBar from '../AppBar'



function Home(props) {
  // let navigate = useNavigate();
  let filterList1 = props.details.filter((e) => { return e.title == "Zipper" })
  let filterList2 = props.details.filter((e) => { return e.title == "Jeans" })
  let filterList3 = props.details.filter((e) => { return e.title == "T-shirt" })
  return (
    <>
      <ResponsiveAppBar />
      <div style={{ marginTop: '80px' }}>
        <Typography variant='h2' className="all_categories_heading" mt={1} sx={{ textShadow: "2px 2px 6px grey", color: 'black', fontWeight: 'bold', textAlign: 'center', textDecoration: 'underline' }}>All Categories</Typography>
        {/* Zippers */}
        <Typography variant='h2' my={6} sx={{ textShadow: "2px 2px 6px grey", color: '#DC3545', fontStyle: "italic", fontWeight: 'bold', textAlign: 'center' }}>Zipper</Typography>
        <Grid className='zipper' container columnSpacing={5} rowSpacing={10}>
          {filterList1.map((e, i) => (
            <Grid item xl={3} lg={4} md={4} sm={6} xs={12} key={i}>
              <Card mt={5} sx={{ border: "1px solid lightGrey", maxWidth: '100%', boxShadow: '0 0px 15px rgba(0,0,0,0.25), 0 0 6px rgba(0,0,0,0.22)' }}>
                <CardMedia
                  className='img'
                  sx={{ width: '100%' }}
                  component="img"
                  image={e.image}
                  alt={e.title}
                />
                <CardContent>
                  <Chip
                    label={
                      e.category.slice(0, 1).toUpperCase() + e.category.slice(1)
                    }
                  />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                    color="red"
                    sx={{ fontWeight: "bold" }}
                  >
                    {`${e.title}: ${i + 1}`}
                  </Typography>

                  <Tooltip title={e.description}>
                    <Typography variant="body3">
                      {e.description.slice(0, 30) +
                        (e.description.length > 30 ? "..." : "")}
                    </Typography>
                  </Tooltip>
                  <Typography
                    variant="body1"
                    mt={2}
                    sx={{
                      fontSize: "22px",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {`Rs.${e.price}/-`}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color='error'
                    sx={{ width: 1, fontWeight: "bold", fontSize: "18px", }}
                  >
                    Add To Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>


        {/* Jeans */}
        <Typography variant='h2' my={6} sx={{ textShadow: "2px 2px 6px grey", color: '#DC3545', fontStyle: "italic", fontWeight: 'bold', textAlign: 'center' }}>Jeans</Typography>
        <Grid className='jeans' container columnSpacing={5} rowSpacing={10}>
          {filterList2.map((e, i) => (
            <Grid item xl={3} lg={4} md={4} sm={6} xs={12} key={i}>
              <Card mt={5} sx={{ border: "1px solid lightGrey", maxWidth: '100%', boxShadow: '0 0px 15px rgba(0,0,0,0.25), 0 0 6px rgba(0,0,0,0.22)' }}>
                <CardMedia
                  className='img'
                  sx={{ width: '100%' }}
                  component="img"
                  image={e.image}
                  alt={e.title}
                />
                <CardContent>
                  <Chip
                    label={
                      e.category.slice(0, 1).toUpperCase() + e.category.slice(1)
                    }
                  />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                    color="red"
                    sx={{ fontWeight: "bold" }}
                  >
                    {`${e.title}: ${i + 1}`}
                  </Typography>

                  <Tooltip title={e.description}>
                    <Typography variant="body3">
                      {e.description.slice(0, 30) +
                        (e.description.length > 30 ? "..." : "")}
                    </Typography>
                  </Tooltip>
                  <Typography
                    variant="body1"
                    mt={2}
                    sx={{
                      fontSize: "22px",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {`Rs.${e.price}/-`}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color='error'
                    sx={{ width: 1, fontWeight: "bold", fontSize: "18px", }}
                  >
                    Add To Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>




        {/* T-shirt */}
        <Typography variant='h2' my={6} sx={{ textShadow: "2px 2px 6px grey", color: '#DC3545', fontStyle: "italic", fontWeight: 'bold', textAlign: 'center' }}>T-shirt</Typography>
        <Grid className='t-shirt' container columnSpacing={5} rowSpacing={10}>
          {filterList3.map((e, i) => (
            <Grid item xl={3} lg={4} md={4} sm={6} xs={12} key={i}>
              <Card mt={5} sx={{ border: "1px solid lightGrey", maxWidth: '100%', boxShadow: '0 0px 15px rgba(0,0,0,0.25), 0 0 6px rgba(0,0,0,0.22)' }}>
                <CardMedia
                  className='img'
                  sx={{ width: '100%' }}
                  component="img"
                  image={e.image}
                  alt={e.title}
                />
                <CardContent>
                  <Chip
                    label={
                      e.category.slice(0, 1).toUpperCase() + e.category.slice(1)
                    }
                  />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                    color="red"
                    sx={{ fontWeight: "bold" }}
                  >
                    {`${e.title}: ${i + 1}`}
                  </Typography>

                  <Tooltip title={e.description}>
                    <Typography variant="body3">
                      {e.description.slice(0, 30) +
                        (e.description.length > 30 ? "..." : "")}
                    </Typography>
                  </Tooltip>
                  <Typography
                    variant="body1"
                    mt={2}
                    sx={{
                      fontSize: "22px",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {`Rs.${e.price}/-`}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color='error'
                    sx={{ width: 1, fontWeight: "bold", fontSize: "18px", }}
                  >
                    Add To Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* <button onClick={() => navigate("/about")}>Go to About</button> */}
      </div>
    </>
  );
}

export default Home