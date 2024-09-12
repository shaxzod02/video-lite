import {  Box } from "@mui/material"
import { VideoCard, ChannelCard, Loader } from  '..'
import PropTypes from 'prop-types'

   const Videos  = ({ videos }) => {
    if (!videos.length) return <Loader/>
    
  return (
    <Box width={'100%'} gap={2} display='grid' gridTemplateColumns='repeat(4, 1fr)'>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard video={item}/>}
        </Box>
      ))}
    </Box>
  )
    
  }
    
    
  



Videos.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object)
  
  
}



export default Videos