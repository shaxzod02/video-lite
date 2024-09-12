import { useState, useEffect } from 'react'
import {Box, Container, Stack, Typography} from "@mui/material"
import { colors } from '../../constants/colors'
import { Category, Videos } from '../'
import { ApiService } from '../../service/api.service'


 const Main = () => {
  const[selectedCategory, setSlectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  const selectedCategoryHandler = category => setSlectedCategory(category)
  

  useEffect(() => {
    const gatData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`)
        setVideos(data.data.items)
        
        
      } catch (error) {
        console.log(error)
        
      }
    }
    gatData()
  }, [selectedCategory])
   
   

  return (
    <Stack>   
      <Category selectedCategoryHandler={selectedCategoryHandler} 
      selectedCategory={selectedCategory}/>
      <Box p={2} sx={{ height: '90vh' }}>
        <Container maxWidth={'90%'}> 
          <Typography variant='h4' fontWeight={'bold'} mb={2}>
          {selectedCategory} <span style={{color: colors.secondary }}>videos</span>
          </Typography>
          <Videos videos={videos} />
          
          
        </Container>
      </Box>
    </Stack>
  )
}

export default Main