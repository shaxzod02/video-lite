import { Box } from '@mui/material'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ApiService } from '../../service/api.service'
import ReactPlayer  from 'react-player'


const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [relatedVideos, setRelatedVideos] = useState(null)
  const { id } = useParams()

  useEffect(() => {
   const getData = async() => {
    try {
    const data =  await ApiService.fetching(`videos?part=snippet,statistics&id=${id}`)
    setVideoDetail(data.items[0])
    const relatedData = await ApiService.fetching(`search?part=snippet&relatedToVideoId=${id}`)
    console.log(relatedVideos) 
    setRelatedVideos(relatedData.items) 
    } catch (error) {
   console.log(error);
    } 
   } 
   
    
   
   getData()
  }, [id])
  

  //  const {
  //   snippet: {title, channelId, channelTitile, description, tags, thumbnails},
  //    statistics: {viewCount, likeCount, commentCount}, 
  //   } = videoDetail

  return  (
    <Box minHeight={'90vh'} mb={10}>
      <Box display={'flex'} sx={{flexDirection: {xs: 'column', md: 'row'}}}> 
        <Box width={{xs: '100%', md: '75%'}}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
          className='react-player' controls
          />
          {/* {videoDetail.snippet.tags.map((item, idx) => (
            // <Chip
            //  label={item}
            //  key={idx}
            //  sx={{marginTop: '10px', cursor: 'pointer', ml: '10px'}}
            //  deleteIcon={<Tag /> }
            //  onDelete={() => {}}
            //  variant='outlined'/>
              
          ))} */}
          {/* {<Typography variant='h5' fontWeight='bold' p={2}>
            {videoDetail.snippet.title}
          </Typography> }
          <Typography variant='subtitle2' p={2} sx={{ opacity: '.7'}}>
            {videoDetail.snippet.description}
          </Typography> */}
          
         </Box>
        <Box width={{xs: '100%', md: '25%'}}>Suggested video</Box>
      </Box>
    </Box>
  )
  
}

export default  VideoDetail