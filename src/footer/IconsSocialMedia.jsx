import React, { Component } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import './Footer.css'


export default class IconsSocialMedia extends Component {
  render() {
    return (
      <div className='icon'>
          <FacebookIcon/>
          <TwitterIcon/>
          <InstagramIcon/>
          <YouTubeIcon/>
          <PinterestIcon/>
      </div>
    )
  }
}
