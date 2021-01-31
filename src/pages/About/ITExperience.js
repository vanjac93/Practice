import React from 'react'
import { Segment } from 'semantic-ui-react'
import Videos from './Videos'

export default function ITExperience() {
  return (
    <Segment basic>
      <h1>IT experience</h1>
      <div>
        <p>
          Here I will present a couple of videos and a slider from my MediaINFO work.
          <br />
            As I cannot share credentials, this is the only way to present previous work, besides these projects.
          <br />
            First, some explanation to what MediaINFO is.
          <br />
            MediaINFO is a service for digitazing all kinds of media, photos, newspaper, museum artifacts, articles, books etc.
          <br />
            User can browse digitized items, search throughout items, cut custom zones, download pages and so on.
            My role was to implement several tools like clip, and CMS for zones, which are used in clip tool, as well the pages download modal
            and most of the CMS in admin section.
          <br />
            I&apos;ll just put some short gifs of admin section in a slider, as it&apos;s no fun.
        </p>
      </div>
      <div>
        <Videos />
      </div>
    </Segment>
  )
}
