import { CheckCircle } from "@mui/icons-material"
import { Box, CardMedia, CardContent, Typography } from "@mui/material"
import { PropTypes } from 'prop-types'


const ChannelCard = ( { video }  ) => {
   
    

  return (
    <Box sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: {xs: '356px', md: '320px'},
        height: '326px',
        margin: 'auto',
    }}>
         <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
          } }>
        <CardMedia image={video?.snippet?.thumbnails?.default?.url}
         alt={video?.snippet?.title} 
         sx={{
            borderRadius: '50%',
            height: '180px',
            width: '180px',
            mb: 2,
            border: '1px, solid #e3e3e3',

         }}/>
         <Typography variant={"h6"}>
            {video?.snippet?.title}{' '} 
            <CheckCircle sx={{fontSize: '14px', color: 'gray', ml: '5px'}}/>
            </Typography>
            {video?.statistics?.subscribedCount && (
                <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
                {parseInt(video?.statistics?.subscribedCount).toLocaleString("en.US")} subscribers
                </Typography>
            )} 
         </CardContent>
        </Box>
  )
}

  ChannelCard.propTypes = {
    video: PropTypes.object.isRequired,
  }




 

export default ChannelCard