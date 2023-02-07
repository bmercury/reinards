import Head from 'next/head'
import Image from 'next/image'

import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import Header from '../../components/header/header'
import ProjectDetails from '@/components/casestudies/project-details'
import FullSizePhoto from '@/components/casestudies/full-size-photo'
import HalfSizePhoto from '@/components/casestudies/half-size-photo'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Alaise</title>
        <meta name="og:title" content="Portfolio | Chalete"/>
        <meta name="description" content="Alaise Zīmola Izstrāde un Dizains"/>
        <meta name="og:description" content="Alaise Zīmola Izstrāde un Dizains"/>        
      </Head>

      <Navbar></Navbar>
      <Header cover="alaise.jpg" title="Alaise"></Header>
      <ProjectDetails
        client="Aleksa Filipova"
        company="Alaise"
        job1title="Zīmola Attīstība"
        job1who="Reinards Jānis Saulītis"
        job2title="Grafiskais Dizains"
        job2who="Reinards Jānis Saulītis"
        >
        Info tiek gatavots
      </ProjectDetails>
      {/* <FullSizePhoto src="realdeal/a4-brochure.jpg" width="1920" height="1080"></FullSizePhoto>
      <HalfSizePhoto src="realdeal/a4-brochure.jpg" width="1920" height="1080">
        Lorem ipsum dolor
      </HalfSizePhoto> */}
      <Footer></Footer>
    </>
  )
}
